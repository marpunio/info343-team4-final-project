import React from 'react';
import { Link } from 'react-router-dom';
import constants from './constants';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container align-items-center">
                <div className="d-flex flex-nowrap justify-content-center">
                    <img id="logo-bowl" src="https://i.imgur.com/bL3Puos.png"/>
                    <img src="https://udonseattle.files.wordpress.com/2011/12/logo-bowl.png"/>
                </div>
                <div className="text-center">
                    <h2 >It's as easy as <span class="udon-red">1, 2, 3!</span></h2>
                </div>
                <div className="d-flex flex-nowrap text-center my-2">
                    <div className="mx-4">
                        <p>Step 1: Choose your favorite <span class="udon-red">NOODLE!</span></p>
                        <img src="https://udonseattle.files.wordpress.com/2011/12/menu-kitsune.png?w=170"/>
                        <p><i>Kitsune Udon</i></p>
                    </div>
                    <div className="mx-4">
                        <p>Step 2: Add your favorite <span class="udon-red">TOPPINGS & SIDES!</span></p>
                        <img src="https://udonseattle.files.wordpress.com/2011/12/menu-karaage.png?w=170"/>
                        <p><i>Karaage</i></p>
                    </div>
                    <div className="mx-4">
                        <p>Step 3: Add a <span className="udon-red">DRINK or DESSERT!</span></p>
                        <img src="https://udonseattle.files.wordpress.com/2011/12/menu-specialty-drink.png?w=170"/>
                        <p><i>Specialty Drink</i></p>
                    </div>
                </div>
            </div>
        );
    }
}