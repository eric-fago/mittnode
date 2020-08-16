import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Sections from './Sections';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectBookIsLoading, selectBook } from '../redux/book/bookSelectors';
import { updateBook, deleteBook } from '../redux/book/bookActions';

const Book = ({ item, updateBook, deleteBook }) => (
	<Item
		item={item}
		handleUpdate={(value) => updateBook({ ...item, name: value })}
		handleDelete={() => deleteBook(item)}
	>
		<Sections />
	</Item >
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectBookIsLoading,
	item: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	updateBook: (book) => dispatch(updateBook(book)),
	deleteBook: (book) => dispatch(deleteBook(book))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Book);
