import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import FormInput from './FormInput';
import { signUpStart } from '../redux/user/userActions'

import './SignUp.scss';

const SignUp = ({ signUpStart }) => {
	const [credentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '' });

	const { email, password, confirmPassword } = credentials;

	const handleSubmit = (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("password don't match")
			return;
		}

		signUpStart(email, password);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="SignUp">
			<h2 className="title">I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form className="form" onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required />
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required />
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Confirm Password"
					required />

				<Button type="submit">SIGN UP</Button>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (email, password) => dispatch(signUpStart({ email, password }))
});
export default connect(null, mapDispatchToProps)(SignUp);
