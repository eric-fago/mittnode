import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import BookItem from './BookItem';
import withSpinner from './withSpinner';
import { createBook } from '../redux/book/bookActions';
import { selectIsLoading, selectBook, selectBooks } from '../redux/book/bookSelectors';

import './Books.scss';
import { ReactComponent as DownIcon } from '../assets/down.svg';

const Books = ({ book, books, createBook }) => (
	<div className="Books">
		<div className="head">
			<span className="name">/ {book ? (book.name || '(no name)') : '(nothing selected)'} </span>
			<DownIcon className="icon" />
		</div>
		<div className="drop">
			<List createText="ADD A BOOK" handleCreate={createBook}>
				{books.map(book => <BookItem key={book.id} book={book} />)}
			</List>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
	books: selectBooks,
	book: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	createBook: () => dispatch(createBook())
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner
)(Books);