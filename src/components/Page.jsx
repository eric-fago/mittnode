import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import BlurInput from './BlurInput';
import Item from './Item';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectPage, selectPageIsLoading } from '../redux/book/bookSelectors';
import { updatePageAsync, deletePageAsync } from '../redux/book/bookActions';

import './Page.scss';
const Page = ({ item, updatePageAsync, deletePageAsync }) => (
	<Item
		item={item}
		handleUpdate={(value) => updatePageAsync({ ...item, name: value })}
		handleDelete={() => deletePageAsync(item)}
	>
		<div className="Page">
			<div className="tool"><i>(this is where the toolbar will be)</i></div>
			<div className="text">
				<BlurInput
					component="textarea"
					id={item.id}
					value={item.text}
					onChange={(value) => updatePageAsync({ ...item, text: value })}
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
	updatePageAsync: (page) => dispatch(updatePageAsync(page)),
	deletePageAsync: (page) => dispatch(deletePageAsync(page))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Page);
