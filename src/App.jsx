import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Books from './components/Books';
import BookPage from './pages/BookPage';
import { initialize } from './redux/book/bookActions';

import './App.scss';
import { ReactComponent as Logo } from './assets/logo.svg';

class App extends React.Component {

	componentDidMount() {
		this.props.dispatch(initialize());
	}

	render() {
		return (
			<div className="App">
				<div className="head">
					<Link to="/">
						<Logo className="logo" />
						<span className="text">Mittnode</span>
					</Link>
					<Books />
				</div>
				<div className="main">
					<Switch>
						<Route path="/" component={BookPage} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default connect()(App);
