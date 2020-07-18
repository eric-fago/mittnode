import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Item from './Item';
import Pages from './Pages';
import { selectSection } from '../redux/book/bookSelectors';
import { updateSection, deleteSection } from '../redux/book/bookActions';

const Section = ({ section, updateSection, deleteSection }) => (
	<Item
		item={section}
		handleUpdate={(value) => updateSection({ ...section, name: value })}
		handleDelete={() => deleteSection(section)}
	>
		<Pages />
	</Item>
);

const mapStateToProps = createStructuredSelector({
	section: selectSection
});
const mapDispatchToProps = (dispatch) => ({
	updateSection: (section) => dispatch(updateSection(section)),
	deleteSection: (section) => dispatch(deleteSection(section))
});
export default connect(mapStateToProps, mapDispatchToProps)(Section);
