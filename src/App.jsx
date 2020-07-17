import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Books from './pages/Books';
import Book from './pages/Book';
import BookConf from './pages/BookConf';

import { ReactComponent as Logo } from './assets/logo.svg';
import './App.scss';

const App = () => (
	<div className="App">
		<div className="head">
			<Link to="/">
				<Logo className="logo" />
				<span className="text">Mittnode</span>
			</Link>
		</div>
		<div className="main">
			<Switch>
				<Route exact path="/book/:id/conf" component={BookConf} />
				<Route exact path="/book/:id" component={Book} />
				<Route path="/" component={Books} />
			</Switch>
		</div>
	</div>
);

export default App;
