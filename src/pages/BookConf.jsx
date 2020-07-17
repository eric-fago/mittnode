import React from 'react';
import Button from '../components/Button';
import FormInput from '../components/FormInput';

import dataService from '../services/dataService';

import deleteIcon from '../assets/delete.png';
import updateIcon from '../assets/update.png';
import './BookConf.scss';

class BookConf extends React.Component {
	state = {
		book: null,
		name: ''
	}

	async componentDidMount() {
		const match = this.props.match;
		const bookId = parseInt(match.params.id, 10);
		const book = await dataService.book.readOne(bookId);
		this.setState({ book, ...book });
	}

	handleChange = (event) => {
		const name = event.target.value;
		this.setState({ name });
	}

	handleUpdate = async () => {
		const book = { id: this.state.book.id, name: this.state.name };
		await dataService.book.update(book);

		const history = this.props.history;
		history.push(`/book/${this.state.book.id}`);
	};

	handleDelete = async () => {
		await dataService.book.delete(this.state.book.id);

		const history = this.props.history;
		history.push(`/`);
	};

	render() {
		if (!this.state.book) return null;

		return (
			<div className="BookConf">
				<div className="header">{this.state.book.name}</div>
				<div className="update">
					<FormInput label="Name:" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
					<div className="button">
						<Button icon={updateIcon} handle={this.handleUpdate}>Save</Button>
					</div>
				</div>
				<div className="delete">
					<Button icon={deleteIcon} handle={this.handleDelete}>Delete</Button>
				</div>
			</div>
		);
	}
}

export default BookConf;
