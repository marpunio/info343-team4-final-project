import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Cart from './components/Cart';
import Contact from './components/ContactPage';
import Footer from './components/Footer';
import Home from './components/HomePage';
import Mission from './components/MissionPage';
import Menu from './components/MenuPage';
import NavBar from './components/NavBar';
import SignUp from './components/SignUpPage';
import SignIn from './components/SignInPage';
import UserSettings from './components/UserSettingPage';
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
						<Route exact path={constants.routes.contact} component={Contact} />
						<Route exact path={constants.routes.home} component={Home} />
						<Route exact path={constants.routes.menu}
							render={
								props => <Menu {...props} user={this.state.user} privilege={this.state.privilege} />
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
						<Route component={Home} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
