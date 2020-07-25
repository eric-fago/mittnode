import React from 'react';

import Button from './Button';

import './List.scss';
import { ReactComponent as CreateIcon } from '../assets/create.svg';

const List = ({ createText, handleCreate, children }) => (
	<div className="List">
		<div className="create">
			<Button icon={CreateIcon} text={createText} handle={handleCreate}>{createText}</Button>
		</div>
		<div className="list">
			{children}
		</div>
	</div>
);

export default List;