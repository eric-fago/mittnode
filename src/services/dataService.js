let nextId = 3000000;

const data = {
	books: [
		{
			id: 1,
			name: 'Book 1',
			section: [

			]
		},
		{
			id: 2,
			name: 'Book 2',
			section: [
			]
		}
	],
	sections: [
		{
			id: 101,
			bookId: 1,
			name: 'Book 1 Section 1',
		},
		{
			id: 102,
			bookId: 1,
			name: 'Book 1 Section 2',
		},

		{
			id: 201,
			bookId: 2,
			name: 'Book 2 Section 1',
		},
		{
			id: 202,
			bookId: 2,
			name: 'Book 2 Section 2',
		}
	],
	pages: [
		{
			id: 10101,
			sectionId: 101,
			name: 'Book 1 Section 1 Page 1',
			text: 'This is some test text!'
		},
		{
			id: 10102,
			sectionId: 101,
			name: 'Book 1 Section 1 Page 2',
			text: 'This is some test text!'
		}
	]
};

const dataService = {

	book: {
		create: ({ name }) => {
			const book = { id: nextId++, name };
			data.books.push(book);
			return { ...book };
		},

		readAll: () => {
			return data.books.map(b => ({ ...b }));
		},

		readOne: (id) => {
			const book = data.books.find(b => b.id === id);
			return book ? { ...book } : null;
		},

		update: ({ id, name }) => {
			const book = data.books.find(b => b.id === id);
			if (!book) return null;
			book.name = name;
			return { ...book }
		},

		delete: (id) => {
			data.books = data.books.filter(b => b.id !== id);
		}
	},

	section: {
		create: ({ bookId, name }) => {
			const book = data.books.find(b => b.id === bookId);
			if (!book) throw new Error(`Book ${bookId} not found!`);

			const section = { id: nextId++, bookId, name };
			data.sections.push(section);
			return { ...section };
		},

		readAll: (bookId) => {
			return data.sections.filter(s => s.bookId === bookId).map(s => ({ ...s }));
		},

		readOne: (id) => {
			const section = data.sections.find(s => s.id === id);
			return section ? { ...section } : null;
		},

		update: ({ id, name }) => {
			const section = data.sections.find(s => s.id === id);
			if (!section) return null;
			section.name = name;
			return { ...section }
		},

		delete: (id) => {
			data.sections = data.sections.filter(s => s.id !== id);
		}
	},

	page: {
		create: ({ sectionId, name, text }) => {
			const section = data.sections.find(s => s.id === sectionId);
			if (!section) throw new Error(`Section ${sectionId} not found!`);

			const page = { id: nextId++, sectionId, name, text };
			data.pages.push(page);
			return { ...page };
		},

		readAll: (sectionId) => {
			return data.pages.filter(p => p.sectionId === sectionId).map(p => ({ ...p }));
		},

		readOne: (id) => {
			const page = data.pages.find(p => p.id === id);
			return page ? { ...page } : null;
		},

		update: ({ id, name, text }) => {
			const page = data.pages.find(p => p.id === id);
			if (!page) return null;
			page.name = name;
			page.text = text;
			return { ...page }
		},

		delete: (id) => {
			data.pages = data.pages.filter(p => p.id !== id);
		}
	}
};

export default dataService;
