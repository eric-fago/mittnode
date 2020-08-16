import React, { useState } from 'react';

import useChange from '../hooks/useChange';

const BlurInput = ({ id, value, component, onChange, ...props }) => {
	const [currValue, setCurrValue] = useState(value);

	useChange(id, () => {
		setCurrValue(value);
	}, [value, setCurrValue]);

	const handleChange = (value) => {
		setCurrValue(value);
	};

	const handleUpdate = () => {
		if (value === currValue)
			return;

		onChange(currValue);
	};

	return React.createElement(component, {
		...props,
		value: currValue,
		onChange: (e) => handleChange(e.target.value),
		onBlur: () => handleUpdate(),
	});
}

export default BlurInput;
