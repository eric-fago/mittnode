import bookActionTypes from './bookActionTypes';
import {
	initialize,
	createBook, selectBook, updateBook, deleteBook,
	createSection, selectSection, updateSection, deleteSection,
	createPage, selectPage, updatePage, deletePage
} from './bookUtils';

const INITIAL_STATE = {
	books: [],
	bookId: null,
	sections: [],
	sectionId: null,
	pages: [],
	pageId: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case bookActionTypes.ININITALIZE:
			return {
				...state,
				...initialize()
			};
		case bookActionTypes.CREATE_BOOK:
			return {
				...createBook(state.books, action.payload)
			};
		case bookActionTypes.SELECT_BOOK:
			return {
				...state,
				...selectBook(state.bookId, action.payload)
			};
		case bookActionTypes.UPDATE_BOOK:
			return {
				...state,
				...updateBook(state.books, action.payload)
			};
		case bookActionTypes.DELETE_BOOK:
			return {
				...state,
				...deleteBook(state.books, action.payload)
			};
		case bookActionTypes.CREATE_SECTION:
			return {
				...state,
				...createSection(state.bookId, state.sections)
			};
		case bookActionTypes.SELECT_SECTION:
			return {
				...state,
				...selectSection(state.sectionId, action.payload)
			};
		case bookActionTypes.UPDATE_SECTION:
			return {
				...state,
				...updateSection(state.sections, action.payload)
			};
		case bookActionTypes.DELETE_SECTION:
			return {
				...state,
				...deleteSection(state.sections, action.payload)
			};
		case bookActionTypes.CREATE_PAGE:
			return {
				...state,
				...createPage(state.sectionId, state.pages)
			};
		case bookActionTypes.SELECT_PAGE:
			return {
				...state,
				...selectPage(state.pageId, action.payload)
			};
		case bookActionTypes.UPDATE_PAGE:
			return {
				...state,
				...updatePage(state.pages, action.payload)
			};
		case bookActionTypes.DELETE_PAGE:
			return {
				...state,
				...deletePage(state.pages, action.payload)
			};
		default:
			return state;
	}
};

export default bookReducer;
