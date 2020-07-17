import React from 'react';
import Button from './Button';

import deleteIcon from '../assets/delete.png';
import './ItemHeader.scss';

const ItemHeader = ({ item, handleChange, handleDelete }) => {
	if (!item) return (
		<div className="ItemHeader"></div>
	);

	return (
		<div className="ItemHeader">
			<input onChange={handleChange} value={item.name} placeholder="(no name)" />
			<Button icon={deleteIcon} text="Delete" handle={handleDelete} />
		</div>
	);
}

export default ItemHeader;