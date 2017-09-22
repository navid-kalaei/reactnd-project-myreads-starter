/**
 * @description complete book containing image, title, authors, and change shelf button
 * @exports {component} a single book
 */

import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';
import defaults from '../conf/defaults';

function Book(props) {
    const book = props.book;

    const authors = book.authors || [defaults.messages.authorNotAvailable];
    const thumbnailNotAvailableUrl = defaults.urls.thumbnailNotAvailableUrl;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{backgroundImage: `url(${book.imageLinks.thumbnail || thumbnailNotAvailableUrl})`}}></div>
                <BookShelfChanger book={book} onChangingShelfOfBook={props.onChangingShelfOfBook}/>
            </div>
            <div className="book-title">{book.title}</div>
            {authors.map((author) => (
                <div key={author} className="book-authors">{author}</div>
            ))}
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onChangingShelfOfBook: PropTypes.func.isRequired
};


export default Book;