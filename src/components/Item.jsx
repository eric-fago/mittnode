import React from 'react';

import BlurInput from './BlurInput';
import Button from './Button';
import Input from './Input';

import './Item.scss';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';

const Item = ({ item, handleUpdate, handleDelete, children }) => (
	<div className="Item">
		<div className="head">
			<BlurInput component={Input}
				id={item.id}
				value={item.name}
				onChange={handleUpdate}
				placeholder="(no name)" />
			<Button icon={DeleteIcon} text="DELETE" handle={handleDelete} />
		</div>
		<div className="main">
			{children}
		</div>
	</div>
);

export default Item;
