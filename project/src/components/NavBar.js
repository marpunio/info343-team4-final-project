
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import constants from './constants';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(event) {
        event.preventDefault();
        firebase.auth().signOut()
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark">
                    <a className="navbar-brand" href={constants.routes.home}>
                        <img src="http://www.mataro-parc.com/sites/default/files/field/operador-logo/udon_-_logo.jpg" alt="udon-logo" />
                    </a>
<<<<<<< HEAD
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href={constants.routes.menu}>Menu</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href={constants.routes.contact}>Contact Us</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href={constants.routes.signin}>Sign In</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href={constants.routes.signup}>Sign Up</a>
=======
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href={constants.routes.menu}>Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/udon.noodle.station/">Facebook</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://twitter.com">Twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={constants.routes.contact}>Contact Us</a>
>>>>>>> 637b8bc51da1ea57769636887e9f87e9cebf5560
                        </li>
                        {
                            this.props.user ?
                                <li className="nav-item">
                                    <button className="btn btn-primary" onClick={this.handleSignOut} type="submit">Sign out</button>
                                </li> :
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href={constants.routes.signin}>Sign In</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={constants.routes.signup}>Sign Up</a>
                                    </li>
                                </div>
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}