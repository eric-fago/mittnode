import React from 'react';

import './ListItem.scss';

const ListItem = ({ item, itemSelected, handleSelect }) => {
	const className = "ListItem" + (item === itemSelected ? '  selected' : '');

	return (
		<div className={className} onClick={handleSelect}>{item.name || '(no name)'}</div>
	);
};

export default ListItem;