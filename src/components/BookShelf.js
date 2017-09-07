import React, { Component } from 'react'
import Book from './Book'

/**
 * @description bookshelf containing books
 * @return {JSX} bookshelf containing books
 */
class BookShelf extends Component {

    render() {
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.map((book) => (
                        <li>
                            <Book key={book.id} book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
        );
    }
}

export default BookShelf