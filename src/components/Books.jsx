import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import BookItem from './BookItem';
import Spinner from './Spinner';
import { createBookAsync } from '../redux/book/bookActions';
import { selectIsLoading, selectBook, selectBooks } from '../redux/book/bookSelectors';

import './Books.scss';
import downIcon from '../assets/down.png';

const Books = ({ isLoading, book, books, createBookAsync }) => (
	<div className="Books">
		<Spinner isLoading={isLoading}>
			<div className="head">
				<span className="name">/ {book ? (book.name || '(no name)') : '(nothing selected)'} </span>
				<img src={downIcon} alt="down" className="icon" />
			</div>
			<div className="drop">
				<List createText="ADD A BOOK" handleCreate={createBookAsync}>
					{books.map(book => <BookItem key={book.id} book={book} />)}
				</List>
			</div>
		</Spinner>
	</div>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
	books: selectBooks,
	book: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	createBookAsync: () => dispatch(createBookAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);