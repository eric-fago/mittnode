import { all, call, put, select, takeEvery } from 'redux-saga/effects';

import {
	finishInitialize,
	finishCreateBook,
	finishSelectBook,
	finishUpdateBook,
	finishDeleteBook,
	finishCreateSection,
	finishSelectSection,
	finishUpdateSection,
	finishDeleteSection,
	finishCreatePage,
	finishSelectPage,
	finishUpdatePage,
	finishDeletePage
} from './bookActions';
import BookActionTypes from './bookActionTypes';
import { selectBooks, selectBookId, selectSections, selectSectionId, selectPages } from './bookSelectors';
import dataService from '../../services/dataService';

export function* initialize() {
	const books = yield call(dataService.book.readAll);
	const book = books.find(() => true);
	const bookId = book && book.id;
	const sections = yield call(dataService.section.readAll, { bookId });
	const section = sections.find(() => true);
	const sectionId = section && section.id;
	const pages = yield call(dataService.page.readAll, { bookId, sectionId });
	const page = pages.find(() => true);
	const pageId = page && page.id;
	yield put(finishInitialize({ books, bookId, sections, sectionId, pages, pageId }));
};

export function* onInitialize() {
	yield takeEvery(
		BookActionTypes.INITIALIZE,
		initialize
	);
};

export function* createBook() {
	const book = yield call(dataService.book.create, { name: 'Book' });
	const books = [...yield select(selectBooks), book];
	const bookId = book.id;
	yield put(finishCreateBook({ books, bookId, sections: [], sectionId: null, pages: [], pageId: null }));
};

export function* onCreateBook() {
	yield takeEvery(
		BookActionTypes.CREATE_BOOK,
		createBook
	);
};

export function* selectBook({ payload: book }) {
	const bookId = book.id;
	const sections = yield call(dataService.section.readAll, { bookId });
	const section = sections.find(() => true);
	const sectionId = section && section.id;
	const pages = yield call(dataService.page.readAll, { bookId, sectionId });
	const page = pages.find(() => true);
	const pageId = page && page.id;
	yield put(finishSelectBook({ bookId, sections, sectionId, pages, pageId }))
}

export function* onSelectBook() {
	yield takeEvery(
		BookActionTypes.SELECT_BOOK,
		selectBook
	);
};

export function* updateBook({ payload: book }) {
	book = yield call(dataService.book.update, book);
	const books = [...yield select(selectBooks)];
	const bookIndex = books.findIndex(b => b.id === book.id);
	books[bookIndex] = book;
	yield put(finishUpdateBook({ books }));
};

export function* onUpdateBook() {
	yield takeEvery(
		BookActionTypes.UPDATE_BOOK,
		updateBook
	);
};

export function* deleteBook({ payload: book }) {
	yield call(dataService.book.delete, book);
	const books = (yield select(selectBooks)).filter(b => b.id !== book.id);

	yield put(finishDeleteBook({ books, bookId: null, sections: [], sectionId: null, pages: [], pageId: null }));
};

export function* onDeleteBook() {
	yield takeEvery(
		BookActionTypes.DELETE_BOOK,
		deleteBook
	);
};

export function* createSection() {
	const bookId = yield select(selectBookId);
	const section = yield call(dataService.section.create, { bookId, name: 'Section' });
	const sections = [...yield select(selectSections), section];
	const sectionId = section.id;

	yield put(finishCreateSection({ sections, sectionId, pages: [], pageId: null }));
};

export function* onCreateSection() {
	yield takeEvery(
		BookActionTypes.CREATE_SECTION,
		createSection
	);
};

export function* selectSection({ payload: section }) {
	const bookId = section.bookId;
	const sectionId = section.id;
	const pages = yield call(dataService.page.readAll, { bookId, sectionId });
	const page = pages.find(() => true);
	const pageId = page && page.id;

	yield put(finishSelectSection({ sectionId, pages, pageId }))
}

export function* onSelectSection() {
	yield takeEvery(
		BookActionTypes.SELECT_SECTION,
		selectSection
	);
};

export function* updateSection({ payload: section }) {
	section = yield call(dataService.section.update, section);
	const sections = [...yield select(selectSections)];
	const sectionIndex = sections.findIndex(s => s.id === section.id);
	sections[sectionIndex] = section;

	yield put(finishUpdateSection({ sections }));
};

export function* onUpdateSection() {
	yield takeEvery(
		BookActionTypes.UPDATE_SECTION,
		updateSection
	);
};

export function* deleteSection({ payload: section }) {
	yield call(dataService.section.delete, section);
	const sections = (yield select(selectSections)).filter(s => s.id !== section.id);

	yield put(finishDeleteSection({ sections, sectionId: null, pages: [], pageId: null }));
};

export function* onDeleteSection() {
	yield takeEvery(
		BookActionTypes.DELETE_SECTION,
		deleteSection
	);
};

export function* createPage() {
	const bookId = yield select(selectBookId);
	const sectionId = yield select(selectSectionId);
	const page = yield call(dataService.page.create, { bookId, sectionId, name: 'Page', text: '' });
	const pages = [...yield select(selectPages), page];
	const pageId = page.id;
	yield put(finishCreatePage({ pages, pageId }));
};

export function* onCreatePage() {
	yield takeEvery(
		BookActionTypes.CREATE_PAGE,
		createPage
	);
};

export function* selectPage({ payload: page }) {
	const pageId = page.id;
	yield put(finishSelectPage({ pageId }))
}

export function* onSelectPage() {
	yield takeEvery(
		BookActionTypes.SELECT_PAGE,
		selectPage
	);
};

export function* updatePage({ payload: page }) {
	page = yield call(dataService.page.update, page);
	const pages = [...yield select(selectPages)];
	const pageIndex = pages.findIndex(p => p.id === page.id);
	pages[pageIndex] = page;
	yield put(finishUpdatePage({ pages }));
};

export function* onUpdatePage() {
	yield takeEvery(
		BookActionTypes.UPDATE_PAGE,
		updatePage
	);
};

export function* deletePage({ payload: page }) {
	yield call(dataService.page.delete, page);
	const pages = (yield select(selectPages)).filter(p => p.id !== page.id);

	yield put(finishDeletePage({ pages, pageId: null }));
};

export function* onDeletePage() {
	yield takeEvery(
		BookActionTypes.DELETE_PAGE,
		deletePage
	);
};

export function* bookSagas() {
	yield all([
		call(onInitialize),
		call(onCreateBook),
		call(onSelectBook),
		call(onUpdateBook),
		call(onDeleteBook),
		call(onCreateSection),
		call(onSelectSection),
		call(onUpdateSection),
		call(onDeleteSection),
		call(onCreatePage),
		call(onSelectPage),
		call(onUpdatePage),
		call(onDeletePage),
	]);
};