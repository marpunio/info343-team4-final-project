import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Cart from './components/Cart';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Mission from './components/Mission';
import MenuPage from './components/MenuPage';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserSettings from './components/UserSettings';
import constants from './components/constants';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			privilege: undefined,
			user: undefined
		};
		this.handlePrivilege = this.handlePrivilege.bind(this);
	}

	componentDidMount() {
		this.authUnsub = firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user: user });
			} else {
				this.setState({ user: undefined });
			}
		});
	}

	componentWillUnmount() {
		this.authUnsub();
	}

	handlePrivilege(privilegeInput) {
		this.setState({ privilege: privilegeInput });
	}

	render() {
		return (
			<div className="page-view">
				<NavBar privilege={this.state.privilege} user={this.state.user} />
				<Router>
					<Switch>
						<Route exact path={constants.routes.cart} component={Cart} />
						<Route exact path={constants.routes.contact} component={ContactPage} />
						<Route exact path={constants.routes.home} component={HomePage} />
						<Route exact path={constants.routes.menu}
							render={
								props => <MenuPage {...props} user={this.state.user} />
							}
						/>
						<Route exact path={constants.routes.mission} component={Mission} />
						<Route exact path={constants.routes.signup}
							render={
								props => <SignUp {...props} handlePrivilege={this.handlePrivilege} />
							}
						/>
						<Route exact path={constants.routes.signin}
							render={
								props => <SignIn {...props} handlePrivilege={this.handlePrivilege} />
							}
						/>
						<Route exact path={constants.routes.settings} component={UserSettings} />
						<Route component={HomePage} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
