import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from './ListItem';
import { selectSectionAsync } from '../redux/book/bookActions';
import { selectSectionId } from '../redux/book/bookSelectors';

const SectionItem = ({ section, selectedSectionId, selectSectionAsync }) => (
	<ListItem item={section} selected={section.id === selectedSectionId} handleSelect={() => selectSectionAsync(section)} />
);

const mapStateToProps = createStructuredSelector({
	selectedSectionId: selectSectionId
});
const mapDispatchToProps = (dispatch) => ({
	selectSectionAsync: (section) => dispatch(selectSectionAsync(section))
});
export default connect(mapStateToProps, mapDispatchToProps)(SectionItem);