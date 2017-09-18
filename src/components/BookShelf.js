/**
 * @description bookshelf containing books
 * @exports {component} bookshelf containing books
 */

import React from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import Book from './Book'


function BookShelf(props) {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.sort(sortBy('title')).map((book) => (
                        <li key={book.id}>
                            <Book book={book} onChangingShelfOfBook={props.onChangingShelfOfBook}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangingShelfOfBook: PropTypes.func.isRequired
};

export default BookShelf;