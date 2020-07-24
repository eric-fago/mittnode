import React from 'react';

import './Spinner.scss';

const Spinner = ({ isLoading, children }) => {
	if (isLoading)
		return (<div className="Spinner"><div className="Ring"></div></div>)
	return children;
};

export default Spinner;