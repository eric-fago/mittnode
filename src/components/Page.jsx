import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import { selectPage } from '../redux/book/bookSelectors';
import { updatePage, deletePage } from '../redux/book/bookActions';

import './Page.scss';
const Page = ({ page, updatePage }) => (
	<Item
		item={page}
		handleUpdate={(value) => updatePage({ ...page, name: value })}
		handleDelete={() => deletePage(page)}
	>
		<div className="Page">
			<div className="tool"><i>(this is where the toolbar will be)</i></div>
			<div className="text">
				<textarea value={page && page.text} onChange={(event) => updatePage({ ...page, text: event.target.value })} placeholder="(no text)" />
			</div>
		</div>
	</Item>
);

const mapStateToProps = createStructuredSelector({
	page: selectPage
});
const mapDispatchToProps = (dispatch) => ({
	updatePage: (page) => dispatch(updatePage(page)),
	deletePage: (page) => dispatch(deletePage(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(Page);