import { createSelector } from 'reselect';

const selectBookState = state => state.book;

export const selectBooks = createSelector(
	[selectBookState],
	(bookState) => bookState.books
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

export const selectSectionId = createSelector(
	[selectBookState],
	(bookState) => bookState.sectionId
)

export const selectSection = createSelector(
	[selectSections, selectSectionId],
	(sections, sectionId) => sections.find(s => s.id === sectionId)
)

export const selectPages = createSelector(
	[selectBookState],
	(bookState) => bookState.pages
)

export const selectPageId = createSelector(
	[selectBookState],
	(bookState) => bookState.pageId
)

export const selectPage = createSelector(
	[selectPages, selectPageId],
	(pages, pageId) => pages.find(p => p.id === pageId)
)