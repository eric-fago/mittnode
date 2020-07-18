import React from 'react';

import Button from './Button';

import './Item.scss';
import deleteIcon from '../assets/delete.png';

const Item = ({ item, handleUpdate, handleDelete, children }) => {
	if (!item) return <div className="Item miss">(nothing selected)</div>;

	return (
		<div className="Item">
			<div className="head">
				<input onChange={(e) => handleUpdate(e.target.value)} value={item.name} placeholder="(no name)" />
				<Button icon={deleteIcon} text="Delete" handle={handleDelete} />
			</div>
			<div className="main">
				{children}
			</div>
		</div>
	)
};

export default Item;
