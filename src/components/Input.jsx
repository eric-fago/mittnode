import React from 'react';

import './Input.scss';

const Input = ({ ...props }) => {
	return (
		<input className="Input" {...props} />
	);
}

export default Input;