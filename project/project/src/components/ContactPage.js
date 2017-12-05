import React from 'react';
import firebase from 'firebase/app';

export default class ContactPage extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            inquiry: ''
        };
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputEmail = this.handleInputEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputName(event) {
        this.setState({ name: event.target.value });
    }

    handleInputEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleInputInquiry(event) {
        this.setState({ inquiry: event.target.value });
    }

    handleSubmit(event) {
        let inquiryData = {
            author: {
                name: this.state.name,
                email: this.state.email,
            },
            inquiry: this.state.inquiry
        };
        let key = firebase.database().ref().child('inquiries/' + this.state.currentChannel).push().key;
        let updates = {};
        updates['inquiries/' + key] = inquiryData;
        firebase.database().ref().update(updates).then(window.alert("We will try to contact you soon!"));
        this.setState({ name: '', email: '', inquiry: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="container">
                        <h2>Talk to U:Don!</h2>
                        <p >Do you have a comment or question for the management of U:Don?
                        Please complete this form and we will do our best to respond within 24-48 hours.
                        We look forward to hearing from you!</p>
                        <div class="form-group">
                            <input className="form-control" type="text" placeholder="Name" autoComplete="off" required
                                value={this.state.name}
                                onInput={event => this.handleInputName(event)}
                            />
                        </div>
                        <div class="form-group">
                            <input className="form-control" type="Email" placeholder="Email" autoComplete="off" required
                                value={this.state.email}
                                onInput={event => this.handleInputEmail(event)}
                            />
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" type="text" placeholder="Comment or Inquiry..." rows="10" required minLength="20"
                                value={this.state.inquiry}
                                onInput={event => this.handleInputInquiry(event)}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}