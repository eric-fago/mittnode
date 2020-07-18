import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/Header';
import { auth } from './firebase/firebase'
import AuthPage from './pages/AuthPage';
import BookPage from './pages/BookPage';
import { initialize } from './redux/book/bookActions';
import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.scss';

class App extends React.Component {

	componentDidMount() {
		this.props.initialize();

		this.unsubsribeFromAuth = auth.onAuthStateChanged(user => {
			this.props.setCurrentUser(user);
		});
	}

	render() {
		return (
			<div className="App">
				<div className="head">
					<Header />
				</div>
				<div className="main">
					<Switch>
						<Route exact path="/auth" render={() => this.props.currentUser ? <Redirect to="/" /> : <AuthPage />} />
						<Route path="/" render={() => this.props.currentUser ? <BookPage /> : <Redirect to="/auth" />} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
	initialize: () => dispatch(initialize()),
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
