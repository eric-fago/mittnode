import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Books from './Books';
import { auth } from '../firebase/firebase';
import { selectCurrentUser } from '../redux/user/userSelectors';

import './Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { connect } from 'react-redux';

const ifelse = (condition, ifComponent, elseComponent) => condition ? ifComponent : elseComponent;

const Header = ({ currentUser }) => (
	<div className="Header">
		<div className="menu">
			<Link to="/">
				<Logo className="logo" />
				<span className="text">Mittnode</span>
			</Link>
			<div className="book">
				{ifelse(currentUser, <Books />)}
			</div>
		</div>
		<div className="options">
			{ifelse(currentUser, <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
export default connect(mapStateToProps)(Header);
