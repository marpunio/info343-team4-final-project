import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import constants from './constants';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        };
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    componentDidMount() {
        this.authUnsub = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.history.push(constants.routes.home)
            } else {
                this.setState(user);
            }
        })
    }

    componentWillUnmount() {
        this.authUnsub();
    }

    handleSignUp(event) {
        event.preventDefault();
        if (this.state.password === this.state.passwordConfirmation) {
            this.setState({ password: '', passwordConfirmation: '' });
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(user => {
                    user.updateProfile({
                        displayName: this.state.displayName
                    });
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        } else {
            this.setState({ password: '', passwordConfirmation: '', errorMessage: 'Passwords do not match' });
        }
    }

    render() {
        return (
            <div className="container initial-page text-center">
                <h1>Sign Up</h1>
                {
                    this.state.errorMessage ?
                        <div className="alert alert-danger">{this.state.errorMessage}</div> :
                        undefined
                }
                <form onSubmit={this.handleSignUp}>
                    <div className="form-group">
                        <input className="form-control ml-auto mr-auto" id="displayName" type="text"
                            placeholder="Enter your display name"
                            value={this.state.displayName}
                            onInput={event => this.setState({ displayName: event.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control ml-auto mr-auto" id="email" type="email"
                            placeholder="Enter your email"
                            value={this.state.email}
                            onInput={event => this.setState({ email: event.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control ml-auto mr-auto" id="password" type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onInput={event => this.setState({ password: event.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input className="form-control ml-auto mr-auto" id="password" type="password"
                            placeholder="Confirm your password"
                            value={this.state.passwordConfirmation}
                            onInput={event => this.setState({ passwordConfirmation: event.target.value })}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Sign Up</button>
                    </div>
                </form>
                <p>
                    {/* Have an account? <Link to="/signin">Sign In!</Link> */}
                </p>
            </div>
        );
    }
}