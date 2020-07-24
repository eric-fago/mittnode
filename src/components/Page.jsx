import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import BlurTextArea from './BlurTextArea';
import Item from './Item';
import { selectPage, selectPageIsLoading } from '../redux/book/bookSelectors';
import { updatePageAsync, deletePageAsync } from '../redux/book/bookActions';

import './Page.scss';
const Page = ({ isLoading, page, updatePageAsync, deletePageAsync }) => (
	<Item
		isLoading={isLoading}
		item={page}
		handleUpdate={(value) => updatePageAsync({ ...page, name: value })}
		handleDelete={() => deletePageAsync(page)}
	>
		<div className="Page">
			<div className="tool"><i>(this is where the toolbar will be)</i></div>
			<div className="text">
				<BlurTextArea
					id={page && page.id}
					value={page && page.text}
					onChange={(value) => updatePageAsync({ ...page, text: value })}
					placeholder="(no text)" />
			</div>
		</div>
	</Item>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectPageIsLoading,
	page: selectPage
});
const mapDispatchToProps = (dispatch) => ({
	updatePageAsync: (page) => dispatch(updatePageAsync(page)),
	deletePageAsync: (page) => dispatch(deletePageAsync(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(Page);