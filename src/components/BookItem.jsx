import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';

import configIcon from '../assets/config.png';
import './BookItem.scss';

const handleSelect = ({ history, id }) => {
	history.push(`/book/${id}`);
};

const handleConfig = ({ history, event, id }) => {
	event.stopPropagation();
	history.push(`/book/${id}/conf`);
};

const BookItem = ({ id, name, history }) => (
	<div className="BookItem" onClick={(event) => handleSelect({ history, event, id })}>
		<span className="text">{name}</span>
		<span className="conf">
			<Button icon={configIcon} text="Config" handle={(event) => handleConfig({ history, event, id })} />
		</span>
	</div>
);

export default withRouter(BookItem);
