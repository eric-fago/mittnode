import React from 'react';
import Item from './components/Item';
import Page from './components/Page';

import './App.scss';

class App extends React.Component {
	state = {
		nextId: 1,
		bookSelectId: null,
		books: [],
		sectionSelectId: null,
		sections: [],
		pageSelectId: null,
		pages: []
	};

	componentDidMount() {
		const nextId = 3000000;
		const books = [
			{
				id: 1,
				name: 'Book 1',
				section: [

				]
			},
			{
				id: 2,
				name: 'Book 2',
				section: [
				]
			}
		];
		const sections = [
			{
				id: 101,
				bookId: 1,
				name: 'Book 1 Section 1',
			},
			{
				id: 102,
				bookId: 1,
				name: 'Book 1 Section 2',
			},

			{
				id: 201,
				bookId: 2,
				name: 'Book 2 Section 1',
			},
			{
				id: 202,
				bookId: 2,
				name: 'Book 2 Section 2',
			}
		];
		const pages = [
			{
				id: 10101,
				sectionId: 101,
				name: 'Book 1 Section 1 Page 1',
				text: 'This is some test text!'
			},
			{
				id: 10102,
				sectionId: 101,
				name: 'Book 1 Section 1 Page 2',
				text: 'This is some test text!'
			}
		]
		this.setState({ nextId, bookSelectId: 1, books, sectionSelectId: 101, sections, pageSelectId: 10102, pages });
	}

	createBook = () => {
		this.setState((state) => {
			const nextId = state.nextId;
			const books = [...state.books];
			books.push({ id: nextId, name: 'Book ' + nextId });
			return { nextId: nextId + 1, books, bookSelectId: nextId, sectionSelectId: null, pageSelectId: null };
		});
	};

	selectBook = (id) => {
		this.setState((state) => {
			if (state.bookSelectId === id) return {};

			const firstBookSection = state.sections.find(s => s.bookId === id);
			const firstBookSectionId = firstBookSection && firstBookSection.id;
			const firstPage = state.pages.find(p => p.sectionId === firstBookSectionId);
			const firstPageId = firstPage && firstPage.id;
			return { bookSelectId: id, sectionSelectId: firstBookSectionId, pageSelectId: firstPageId };
		});
	};

	changeBook = (id, event) => {
		const value = event.target.value;
		this.setState((state) => {
			const bookIndex = state.books.findIndex(b => b.id === id);
			if (bookIndex < 0) return {};

			const books = [...state.books];
			books[bookIndex] = { ...books[bookIndex] };
			books[bookIndex].name = value;
			return { books };
		});
	};

	deleteBook = (id) => {
		this.setState((state) => {
			const books = state.books.filter(b => b.id !== id);
			return { books, bookSelectId: null, sectionSelectId: null, pageSelectId: null };
		});
	};

	createSection = (bookId) => {
		this.setState((state) => {
			const book = state.books.find(b => b.id === bookId);
			if (!book) return {};

			const nextId = state.nextId;
			const sections = [...state.sections];
			sections.push({ id: nextId, bookId: book.id, name: 'Section ' + nextId });
			return { nextId: nextId + 1, sections, sectionSelectId: nextId, pageSelectId: null };
		})
	};

	selectSection = (id) => {
		this.setState((state) => {
			if (state.sectionSelectId === id) return {};

			const firstPage = state.pages.find(p => p.sectionId === id);
			const firstPageId = firstPage && firstPage.id;
			return { sectionSelectId: id, pageSelectId: firstPageId };
		})
	};

	changeSection = (id, event) => {
		const value = event.target.value;
		this.setState((state) => {
			const sectionIndex = state.sections.findIndex(s => s.id === id);
			if (sectionIndex < 0) return {};

			const sections = [...state.sections];
			sections[sectionIndex] = { ...sections[sectionIndex] };
			sections[sectionIndex].name = value;
			return { sections };
		});
	};

	deleteSection = (id) => {
		this.setState((state) => {
			const sections = state.sections.filter(s => s.id !== id);
			return { sections, sectionSelectId: null, pageSelectId: null };
		});
	};

	createPage = (sectionId) => {
		this.setState((state) => {
			const section = state.sections.find(b => b.id === sectionId);
			if (!section) return {};

			const nextId = state.nextId;
			const pages = [...state.pages];
			pages.push({ id: nextId, sectionId: section.id, name: 'Page ' + nextId, text: '' });
			return { nextId: nextId + 1, pageSelectId: nextId, pages };
		})
	};

	selectPage = (id) => {
		this.setState({ pageSelectId: id });
	};

	changePageName = (id, event) => {
		const value = event.target.value;
		this.setState((state) => {
			const pageIndex = state.pages.findIndex(p => p.id === id);
			if (pageIndex < 0) return {};

			const pages = [...state.pages];
			pages[pageIndex] = { ...pages[pageIndex] };
			pages[pageIndex].name = value;
			return { pages };
		});
	};

	changePageText = (id, event) => {
		const value = event.target.value;
		this.setState((state) => {
			const pageIndex = state.pages.findIndex(p => p.id === id);
			if (pageIndex < 0) return {};

			const pages = [...state.pages];
			pages[pageIndex] = { ...pages[pageIndex] };
			pages[pageIndex].text = value;
			return { pages };
		});
	};

	deletePage = (id) => {
		this.setState((state) => {
			const pages = state.pages.filter(p => p.id !== id);
			return { pages, pageSelectId: null };
		});
	};

	render() {
		const selectedBooks = this.state.books;
		const selectedBook = this.state.books.find(b => b.id === this.state.bookSelectId);
		const selectedSections = this.state.sections.filter(s => s.bookId === this.state.bookSelectId);
		const selectedSection = this.state.sections.find(s => s.id === this.state.sectionSelectId);
		const selectedPages = this.state.pages.filter(p => p.sectionId === this.state.sectionSelectId);
		const selectedPage = this.state.pages.find(p => p.id === this.state.pageSelectId);

		return (
			<div className="App">
				<div className="head">Mittnode</div>
				<div className="main">
					<Item
						listType="Book"
						list={selectedBooks}
						listSelected={selectedBook}
						handleCreate={this.createBook}
						handleSelect={this.selectBook}
					/>
					<Item
						itemType="Book"
						item={selectedBook}
						handleChange={(e) => this.changeBook(selectedBook.id, e)}
						handleDelete={() => this.deleteBook(selectedBook.id)}
						listType="Section"
						list={selectedSections}
						listSelected={selectedSection}
						handleCreate={() => this.createSection(selectedBook.id)}
						handleSelect={this.selectSection}
					/>
					<Item
						itemType="Section"
						item={selectedSection}
						handleChange={(e) => this.changeSection(selectedSection.id, e)}
						handleDelete={() => this.deleteSection(selectedSection.id)}
						listType='Page'
						list={selectedPages}
						listSelected={selectedPage}
						handleCreate={() => this.createPage(selectedSection.id)}
						handleSelect={this.selectPage}
					/>
					<Page
						item={selectedPage}
						handleChangeName={(e) => this.changePageName(selectedPage.id, e)}
						handleChangeText={(e) => this.changePageText(selectedPage.id, e)}
						handleDelete={() => this.deletePage(selectedPage.id)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
