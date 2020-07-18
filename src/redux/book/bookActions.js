import BookActionTypes from './bookActionTypes';

export const initialize = () => ({
	type: BookActionTypes.ININITALIZE
});

export const createBook = () => ({
	type: BookActionTypes.CREATE_BOOK
});

export const selectBook = (book) => ({
	type: BookActionTypes.SELECT_BOOK,
	payload: book
});

export const updateBook = (book) => ({
	type: BookActionTypes.UPDATE_BOOK,
	payload: book
});

export const deleteBook = (book) => ({
	type: BookActionTypes.DELETE_BOOK,
	payload: book
});

export const createSection = () => ({
	type: BookActionTypes.CREATE_SECTION
});

export const selectSection = (section) => ({
	type: BookActionTypes.SELECT_SECTION,
	payload: section
});

export const updateSection = (section) => ({
	type: BookActionTypes.UPDATE_SECTION,
	payload: section
});

export const deleteSection = (section) => ({
	type: BookActionTypes.DELETE_SECTION,
	payload: section
});

export const createPage = () => ({
	type: BookActionTypes.CREATE_PAGE
});

export const selectPage = (page) => ({
	type: BookActionTypes.SELECT_PAGE,
	payload: page
});


export const updatePage = (page) => ({
	type: BookActionTypes.UPDATE_PAGE,
	payload: page
});

export const deletePage = (page) => ({
	type: BookActionTypes.DELETE_PAGE,
	payload: page
});