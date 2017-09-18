import React, { Component } from 'react'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 * @description bookshelf containing books
 * @return {JSX} bookshelf containing books
 */
class BookShelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onChangingShelfOfBook: PropTypes.func.isRequired
    };

    render() {
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.sort(sortBy('title')).map((book) => (
                        <li key={book.id}>
                            <Book book={book} onChangingShelfOfBook={this.props.onChangingShelfOfBook}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        );
    }
}

export default BookShelf;