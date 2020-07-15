import React from 'react';

const Button = ({ icon, text, handle, children }) => {
	const iconMarkup = icon ? (<img src={icon} alt={text} />) : '';
	const textMarkup = children ? (<span>{children}</span>) : '';

	return (
		<span className="Button" onClick={handle}>
			{iconMarkup}
			{textMarkup}
		</span>
	);
};

export default Button;