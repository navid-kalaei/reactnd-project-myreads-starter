/**
 * @description complete book containing image, title, authors, and change shelf button
 * @exports {component} a single book
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangingShelfOfBook: PropTypes.func.isRequired
    };

    coverNotFoundThumbnail = './cover-not-available.jpg';

    checkProps = (book) => (book.authors);

    render() {
        const book = this.props.book;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{backgroundImage: `url(${book.imageLinks.thumbnail || this.coverNotFoundThumbnail})`}}></div>
                    <BookShelfChanger book={book} onChangingShelfOfBook={this.props.onChangingShelfOfBook}/>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author) => (
                    <div key={author} className="book-authors">{author}</div>
                ))}
            </div>
        );
    }
}

export default Book;