import BookActionTypes from './bookActionTypes';

const INITIAL_STATE = {
	isLoading: true,
	books: [],
	bookIsLoading: false,
	bookId: null,
	sections: [],
	sectionIsLoading: false,
	sectionId: null,
	pages: [],
	pageIsLoading: false,
	pageId: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
	if (action.type.startsWith(BookActionTypes.PREFIX))
		return { ...state, ...((action && action.state) || {}) };
	return state;
};

export default bookReducer;
