/**
 * @description Home route that contains shelves and books
 * @exports {component} Home - The home route
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from "../BooksAPI";
import BookShelf from './BookShelf';

class Home extends Component {

    state = {
        books: []
    };

    shelves = [
        {
            id: "currentlyReading",
            title: "Currently Reading"
        },
        {
            id: "wantToRead",
            title: "Want to Read"
        },
        {
            id: "read",
            title: "Read"
        }
    ];

    componentDidMount() {
        getAll().then((books) => {
            this.setState((state) => ({books}))
        })
    };

    changeShelfOfBook = (bookId, newShelf) => {
        const newState = Object.assign({}, this.state);
        const bookIndex = newState.books.findIndex((book) => (book.id === bookId));
        newState.books[bookIndex].shelf = newShelf;
        this.setState(newState);
    };

    render() {
        return (
            <div className="app">

                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {this.shelves.map((shelf) => (
                                <BookShelf key={shelf.title} title={shelf.title}
                                           books={this.state.books.filter((book) => book.shelf === shelf.id)}
                                           onChangingShelfOfBook={this.changeShelfOfBook}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to="/search">Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
