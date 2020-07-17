import React from 'react';
import Item from '../components/Item';
import Page from '../components/Page';

import dataService from '../services/dataService';


import './Book.scss';

class Book extends React.Component {
	state = {
		book: null,
		sections: [],
		sectionId: null,
		pages: [],
		pageId: null
	};

	async componentDidMount() {
		const match = this.props.match;
		const bookId = parseInt(match.params.id, 10);
		const book = await dataService.book.readOne(bookId);
		if (!book) return;

		const sections = dataService.section.readAll(book.id);
		const section = sections.find(s => true);
		const sectionId = section && section.id;
		const pages = dataService.page.readAll(sectionId);
		const page = pages.find(p => true);
		const pageId = page && page.id;

		this.setState({ book, sections, sectionId, pages, pageId });
	}

	createSection = async (bookId) => {
		const section = await dataService.section.create({ bookId, name: 'Section' })
		const sections = await dataService.section.readAll(bookId);
		this.setState({ sections, sectionId: section.id, pages: [], pageId: null });
	};

	selectSection = async (sectionId) => {
		const pages = await dataService.page.readAll(sectionId);
		const page = pages.find(p => true);
		const pageId = page && page.id;
		this.setState({ sectionId, pages, pageId })
	};

	changeSection = async (id, name) => {
		await dataService.section.update({ id, name });
		const sections = await dataService.section.readAll(this.state.book.id);
		this.setState({ sections });
	};

	deleteSection = async (id) => {
		await dataService.section.delete(id);
		const sections = await dataService.section.readAll(this.state.book.id);
		this.setState({ sections, sectionId: null, pages: [], pageId: null });
	};

	createPage = async (sectionId) => {
		const page = await dataService.page.create({ sectionId, name: 'Page', text: '' })
		const pages = await dataService.page.readAll(sectionId);
		this.setState({ pages, pageId: page.id });
	};

	selectPage = (id) => {
		this.setState({ pageId: id });
	};

	changePageName = async (id, name) => {
		const page = await dataService.page.readOne(id);
		page.name = name;
		await dataService.page.update(page);
		const pages = await dataService.page.readAll(page.sectionId);
		this.setState({ pages });
	};

	changePageText = async (id, text) => {
		const page = await dataService.page.readOne(id);
		page.text = text;
		await dataService.page.update(page);
		const pages = await dataService.page.readAll(page.sectionId);
		this.setState({ pages });
	};

	deletePage = async (id) => {
		await dataService.page.delete(id);
		const pages = await dataService.page.readAll(this.state.sectionId);
		this.setState({ pages, pageId: null });
	};

	render() {
		if (!this.state.book) return null;

		const selectedBook = this.state.book;
		const selectedSections = this.state.sections;
		const selectedSection = this.state.sections.find(s => s.id === this.state.sectionId);
		const selectedPages = this.state.pages;
		const selectedPage = this.state.pages.find(p => p.id === this.state.pageId);

		return (
			<div className="main">
				<Item
					name={this.state.book.name}
					handleChange={(value) => this.changeBook(selectedBook.id, value)}
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
					handleChange={(value) => this.changeSection(selectedSection.id, value)}
					handleDelete={() => this.deleteSection(selectedSection.id)}
					listType='Page'
					list={selectedPages}
					listSelected={selectedPage}
					handleCreate={() => this.createPage(selectedSection.id)}
					handleSelect={this.selectPage}
				/>
				<Page
					item={selectedPage}
					handleChangeName={(value) => this.changePageName(selectedPage.id, value)}
					handleChangeText={(value) => this.changePageText(selectedPage.id, value)}
					handleDelete={() => this.deletePage(selectedPage.id)}
				/>
			</div>
		);
	}
}

export default Book;
