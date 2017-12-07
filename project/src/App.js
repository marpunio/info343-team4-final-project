import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import constants from './components/constants';

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
				console.log(user)
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
			<div>
				<NavBar privilege={this.state.privilege} user={this.state.user} />
				<Router>
					<Switch>
						<Route exact path={constants.routes.home} component={HomePage} />
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
