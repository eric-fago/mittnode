import { createSelector } from 'reselect';

const selectBookState = state => state.book;

export const selectIsLoading = createSelector(
	[selectBookState],
	(bookState) => bookState.isLoading,
);

export const selectBooks = createSelector(
	[selectBookState],
	(bookState) => bookState.books
);

// TODO: selectBookState will be fired for any changes...
export const selectBookIsLoading = createSelector(
	[selectBookState, selectIsLoading],
	(bookState, isLoading) => isLoading || bookState.bookIsLoading
);

export const selectBookId = createSelector(
	[selectBookState],
	(bookState) => bookState.bookId
);

export const selectBook = createSelector(
	[selectBooks, selectBookId],
	(books, bookId) => books.find(b => b.id === bookId)
)

export const selectSections = createSelector(
	[selectBookState],
	(bookState) => bookState.sections
)

// TODO: selectBookState will be fired for any changes...
export const selectSectionIsLoading = createSelector(
	[selectBookState, selectBookIsLoading],
	(bookState, bookIsLoading) => bookIsLoading || bookState.sectionIsLoading
);

export const selectSectionId = createSelector(
	[selectBookState],
	(bookState) => bookState.sectionId
);

export const selectSection = createSelector(
	[selectSections, selectSectionId],
	(sections, sectionId) => sections.find(s => s.id === sectionId)
);

export const selectPages = createSelector(
	[selectBookState],
	(bookState) => bookState.pages
);

// TODO: selectBookState will be fired for any changes...
export const selectPageIsLoading = createSelector(
	[selectBookState, selectSectionIsLoading],
	(bookState, sectionIsLoading) => sectionIsLoading || bookState.pageIsLoading
);

export const selectPageId = createSelector(
	[selectBookState],
	(bookState) => bookState.pageId
);

export const selectPage = createSelector(
	[selectPages, selectPageId],
	(pages, pageId) => pages.find(p => p.id === pageId)
);