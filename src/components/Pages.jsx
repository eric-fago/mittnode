import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import PageItem from './PageItem';
import { createPageAsync } from '../redux/book/bookActions';
import { selectPages } from '../redux/book/bookSelectors';

import './Pages.scss';

const Pages = ({ pages, createPageAsync }) => (
	<List createText="ADD A PAGE" handleCreate={createPageAsync}>
		{pages.map(page => <PageItem key={page.id} page={page} />)}
	</List>
);

const mapStateToProps = createStructuredSelector({
	pages: selectPages
});
const mapDispatchToProps = (dispatch) => ({
	createPageAsync: () => dispatch(createPageAsync())
});
export default connect(mapStateToProps, mapDispatchToProps)(Pages);