import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectBookAsync } from '../redux/book/bookActions';
import { selectBookId } from '../redux/book/bookSelectors';

const BookItem = ({ book, selectedBookId, selectBookAsync }) => (
	<ListItem item={book} selected={book.id === selectedBookId} handleSelect={() => selectBookAsync(book)} />
);

const mapStateToProps = createStructuredSelector({
	selectedBookId: selectBookId
});
const mapDispatchToProps = (dispatch) => ({
	selectBookAsync: (book) => dispatch(selectBookAsync(book))
});
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);