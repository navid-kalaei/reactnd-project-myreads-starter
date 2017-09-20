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
    }

    getUpdatedBooks = (state, bookId, newShelf) => {
        const books = [];
        for(let book of state.books) {
            if (book.id === bookId){
                book.shelf = newShelf;
                books.push(book);
                continue
            }
            books.push(book);
        }
        return books;
    };

    changeShelfOfBook = (bookId, newShelf) => {
        this.setState((state) => ({
            books: this.getUpdatedBooks(state, bookId, newShelf)
        }))
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
