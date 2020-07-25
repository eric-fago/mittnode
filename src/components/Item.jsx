import React from 'react';

import BlurInput from './BlurInput';
import Button from './Button';
import Input from './Input';

import './Item.scss';
import deleteIcon from '../assets/delete.png';

const Item = ({ item, handleUpdate, handleDelete, children }) => (
	<div className="Item">
		<div className="head">
			<BlurInput component={Input}
				id={item.id}
				value={item.name}
				onChange={handleUpdate}
				placeholder="(no name)" />
			<Button icon={deleteIcon} text="DELETE" handle={handleDelete} />
		</div>
		<div className="main">
			{children}
		</div>
	</div>
);

export default Item;
