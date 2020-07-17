import React from 'react';
import BookItemCreate from '../components/BookItemCreate';
import BookItem from '../components/BookItem';

import dataService from '../services/dataService';

import './Books.scss';

class Books extends React.Component {
	state = {
		books: []
	};

	async componentDidMount() {
		const books = await dataService.book.readAll();
		this.setState({ books });
	}

	render() {
		return (
			<div className="Books">
				<div className="header">Books</div>
				<div className="list">
					<BookItemCreate />
					{this.state.books.map((book) => (<BookItem key={book.id} {...book} />))}
				</div>
			</div>
		);
	}
}

export default Books;