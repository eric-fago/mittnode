import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Sections from './Sections';
import { selectBook } from '../redux/book/bookSelectors';
import { updateBook, deleteBook } from '../redux/book/bookActions';

const Book = ({ book, updateBook, deleteBook }) => (
	<Item
		item={book}
		handleUpdate={(value) => updateBook({ ...book, name: value })}
		handleDelete={() => deleteBook(book)}
	>
		<Sections />
	</Item >
);

const mapStateToProps = createStructuredSelector({
	book: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	updateBook: (book) => dispatch(updateBook(book)),
	deleteBook: (book) => dispatch(deleteBook(book))
});
export default connect(mapStateToProps, mapDispatchToProps)(Book);
