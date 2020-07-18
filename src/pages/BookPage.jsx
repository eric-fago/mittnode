import React from 'react';

import Book from '../components/Book';
import Page from '../components/Page';
import Section from '../components/Section';

import './BookPage.scss';

const BookPage = () => (
	<div className="BookPage">
		<Book />
		<Section />
		<Page />
	</div>
);

export default BookPage;
