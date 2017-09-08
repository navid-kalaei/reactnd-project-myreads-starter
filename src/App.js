//TODO: prop-type
//TODO: activate apis
//TODO: search

import React from 'react'
import { Route, Link } from 'react-router-dom'
import { getAll } from "./BooksAPI"
import './App.css'
import BookShelf from './components/BookShelf'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {

    state = {
        shelves: [
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
        ],
        books: []

    };

    componentDidMount() {
        getAll().then((books) => {
            this.setState((state) => ({shelves: state.shelves, books}))
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
            shelves: state.shelves,
            books: this.getUpdatedBooks(state, bookId, newShelf)
        }))
    };

    render() {
        return (
            <div className="app">
                <Route path="/search" component={SearchBook}/>

                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                {this.state.shelves.map((shelf) => (
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
                )}/>
            </div>
        )
    }
}

export default BooksApp
