import React from 'react';

import './withSpinner.scss';

const Spinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...props }) => {
		if (!isLoading)
			return <WrappedComponent {...props} />;

		return (
			<div className="Spinner">
				<div className="Ring"></div>
			</div>
		);
	};
	return Spinner;
}

export default Spinner;