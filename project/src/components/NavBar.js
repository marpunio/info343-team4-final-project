import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import constants from './constants';
import '../css/NavBar.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand" href={constants.routes.home}>
                        <img src="http://www.mataro-parc.com/sites/default/files/field/operador-logo/udon_-_logo.jpg" alt="udon-logo" />
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link barlow" href={constants.routes.menu}>Menu</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link barlow" href={constants.routes.contact}>Contact Us</a>
                        </li>
                        {
                            this.props.user ?
                                <Dropdown /> :
                                <SignRedirect />
                        }
                    </ul>
                </nav>
            </div>
        );
    }
}

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(event) {
        event.preventDefault();
        firebase.auth().signOut()
            .then(this.props.history.push(constants.routes.home))
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <div className="dropdown">
                <button className="nav-link barlow dropdown-toggle mx-2" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User Settings
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item barlow" href={constants.routes.order}>Order</a>
                    <a className="dropdown-item barlow" href={constants.routes.settings}>Settings</a>
                    <a type="submit" className="dropdown-item barlow" onClick={this.handleSignOut}>Sign Out</a>
                </div>
            </div>
        );
    }
}

class SignRedirect extends React.Component {
    render() {
        return (
            <div className="d-flex flex-nowrap">
                <li className="nav-item">
                    <a className="nav-link barlow" href={constants.routes.signin}>Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link barlow" href={constants.routes.signup}>Sign Up</a>
                </li>
            </div>
        );
    }
}