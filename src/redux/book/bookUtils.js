import dataService from '../../services/dataService';

export const initialize = () => {
	const books = dataService.book.readAll();
	const book = books.find(b => true);
	const bookId = book && book.id;
	const sections = dataService.section.readAll(book.id);
	const section = sections.find(s => true);
	const sectionId = section && section.id;
	const pages = dataService.page.readAll(section.id);
	const page = pages.find(p => true);
	const pageId = page && page.id;
	return { books, bookId, sections, sectionId, pages, pageId };
}

export const createBook = (books) => {
	const book = dataService.book.create({ name: 'Book' });
	books = [...books, book];
	const bookId = book.id;
	return { books, bookId, sections: [], sectionId: null, pages: [], pageId: null };
};

export const selectBook = (oldBookId, book) => {
	if (oldBookId === book.id) return {};

	const sections = dataService.section.readAll(book.id);
	const section = sections.find(s => true);
	const sectionId = section && section.id;
	const pages = dataService.page.readAll(sectionId);
	const page = pages.find(p => true);
	const pageId = page && page.id;
	return { bookId: book.id, sections, sectionId, pages, pageId };
}

export const updateBook = (books, book) => {
	book = dataService.book.update(book);
	const bookIndex = books.findIndex(b => b.id === book.id);
	books = [...books];
	books[bookIndex] = book;
	return { books };
};

export const deleteBook = (books, book) => {
	dataService.book.delete(book.id);
	books = books.filter(b => b.id !== book.id);
	return { books, bookId: null, sections: [], sectionId: null, pages: [], pageId: null };
};

export const selectSection = (oldSectionId, section) => {
	if (oldSectionId === section.id) return {};

	const pages = dataService.page.readAll(section.id);
	const page = pages.find(p => true);
	const pageId = page && page.id;
	return { sectionId: section.id, pages, pageId };
};

export const createSection = (bookId, sections) => {
	const section = dataService.section.create({ bookId, name: 'Section' });
	sections = [...sections, section];
	const sectionId = section.id;
	return { sections, sectionId, pages: [], pageId: null };
};

export const updateSection = (sections, section) => {
	section = dataService.section.update(section);
	const sectionIndex = sections.findIndex(s => s.id === section.id);
	sections = [...sections];
	sections[sectionIndex] = section;
	return { sections };
};

export const deleteSection = (sections, section) => {
	dataService.book.delete(section.id);
	sections = sections.filter(s => s.id !== section.id);
	return { sections, sectionId: null, pages: [], pageId: null };
};

export const createPage = (sectionId, pages) => {
	const page = dataService.page.create({ sectionId, name: 'Page', text: '' });
	pages = [...pages, page];
	const pageId = page && page.id;
	return { pages, pageId };
};

export const selectPage = (oldPageId, page) => {
	if (oldPageId === page.id) return {};

	const pageId = page.id;
	return { pageId };
};

export const updatePage = (pages, page) => {
	page = dataService.page.update(page);
	const pageIndex = pages.findIndex(p => p.id === page.id);
	pages = [...pages];
	pages[pageIndex] = page;
	return { pages };
};

export const deletePage = (pages, page) => {
	dataService.book.delete(page.id);
	pages = pages.filter(p => p.id !== page.id);
	return { pages, pageId: null };
};