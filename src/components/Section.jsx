import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Pages from './Pages';
import { selectSectionIsLoading, selectSection } from '../redux/book/bookSelectors';
import { updateSectionAsync, deleteSectionAsync } from '../redux/book/bookActions';

const Section = ({ isLoading, section, updateSectionAsync, deleteSectionAsync }) => (
	<Item
		isLoading={isLoading}
		item={section}
		handleUpdate={(value) => updateSectionAsync({ ...section, name: value })}
		handleDelete={() => deleteSectionAsync(section)}
	>
		<Pages />
	</Item>
);

const mapStateToProps = createStructuredSelector({
	isLoading: selectSectionIsLoading,
	section: selectSection
});
const mapDispatchToProps = (dispatch) => ({
	updateSectionAsync: (section) => dispatch(updateSectionAsync(section)),
	deleteSectionAsync: (section) => dispatch(deleteSectionAsync(section))
});
export default connect(mapStateToProps, mapDispatchToProps)(Section);
