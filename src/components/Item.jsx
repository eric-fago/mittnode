import React from 'react';
import Button from './Button';
import ItemHeader from './ItemHeader';
import ListItem from './ListItem';

import createIcon from '../icons/create.png';

const Items = ({ itemType, item, handleChange, handleDelete, listType, list, listSelected, handleCreate, handleSelect }) => {
	if (itemType && !item) return (
		<div className="Item">
			<div className="Item-missing">
				Select a {itemType}
			</div>
		</div>
	);

	return (
		<div className="Item">
			<ItemHeader item={item} handleChange={handleChange} handleDelete={handleDelete} />
			<div className="Item-list-create">
				<Button icon={createIcon} text={'Add a ' + listType} handle={handleCreate}>Add a {listType}</Button>
			</div>
			<div className="Item-list">
				{list.map(i => <ListItem key={i.id} item={i} itemSelected={listSelected} handleSelect={() => handleSelect(i.id)} />)}
			</div>
		</div>
	);
}

export default Items;