import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import "firebase/storage";

export default class MenuPage extends React.Component {
    constructor() {
        super();
        this.state = {
            menuItems: {}
        };
    }

    componentDidMount() {
        this.menuRef = firebase.database().ref("menu")
        this.menuListener = (snapshot) => {
            this.setState({menuItems: snapshot.val()})
        }
        this.menuRef.on("value", this.menuListener)
         
    }

    componentWillUnmount() {
        this.menuRef.off("value", this.menuListener);
    }

    render() {
        let menu = []
        for(let itemID in this.state.menuItems) {
            let item = this.state.menuItems[itemID];
            let itemRender = <MenuItem soupName={item.itemName} japaneseName={item.japaneseName} descr={item.description} src={item.imageName} key={itemID}/>
            menu.push(itemRender)
        }
        return (
            <div className="menu-view bg-light py-2">
                <h1 className="my-2 text-center selection-1 barlow">T h e  &nbsp; <span className="udon-red">S e l e c t i o n</span></h1>
                <h3 className="text-center selection-2 barlow">Noodles for every occasion</h3>
                <div className="barlow container d-flex flex-wrap justify-content-center text-center">
                    {menu}
                </div>
                <br />
                <br />

                <h2 className="text-center selection-2 barlow">Add a <span className="font-weight-bold">CRUNCH</span> or something <span className="font-weight-bold">SWEET</span></h2>
                <div className="barlow container d-flex flex-wrap justify-content-center text-center">
                    <MenuItem soupName="Tempura" japaneseName="天ぷら"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-tempura.png?w=170&zoom=2" alt="tempura" />
                    <MenuItem soupName="Kaki-Age" japaneseName="かき揚げ"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-kakiage.png?w=170&zoom=2" alt="kakiage" />
                    <MenuItem soupName="Kaarage" japaneseName="唐揚げ"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-karaage.png?w=170&zoom=2" alt="kaarage" />
                    <MenuItem soupName="Onigiri" japaneseName="おむすび"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-onigiri2.png?w=170&zoom=2" alt="onigiri" />
                    <MenuItem soupName="Fountain Drink" japaneseName="お飲物"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-fountain-drink.png?w=170&zoom=2" alt="drink" />
                    <MenuItem soupName="Specialty Drink" japaneseName="お飲物"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-specialty-drink.png?w=170&zoom=2" alt="specialty drink" />
                    <MenuItem soupName="Cake Slice" japaneseName="デザート"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-cake.png?w=170&zoom=2" alt="cake" />
                    <MenuItem soupName="Flan/Purin" japaneseName="デザート"
                        src="https://udonseattle.files.wordpress.com/2011/12/menu-flan.png?w=170&zoom=2" alt="flan/purin" />
                </div>
                {this.props.user ? <AddMenuItem /> : undefined}
            </div>
        );
    }
}

class MenuItem extends React.Component {
    render() {
        return (
            <div className="menu-item px-2 my-2 mx-2 col-lg-3">
                <img className="menu-pic" src={this.props.src}/>
                <div className="menu-japanese">
                    <p className="my-1 font-weight-bold">{this.props.soupName}</p>
                    <p className="my-0">{this.props.japaneseName}</p>
                    <p className="menu-desc my-0">{this.props.descr}</p>
                </div>
            </div>
        );
    }
}

class AddMenuItem extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: '',
            japaneseName: '',
            description: '',
            imageSource: ''
        };
        this.handleInputItemName = this.handleInputItemName.bind(this);
        this.handleInputJapaneseName = this.handleInputJapaneseName.bind(this);
        this.handleInputDescription = this.handleInputDescription.bind(this);
        this.handleAddMenuItem = this.handleAddMenuItem.bind(this);

    }

    handleInputItemName(event) {
        this.setState({ itemName: event.target.value });
    }

    handleInputJapaneseName(event) {
        this.setState({ japaneseName: event.target.value });
    }

    handleInputDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleUploadImage(event) {
        let file = event.target.files[0];
        console.log(file);
        if (file) {
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => this.foodImage.src = reader.result;
        }
    }

    handleAddMenuItem() {
        let key = firebase.database().ref().child('menu/').push().key;
        let menuData = {
            itemName: this.state.itemName,
            japaneseName: this.state.japaneseName,
            description: this.state.description,
            imageSource: this.state.imageSource
        };
        let updates = {};
        updates['menu/' + key] = menuData;
        firebase.database().ref().update(updates);
        this.setState({ itemName: '', japaneseName: '', description: '', imageSource: '' });
    }

    render() {
        return (
            <div className="center">
                <button className="btn btn-dark" data-toggle="modal" data-target="#addMenuItem">Add Menu Item</button>
                <div className="modal fade" id="addMenuItem" tabIndex="-1" role="dialog" aria-labelledby="addMenuItemLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div id="modalHeader" className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="modalBody" className="modal-body">
                                <h2>Add New Menu Item</h2>
                                <img className="food-item" alt="Food Item" ref={foodImage => this.foodImage = foodImage} />
                                <button className="btn btn-dark d-block mt-3 mb-3 mx-auto" onClick={() => this.imageInput.click()}>Add Image</button>
                                <label className="custom-control custom-radio">
                                    <input id="radio1" name="radio" type="radio" className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Udon</span>
                                </label>
                                <label className="custom-control custom-radio">
                                    <input id="radio2" name="radio" type="radio" className="custom-control-input" />
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Side/Dessert/Drink</span>
                                </label>
                                <div className="form-group">
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Item Name" required
                                        value={this.state.itemName}
                                        onInput={event => this.handleInputItemName(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Japanese Name" required
                                        value={this.state.japaneseName}
                                        onInput={event => this.handleInputJapaneseName(event)}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Description" rows="4"
                                        value={this.state.description}
                                        onInput={event => this.handleInputDescription(event)}>
                                    </textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" onClick={() => this.handleAddMenuItem()}>Save</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            <input className="hide" type="file" accept="image/*" required
                                ref={imageInput => this.imageInput = imageInput}
                                onChange={(event) => this.handleUploadImage(event)}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}