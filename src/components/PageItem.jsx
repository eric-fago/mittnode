import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectPageAsync } from '../redux/book/bookActions';
import { selectPageId } from '../redux/book/bookSelectors';

const PageItem = ({ page, selectedPageId, selectPageAsync }) => (
	<ListItem item={page} selected={page.id === selectedPageId} handleSelect={() => selectPageAsync(page)} />
);

const mapStateToProps = createStructuredSelector({
	selectedPageId: selectPageId
});
const mapDispatchToProps = (dispatch) => ({
	selectPageAsync: (page) => dispatch(selectPageAsync(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(PageItem);