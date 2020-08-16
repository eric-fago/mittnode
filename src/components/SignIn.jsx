import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import FormInput from './FormInput';
import { emailSignInStart, googleSignInStart } from '../redux/user/userActions';

import './SignIn.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [credentials, setCredentials] = useState({ email: '', password: '' });

	const { email, password } = credentials;

	const handleSubmit = (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	return (
		<div className="SignIn">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form className="form" onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					name="email"
					type="email"
					value={email}
					required
					onChange={handleChange} />

				<FormInput
					label="Password"
					name="password"
					type="password"
					value={password}
					required
					onChange={handleChange} />

				<div className="buttons">
					<Button type="submit">SIGN IN</Button>
					<Button type="button" classes="alternate" handle={googleSignInStart}>SIGN IN WITH GOOGLE</Button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
	googleSignInStart: () => dispatch(googleSignInStart()),
});
export default connect(null, mapDispatchToProps)(SignIn);
