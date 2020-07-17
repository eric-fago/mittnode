import React from 'react';
import ItemHeader from './ItemHeader';

import './Page.scss';

const Page = ({ item, handleChangeName, handleChangeText, handleDelete }) => {
	if (!item) return (
		<div className="Page">
			<div className="missing">
				Select a Page
			</div>
		</div>
	);

	return (
		<div className="Page">
			<ItemHeader item={item} handleChange={handleChangeName} handleDelete={handleDelete} />
			<div className="tool"><i>(this is where the toolbar will be)</i></div>
			<div className="text">
				<textarea onChange={handleChangeText} value={item.text} placeholder="(no text)" />
			</div>
		</div>
	);
};

export default Page;