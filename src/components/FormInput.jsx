import React from 'react';
import Input from './Input';

import './FormInput.scss';

const FormInput = ({ label, ...props }) => {
	return (
		<div className="FormInput">
			<div className="label">
				{label}
			</div>
			<div className="input">
				<Input {...props} />
			</div>
		</div>
	);
}

export default FormInput;