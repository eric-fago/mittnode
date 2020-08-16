import BookActionTypes from './bookActionTypes';

export const initialize = () => ({
	type: BookActionTypes.INITIALIZE,
	state: { isLoading: true }
});

export const finishInitialize = (state) => ({
	type: BookActionTypes.FINISH_INITIALIZE,
	state: { ...state, isLoading: false }
});

export const createBook = () => ({
	type: BookActionTypes.CREATE_BOOK,
	state: { bookIsLoading: true }
});

export const finishCreateBook = (state) => ({
	type: BookActionTypes.FINISH_CREATE_BOOK,
	state: { ...state, bookIsLoading: false }
});

export const selectBook = (book) => ({
	type: BookActionTypes.SELECT_BOOK,
	payload: book,
	state: { bookIsLoading: true }
});

export const finishSelectBook = (state) => ({
	type: BookActionTypes.FINISH_SELECT_BOOK,
	state: { ...state, bookIsLoading: false }
});

export const updateBook = (book) => ({
	type: BookActionTypes.UPDATE_BOOK,
	payload: book
});

export const finishUpdateBook = (state) => ({
	type: BookActionTypes.FINISH_UPDATE_BOOK,
	state
});

export const deleteBook = (book) => ({
	type: BookActionTypes.DELETE_BOOK,
	payload: book,
	state: { bookIsLoading: true }
});

export const finishDeleteBook = (state) => ({
	type: BookActionTypes.FINISH_DELETE_BOOK,
	state: { ...state, bookIsLoading: false }
});

export const createSection = () => ({
	type: BookActionTypes.CREATE_SECTION,
	state: { sectionIsLoading: true }
});

export const finishCreateSection = (state) => ({
	type: BookActionTypes.FINISH_CREATE_SECTION,
	state: { ...state, sectionIsLoading: false }
});

export const selectSection = (section) => ({
	type: BookActionTypes.SELECT_SECTION,
	payload: section,
	state: { sectionIsLoading: true }
});

export const finishSelectSection = (state) => ({
	type: BookActionTypes.FINISH_SELECT_SECTION,
	state: { ...state, sectionIsLoading: false }
});

export const updateSection = (section) => ({
	type: BookActionTypes.UPDATE_SECTION,
	payload: section
});

export const finishUpdateSection = (state) => ({
	type: BookActionTypes.FINISH_UPDATE_SECTION,
	state
});

export const deleteSection = (section) => ({
	type: BookActionTypes.DELETE_SECTION,
	payload: section,
	state: { sectionIsLoading: true }
});

export const finishDeleteSection = (state) => ({
	type: BookActionTypes.FINISH_DELETE_SECTION,
	state: { ...state, sectionIsLoading: false }
});

export const createPage = () => ({
	type: BookActionTypes.CREATE_PAGE,
	state: { pageIsLoading: true }
});

export const finishCreatePage = (state) => ({
	type: BookActionTypes.FINISH_CREATE_PAGE,
	state: { ...state, pageIsLoading: false }
});

export const selectPage = (page) => ({
	type: BookActionTypes.SELECT_PAGE,
	payload: page,
	state: { pageIsLoading: true }
});

export const finishSelectPage = (state) => ({
	type: BookActionTypes.FINISH_SELECT_PAGE,
	state: { ...state, pageIsLoading: false }
});

export const updatePage = (page) => ({
	type: BookActionTypes.UPDATE_PAGE,
	payload: page
});

export const finishUpdatePage = (state) => ({
	type: BookActionTypes.FINISH_UPDATE_PAGE,
	state
});

export const deletePage = (page) => ({
	type: BookActionTypes.DELETE_PAGE,
	payload: page,
	state: { pageIsLoading: true }
});

export const finishDeletePage = (state) => ({
	type: BookActionTypes.FINISH_DELETE_PAGE,
	state: { ...state, pageIsLoading: false }
});