import React from 'react';

import './Button.scss';

const Button = ({ icon, text, handle, children }) => {
	const iconMarkup = icon ? (<img className="icon" src={icon} alt={text} />) : '';
	const textMarkup = children ? (<span className="text">{children}</span>) : '';

	return (
		<button className="Button" onClick={handle} title={text}>
			{iconMarkup}
			{textMarkup}
		</button>
	);
};

export default Button;