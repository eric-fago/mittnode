import React from 'react';

import Button from './Button';

import './List.scss';
import createIcon from '../assets/create.png';

const List = ({ createText, handleCreate, children }) => (
	<div className="List">
		<div className="create">
			<Button icon={createIcon} text={createText} handle={handleCreate}>{createText}</Button>
		</div>
		<div className="list">
			{children}
		</div>
	</div>
);

export default List;