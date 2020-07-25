import React from 'react';

import './withMissing.scss';

const withMissing = WrappedComponent => {
	const Missing = ({ item, ...props }) => {
		if (item)
			return <WrappedComponent item={item} {...props} />

		return (
			<div className="Missing">(nothing selected)</div>
		);
	};
	return Missing;
};

export default withMissing;
