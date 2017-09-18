/**
 * @description Options that move change a book status
 * @returns {component} menue with change options
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { update } from "../BooksAPI";


function BookShelfChanger(props) {

    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => {
                const currentBook = props.book;
                const newShelf = event.target.value;
                update(currentBook, newShelf);
                props.onChangingShelfOfBook(currentBook.id, newShelf);
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

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    onChangingShelfOfBook: PropTypes.func.isRequired
};


export default BookShelfChanger;