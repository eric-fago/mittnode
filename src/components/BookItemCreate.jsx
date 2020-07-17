import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from './Button';
import Input from './Input';

import dataService from '../services/dataService';

import createIcon from '../assets/create.png';
import './BookItemCreate.scss';

class BookItemCreate extends React.Component {
	state = {
		name: ''
	};

	handleChange = (event) => {
		const name = event.target.value;
		this.setState({ name });
	}

	handleKeyPress = async (event) => {
		if (event.key !== "Enter") return;

		this.handleCreate();
	}

	handleCreate = async () => {
		const name = this.state.name;
		if (!name) return;

		const book = await dataService.book.create({ name });

		const history = this.props.history;
		history.push(`/book/${book.id}`);
	};

	render() {
		return (
			<div className="BookItemCreate">
				<Input onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.state.name} placeholder="Add a book" />
				<Button icon={createIcon} text="Create" handle={this.handleCreate} />
			</div>
		);
	}
}

export default withRouter(BookItemCreate);
