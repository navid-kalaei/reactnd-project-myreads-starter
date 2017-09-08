import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'

/**
 * @description complete book containing image, title, authors, and change shelf button
 * @returns {JSX} a single book
 */
class Book extends Component {

    checkProps = (book) => (book && book.imageLinks && book.imageLinks.thumbnail && book.authors);

    render() {
        const book = this.props.book;

        if(this.checkProps(book)) {
            return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                             style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                        <BookShelfChanger book={book} onChangingShelfOfBook={this.props.onChangingShelfOfBook}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors.map((author) => (
                        <div className="book-authors">{author}</div>
                    ))}
                </div>
            );
        }
        return (null)
    }
}

export default Book

//TODO: add prop-types