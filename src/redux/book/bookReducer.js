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

	return {
		...state,
		...((action && action.payload) || {})
	}
};

export default bookReducer;
