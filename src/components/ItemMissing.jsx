import React from 'react';

import './ItemMissing.scss';

const ItemMissing = ({ item, children }) => {
	if (!item)
		return <div className="ItemMissing">(nothing selected)</div>
	return children;
}

export default ItemMissing;
