import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import PageItem from './PageItem';
import { createPage } from '../redux/book/bookActions';
import { selectPages } from '../redux/book/bookSelectors';

import './Pages.scss';

const Pages = ({ pages, createPage }) => (
	<List createText="Add a Page" handleCreate={createPage}>
		{pages.map(page => <PageItem key={page.id} page={page} />)}
	</List>
);

const mapStateToProps = createStructuredSelector({
	pages: selectPages
});
const mapDispatchToProps = (dispatch) => ({
	createPage: () => dispatch(createPage())
});
export default connect(mapStateToProps, mapDispatchToProps)(Pages);