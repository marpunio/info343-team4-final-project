import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import constants from './components/constants'
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Router>
					<Switch>
						<Route exact path={constants.routes.home} component={HomePage} />
						<Route exact path={constants.routes.signup} component={SignUp} />
						<Route exact path={constants.routes.signin} component={SignIn} />
						<Route exact path={constants.routes.menu} component={MenuPage} />
						<Route exact path={constants.routes.contact} component={ContactPage} />
						<Route component={HomePage} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
