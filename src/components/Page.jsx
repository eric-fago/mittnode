import React from 'react';
import ItemHeader from './ItemHeader';

const Page = ({ item, handleChangeName, handleChangeText, handleDelete }) => {
	if (!item) return (
		<div className="Page">
			<div className="Page-missing">
				Select a Page
			</div>
		</div>
	);

	return (
		<div className="Page">
			<ItemHeader item={item} handleChange={handleChangeName} handleDelete={handleDelete} />
			<div className="Page-tool"><i>(this is where the toolbar will be)</i></div>
			<div className="Page-text">
				<textarea onChange={handleChangeText} value={item.text} placeholder="(no text)" />
			</div>
		</div>
	);
};

export default Page;