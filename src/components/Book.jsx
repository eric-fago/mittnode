import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Sections from './Sections';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectBookIsLoading, selectBook } from '../redux/book/bookSelectors';
import { updateBookAsync, deleteBookAsync } from '../redux/book/bookActions';

const Book = ({ item, updateBookAsync, deleteBookAsync }) => (
	<Item
		item={item}
		handleUpdate={(value) => updateBookAsync({ ...item, name: value })}
		handleDelete={() => deleteBookAsync(item)}
	>
		<Sections />
	</Item >
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectBookIsLoading,
	item: selectBook
});
const mapDispatchToProps = (dispatch) => ({
	updateBookAsync: (book) => dispatch(updateBookAsync(book)),
	deleteBookAsync: (book) => dispatch(deleteBookAsync(book))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Book);
