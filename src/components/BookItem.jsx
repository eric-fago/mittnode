import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectBook } from '../redux/book/bookActions';
import { selectBookId } from '../redux/book/bookSelectors';

const BookItem = ({ book, selectedBookId, selectBook }) => (
	<ListItem item={book} selected={book.id === selectedBookId} handleSelect={() => selectBook(book)} />
);

const mapStateToProps = createStructuredSelector({
	selectedBookId: selectBookId
});
const mapDispatchToProps = (dispatch) => ({
	selectBook: (book) => dispatch(selectBook(book))
});
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);