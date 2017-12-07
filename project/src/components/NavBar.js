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
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href={constants.routes.home}>Profile</a></li>
                    <li><a href={constants.routes.settings}>Settings</a></li>
                    <li>
                        <form onSubmit={this.handleSignOut}>
                            <button type="submit">Sign Out</button>
                        </form>
                    </li>
                </ul>
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