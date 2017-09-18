/**
 * @description Options that move change a book status
 * @returns {component} menue with change options
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { update } from "../BooksAPI";


class BookShelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangingShelfOfBook: PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => {
                    const currentBook = this.props.book;
                    const newShelf = event.target.value;
                    update(currentBook, newShelf);
                    this.props.onChangingShelfOfBook(currentBook.id, newShelf);
                }}>
                    <option className="option-disabled">Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;