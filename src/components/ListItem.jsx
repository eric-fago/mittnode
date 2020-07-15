import React from 'react';

const ListItem = ({ item, itemSelected, handleSelect }) => {
	const className = "ListItem" + (item === itemSelected ? ' ListItem-selected' : '');

	return (
		<div className={className} onClick={handleSelect}>{item.name}</div>
	);
};

export default ListItem;