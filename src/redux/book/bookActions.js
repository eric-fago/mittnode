import BookActionTypes from './bookActionTypes';
import { selectBooks, selectBookId, selectSections, selectSectionId, selectPages } from './bookSelectors';
import dataService from '../../services/dataService';

const action = (type, payload) => ({
	type, payload
});

export const initializeAsync = () => {
	return async (dispatch) => {
		dispatch(action(
			BookActionTypes.INITIALIZE,
			{ isLoading: true }
		));

		const books = await dataService.book.readAll();
		const book = books.find(b => true);
		const bookId = book && book.id;
		const sections = await dataService.section.readAll({ bookId });
		const section = sections.find(s => true);
		const sectionId = section && section.id;
		const pages = await dataService.page.readAll({ bookId, sectionId });
		const page = pages.find(p => true);
		const pageId = page && page.id;

		dispatch(action(
			BookActionTypes.FINISH_INITIALIZE,
			{ isLoading: false, books, bookId, sections, sectionId, pages, pageId }
		));
	};
};

export const createBookAsync = () => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.CREATE_BOOK,
			{ bookIsLoading: true }
		));

		const book = await dataService.book.create({ name: 'Book' });
		const books = [...selectBooks(getState()), book];
		const bookId = book.id;

		dispatch(action(
			BookActionTypes.FINISH_CREATE_BOOK,
			{ bookIsLoading: false, books, bookId, sections: [], sectionId: null, pages: [], pageId: null }
		));
	};
};

export const selectBookAsync = (book) => {
	return async (dispatch) => {
		dispatch(action(
			BookActionTypes.SELECT_BOOK,
			{ bookIsLoading: true }
		));

		const bookId = book.id;
		const sections = await dataService.section.readAll({ bookId });
		const section = sections.find(s => true);
		const sectionId = section && section.id;
		const pages = await dataService.page.readAll({ bookId, sectionId });
		const page = pages.find(p => true);
		const pageId = page && page.id;

		dispatch(action(
			BookActionTypes.FINISH_SELECT_BOOK,
			{ bookIsLoading: false, bookId, sections, sectionId, pages, pageId }
		));
	};
};

export const updateBookAsync = (book) => {
	return async (dispatch, getState) => {
		book = await dataService.book.update(book);
		const books = [...selectBooks(getState())];
		const bookIndex = books.findIndex(b => b.id === book.id);
		books[bookIndex] = book;

		dispatch(action(
			BookActionTypes.FINISH_UPDATE_BOOK,
			{ books }
		));
	};
};

export const deleteBookAsync = (book) => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.DELETE_BOOK,
			{ bookIsLoading: true }
		));

		await dataService.book.delete(book);
		const books = selectBooks(getState()).filter(b => b.id !== book.id);

		dispatch(action(
			BookActionTypes.FINISH_DELETE_BOOK,
			{ bookIsLoading: false, books, bookId: null, sections: [], sectionId: null, pages: [], pageId: null }
		));
	}
};

export const createSectionAsync = () => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.CREATE_SECTION,
			{ sectionIsLoading: true }
		));

		const bookId = selectBookId(getState());
		const section = await dataService.section.create({ bookId, name: 'Section' });
		const sections = [...selectSections(getState()), section];
		const sectionId = section.id;

		dispatch(action(
			BookActionTypes.FINISH_CREATE_SECTION,
			{ sectionIsLoading: false, sections, sectionId, pages: [], pageId: null }
		));
	};
};

export const selectSectionAsync = (section) => {
	return async (dispatch) => {
		dispatch(action(
			BookActionTypes.SELECT_SECTION,
			{ sectionIsLoading: true }
		));

		const bookId = section.bookId;
		const sectionId = section.id;
		const pages = await dataService.page.readAll({ bookId, sectionId });
		const page = pages.find(s => true);
		const pageId = page && page.id;

		dispatch(action(
			BookActionTypes.FINISH_SELECT_SECTION,
			{ sectionIsLoading: false, sectionId, pages, pageId }
		));
	};
};

export const updateSectionAsync = (section) => {
	return async (dispatch, getState) => {
		section = await dataService.section.update(section);
		const sections = [...selectSections(getState())];
		const sectionIndex = sections.findIndex(s => s.id === section.id);
		sections[sectionIndex] = section;

		dispatch(action(
			BookActionTypes.FINISH_UPDATE_SECTION,
			{ sections }
		));
	};
};

export const deleteSectionAsync = (section) => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.DELETE_SECTION,
			{ sectionIsLoading: true }
		));

		await dataService.section.delete(section);
		const sections = selectSections(getState()).filter(s => s.id !== section.id);

		dispatch(action(
			BookActionTypes.FINISH_DELETE_SECTION,
			{ sectionIsLoading: false, sections, sectionId: null, pages: [], pageId: null }
		));
	}
};

export const createPageAsync = () => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.CREATE_PAGE,
			{ pageIsLoading: true }
		));

		const bookId = selectBookId(getState());
		const sectionId = selectSectionId(getState());
		const page = await dataService.page.create({ bookId, sectionId, name: 'Page', text: '' });
		const pages = [...selectPages(getState()), page];
		const pageId = page.id;

		dispatch(action(
			BookActionTypes.FINISH_CREATE_PAGE,
			{ pageIsLoading: false, pages, pageId }
		));
	};
};

export const selectPageAsync = (page) => {
	return async (dispatch) => {
		dispatch(action(
			BookActionTypes.SELECT_PAGE,
			{ pageIsLoading: true }
		));

		const pageId = page.id;

		dispatch(action(
			BookActionTypes.FINISH_SELECT_SECTION,
			{ pageIsLoading: false, pageId }
		));
	};
};

export const updatePageAsync = (page) => {
	return async (dispatch, getState) => {
		page = await dataService.page.update(page);
		const pages = [...selectPages(getState())];
		const pageIndex = pages.findIndex(p => p.id === page.id);
		pages[pageIndex] = page;

		dispatch(action(
			BookActionTypes.FINISH_UPDATE_PAGE,
			{ pages }
		));
	};
};

export const deletePageAsync = (page) => {
	return async (dispatch, getState) => {
		dispatch(action(
			BookActionTypes.DELETE_PAGE,
			{ pageIsLoading: true }
		));

		await dataService.page.delete(page);
		const pages = selectPages(getState()).filter(p => p.id !== page.id);

		dispatch(action(
			BookActionTypes.FINISH_DELETE_PAGE,
			{ pageIsLoading: false, pages, pageId: null }
		));
	}
};