import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Books from './Books';
import { toggleMode } from '../redux/conf/confActions';
import { selectMode } from '../redux/conf/confSelectors';
import { signOutStart } from '../redux/user/userActions';
import { selectCurrentUser } from '../redux/user/userSelectors';

import './Header.scss';
import { ReactComponent as Logo } from '../assets/logo.svg';

const ifelse = (condition, ifComponent, elseComponent) => condition ? ifComponent : elseComponent;

const Header = ({ mode, currentUser, signOutStart, toggleMode }) => (
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
			<div className="option" onClick={toggleMode}>{mode}</div>
			{ifelse(currentUser, <div className="option" onClick={signOutStart}>SIGN OUT</div>)}
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	mode: selectMode,
	currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
	toggleMode: () => dispatch(toggleMode())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
