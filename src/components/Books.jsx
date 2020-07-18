import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import BookItem from './BookItem';
import { createBook } from '../redux/book/bookActions';
import { selectBook, selectBooks } from '../redux/book/bookSelectors';

import './Books.scss';
import downIcon from '../assets/down.png';

const Books = ({ book, books, createBook }) => (
	<div className="Books">
		<div className="head">
			<span className="name">/ {book ? (book.name || '(no name)') : '(nothing selected)'} </span>
			<img src={downIcon} alt="down" className="icon" />
		</div>
		<div className="drop">
			<List createText="Add a Book" handleCreate={createBook}>
				{books.map(book => <BookItem key={book.id} book={book} />)}
			</List>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	books: selectBooks,
	book: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	createBook: () => dispatch(createBook())
});
export default connect(mapStateToProps, mapDispatchToProps)(Books);