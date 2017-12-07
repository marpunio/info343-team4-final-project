import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import constants from './constants';
import '../css/NavBar.css';

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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href={constants.routes.menu}>Menu</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href={constants.routes.contact}>Contact Us</a>
                        </li>
                        {/* checks if an account is logged in */}
                        {
                            this.props.user ?
                                <li className="nav-item">
                                    <button className="btn btn-primary" onClick={this.handleSignOut} type="submit">Sign out</button>
                                    <p>{this.props.privilege}</p>
                                </li> :
                                <div className="d-flex flex-nowrap">
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