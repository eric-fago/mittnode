import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import List from './List';
import SectionItem from './SectionItem';
import { createSection } from '../redux/book/bookActions';
import { selectSections } from '../redux/book/bookSelectors';

const Sections = ({ sections, createSection }) => (
	<List createText="ADD A SECTION" handleCreate={createSection}>
		{sections.map(section => <SectionItem key={section.id} section={section} />)}
	</List>
);

const mapStateToProps = createStructuredSelector({
	sections: selectSections
});
const mapDispatchToProps = (dispatch) => ({
	createSection: () => dispatch(createSection())
});
export default connect(mapStateToProps, mapDispatchToProps)(Sections);