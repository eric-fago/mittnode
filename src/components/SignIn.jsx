import React from 'react';
import { connect } from 'react-redux';

import Button from './Button';
import FormInput from './FormInput';
import { emailSignInStart, googleSignInStart } from '../redux/user/userActions';

import './SignIn.scss';

class SignIn extends React.Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { emailSignInStart } = this.props;
		const { email, password } = this.state;
		emailSignInStart(email, password);
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSignInStart } = this.props;

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
						<Button type="button" classes="alternate" handle={googleSignInStart}>SIGN IN WITH GOOGLE</Button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
	googleSignInStart: () => dispatch(googleSignInStart()),
});
export default connect(null, mapDispatchToProps)(SignIn);
