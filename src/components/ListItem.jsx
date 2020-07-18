import React from 'react';

import './ListItem.scss';

const ListItem = ({ item, selected, handleSelect }) => {
	const className = "ListItem" + (selected ? '  selected' : '');

	return (
		<div className={className} onClick={handleSelect}>{item.name || '(no name)'}</div>
	);
};

export default ListItem;