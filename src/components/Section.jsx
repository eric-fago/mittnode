import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Pages from './Pages';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectSectionIsLoading, selectSection } from '../redux/book/bookSelectors';
import { updateSectionAsync, deleteSectionAsync } from '../redux/book/bookActions';

const Section = ({ item, updateSectionAsync, deleteSectionAsync }) => (
	<Item
		item={item}
		handleUpdate={(value) => updateSectionAsync({ ...item, name: value })}
		handleDelete={() => deleteSectionAsync(item)}
	>
		<Pages />
	</Item>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectSectionIsLoading,
	item: selectSection
});
const mapDispatchToProps = (dispatch) => ({
	updateSectionAsync: (section) => dispatch(updateSectionAsync(section)),
	deleteSectionAsync: (section) => dispatch(deleteSectionAsync(section))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Section);
