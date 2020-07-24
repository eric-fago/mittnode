import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Sections from './Sections';
import { selectBookIsLoading, selectBook } from '../redux/book/bookSelectors';
import { updateBookAsync, deleteBookAsync } from '../redux/book/bookActions';

const Book = ({ isLoading, book, updateBookAsync, deleteBookAsync }) => (
	<Item
		isLoading={isLoading}
		item={book}
		handleUpdate={(value) => updateBookAsync({ ...book, name: value })}
		handleDelete={() => deleteBookAsync(book)}
	>
		<Sections />
	</Item >
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectBookIsLoading,
	book: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	updateBookAsync: (book) => dispatch(updateBookAsync(book)),
	deleteBookAsync: (book) => dispatch(deleteBookAsync(book))
});
export default connect(mapStateToProps, mapDispatchToProps)(Book);
