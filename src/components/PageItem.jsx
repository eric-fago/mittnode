import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectPage } from '../redux/book/bookActions';
import { selectPageId } from '../redux/book/bookSelectors';

const PageItem = ({ page, selectedPageId, selectPage }) => (
	<ListItem item={page} selected={page.id === selectedPageId} handleSelect={() => selectPage(page)} />
);

const mapStateToProps = createStructuredSelector({
	selectedPageId: selectPageId
});
const mapDispatchToProps = (dispatch) => ({
	selectPage: (page) => dispatch(selectPage(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(PageItem);