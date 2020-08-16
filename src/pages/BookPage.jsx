import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Book from '../components/Book';
import Page from '../components/Page';
import Section from '../components/Section';
import { initialize } from '../redux/book/bookActions';

import './BookPage.scss';

const BookPage = ({ initialize }) => {
	useEffect(() => {
		initialize();
	}, [initialize]);

	return (
		<div className="BookPage">
			<Book />
			<Section />
			<Page />
		</div>
	)
};

const mapDispatchToProps = (dispatch) => ({
	initialize: () => dispatch(initialize())
});
export default connect(null, mapDispatchToProps)(BookPage);
