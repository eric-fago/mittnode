import React from 'react';

import Button from './Button';
import FormInput from './FormInput';

import { auth } from '../firebase/firebase';

import './SignUp.scss';

class SignUp extends React.Component {
	state = {
		email: '',
		password: '',
		confirmPassword: ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("password don't match")
			return;
		}

		try {
			auth.createUserWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '', confirmPassword: '' });
		} catch (error) {
			console.log('user creation failed', error.message);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		const { email, password, confirmPassword } = this.state;

		return (
			<div className="SignUp">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className="form" onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required />
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required />
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required />

					<Button type="submit">SIGN UP</Button>
				</form>
			</div>
		);
	}
}

export default SignUp;