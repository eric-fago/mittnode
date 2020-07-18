import React from 'react';

import './AuthPage.scss';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const AuthPage = () => (
	<div className="AuthPage">
		<SignIn />
		<SignUp />
	</div>
);

export default AuthPage;