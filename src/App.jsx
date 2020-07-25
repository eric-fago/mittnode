import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header';
import { auth } from './firebase/firebase'
import AuthPage from './pages/AuthPage';
import BookPage from './pages/BookPage';
import { selectMode } from './redux/conf/confSelectors';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.scss';

class App extends React.Component {

	componentDidMount() {
		this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
			const { setCurrentUser } = this.props;
			setCurrentUser(user);
		});
	}

	render() {
		const { mode, currentUser } = this.props;

		return (
			<div className={`App ${mode}`}>
				<div className="head">
					<Header />
				</div>
				<div className="main">
					<Switch>
						<Route exact path="/auth" render={() => currentUser ? <Redirect to="/" /> : <AuthPage />} />
						<Route path="/" render={() => currentUser ? <BookPage /> : <Redirect to="/auth" />} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	mode: selectMode,
	currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
