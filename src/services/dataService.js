import { auth, firestore } from '../firebase/firebase';

const dataService = {
	book: {
		create: async ({ name }) => {
			const book = { userId: auth.currentUser.uid, name };
			const booksRef = firestore.collection('books');
			const bookRef = await booksRef.add(book);
			return { id: bookRef.id, ...book };
		},

		readAll: async () => {
			const booksRef = firestore.collection('books')
				.where("userId", "==", auth.currentUser.uid);
			const booksSnapshot = await booksRef.get();
			if (booksSnapshot.empty) return [];
			const books = booksSnapshot.docs.map(bookDoc => ({
				id: bookDoc.id,
				...bookDoc.data()
			}));
			return books;
		},

		update: async ({ id, name }) => {
			const book = { name };
			const bookRef = firestore.doc(`books/${id}`);
			await bookRef.update(book);
			return { id, ...book };
		},

		delete: async ({ id }) => {
			const bookRef = firestore.doc(`books/${id}`);
			await bookRef.delete();
		}
	},

	section: {
		create: async ({ bookId, name }) => {
			const section = { userId: auth.currentUser.uid, name };
			const sectionsRef = firestore.collection(`books/${bookId}/sections`);
			const sectionRef = await sectionsRef.add(section);
			return { id: sectionRef.id, bookId, name };
		},

		readAll: async ({ bookId }) => {
			const sectionsRef = firestore.collection(`books/${bookId}/sections`)
				.where("userId", "==", auth.currentUser.uid);
			const sectionsSnapshot = await sectionsRef.get();
			if (sectionsSnapshot.empty) return [];
			const sections = sectionsSnapshot.docs.map(sectionDoc => ({
				id: sectionDoc.id,
				bookId,
				...sectionDoc.data()
			}));
			return sections;
		},

		update: async ({ id, bookId, name }) => {
			const section = { name };
			const sectionRef = firestore.doc(`books/${bookId}/sections/${id}`);
			await sectionRef.update(section);
			return { id, bookId, ...section };
		},

		delete: async ({ bookId, id }) => {
			const sectionRef = firestore.doc(`books/${bookId}/sections/${id}`);
			await sectionRef.delete();
		}
	},

	page: {
		create: async ({ bookId, sectionId, name, text }) => {
			const page = { userId: auth.currentUser.uid, name, text };
			const pagesRef = firestore.collection(`books/${bookId}/sections/${sectionId}/pages`);
			const pageRef = await pagesRef.add(page);
			return { id: pageRef.id, bookId, sectionId, ...page };
		},

		readAll: async ({ bookId, sectionId }) => {
			const pagesRef = firestore.collection(`books/${bookId}/sections/${sectionId}/pages`)
				.where("userId", "==", auth.currentUser.uid);
			const pagesSnapshot = await pagesRef.get();
			if (pagesSnapshot.empty) return [];
			const pages = pagesSnapshot.docs.map(pageDoc => ({
				id: pageDoc.id,
				bookId,
				sectionId,
				...pageDoc.data()
			}));
			return pages;
		},

		update: async ({ id, bookId, sectionId, name, text }) => {
			const page = { name, text };
			const pageRef = firestore.doc(`books/${bookId}/sections/${sectionId}/pages/${id}`);
			await pageRef.update(page);
			return { id, bookId, sectionId, ...page };
		},

		delete: async ({ id, bookId, sectionId }) => {
			const pageRef = firestore.doc(`books/${bookId}/sections/${sectionId}/pages/${id}`);
			await pageRef.delete();
		}
	}
};

export default dataService;
