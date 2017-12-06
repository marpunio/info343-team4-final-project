
import React from 'react';
import constants from './constants';


export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark">
                    <a class="navbar-brand" href={constants.routes.home}>
                        <img src="http://www.mataro-parc.com/sites/default/files/field/operador-logo/udon_-_logo.jpg" alt="udon-logo"/>
                    </a>
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
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}