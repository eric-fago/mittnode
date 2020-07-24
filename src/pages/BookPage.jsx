import React from 'react';
import { connect } from 'react-redux';

import Book from '../components/Book';
import Page from '../components/Page';
import Section from '../components/Section';
import { initializeAsync } from '../redux/book/bookActions';

import './BookPage.scss';

class BookPage extends React.Component {
	componentDidMount() {
		const { initializeAsync } = this.props;
		initializeAsync();
	}

	render() {
		return (
			<div className="BookPage">
				<Book />
				<Section />
				<Page />
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch) => ({
	initializeAsync: () => dispatch(initializeAsync())
});
export default connect(null, mapDispatchToProps)(BookPage);
