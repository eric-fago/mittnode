import React from 'react';

import './Button.scss';

const Button = ({ icon, text, type, classes, handle, children }) => {
	const iconMarkup = icon ? (React.createElement(icon, { className: 'icon' })) : '';
	const textMarkup = children ? (<span className="text">{children}</span>) : '';

	return (
		<button type={type || 'button'} className={`Button ${classes}`} onClick={handle} title={text}>
			{iconMarkup}
			{textMarkup}
		</button>
	);
};

export default Button;