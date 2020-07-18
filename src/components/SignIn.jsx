import React from 'react';

import Button from './Button';
import FormInput from './FormInput';
import { auth, signInWithGoogle } from '../firebase/firebase';

import './SignIn.scss';

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log('error logging in', error.message);
		}
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="SignIn">
				<h2 className="title">I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form className="form" onSubmit={this.handleSubmit}>
					<FormInput
						label="Email"
						name="email"
						type="email"
						value={this.state.email}
						required
						onChange={this.handleChange} />

					<FormInput
						label="Password"
						name="password"
						type="password"
						value={this.state.password}
						required
						onChange={this.handleChange} />

					<div className="buttons">
						<Button type="submit">SIGN IN</Button>
						<Button type="button" classes="alternate" handle={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
