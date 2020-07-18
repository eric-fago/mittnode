import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectSection } from '../redux/book/bookActions';
import { selectSectionId } from '../redux/book/bookSelectors';

const SectionItem = ({ section, selectedSectionId, selectSection }) => (
	<ListItem item={section} selected={section.id === selectedSectionId} handleSelect={() => selectSection(section)} />
);

const mapStateToProps = createStructuredSelector({
	selectedSectionId: selectSectionId
});
const mapDispatchToProps = (dispatch) => ({
	selectSection: (section) => dispatch(selectSection(section))
});
export default connect(mapStateToProps, mapDispatchToProps)(SectionItem);