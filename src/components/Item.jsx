import React from 'react';

import Button from './Button';
import ItemMissing from './ItemMissing';
import Spinner from './Spinner';

import './Item.scss';
import deleteIcon from '../assets/delete.png';

// TODO: item && item.name is done due to ItemMissing... (this and Spinner needs to be an hoc)
const Item = ({ isLoading, item, handleUpdate, handleDelete, children }) => (
	<div className="Item">
		<Spinner isLoading={isLoading}>
			<ItemMissing item={item}>
				<div className="head">
					<input onChange={(e) => handleUpdate(e.target.value)} value={item && item.name} placeholder="(no name)" />
					<Button icon={deleteIcon} text="DELETE" handle={handleDelete} />
				</div>
				<div className="main">
					{children}
				</div>
			</ItemMissing>
		</Spinner>
	</div>
);

export default Item;
