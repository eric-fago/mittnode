import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import BlurInput from './BlurInput';
import Item from './Item';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectPage, selectPageIsLoading } from '../redux/book/bookSelectors';
import { updatePage, deletePage } from '../redux/book/bookActions';

import './Page.scss';
const Page = ({ item, updatePage, deletePage }) => (
	<Item
		item={item}
		handleUpdate={(value) => updatePage({ ...item, name: value })}
		handleDelete={() => deletePage(item)}
	>
		<div className="Page">
			<div className="tool"><i>(this is where the toolbar will be)</i></div>
			<div className="text">
				<BlurInput
					component="textarea"
					id={item.id}
					value={item.text}
					onChange={(value) => updatePage({ ...item, text: value })}
					placeholder="(no text)" />
			</div>
		</div>
	</Item>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectPageIsLoading,
	item: selectPage
});
const mapDispatchToProps = (dispatch) => ({
	updatePage: (page) => dispatch(updatePage(page)),
	deletePage: (page) => dispatch(deletePage(page))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Page);
