import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Pages from './Pages';
import withMissing from './withMissing';
import withSpinner from './withSpinner';
import { selectSectionIsLoading, selectSection } from '../redux/book/bookSelectors';
import { updateSection, deleteSection } from '../redux/book/bookActions';

const Section = ({ item, updateSection, deleteSection }) => (
	<Item
		item={item}
		handleUpdate={(value) => updateSection({ ...item, name: value })}
		handleDelete={() => deleteSection(item)}
	>
		<Pages />
	</Item>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectSectionIsLoading,
	item: selectSection
});
const mapDispatchToProps = (dispatch) => ({
	updateSection: (section) => dispatch(updateSection(section)),
	deleteSection: (section) => dispatch(deleteSection(section))
});
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withSpinner,
	withMissing
)(Section);
