//TODO: prop-type
//TODO: activate apis
//TODO: search
//TODO: Change book status

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
                name: "Currently Reading"
            },
            {
                id: "wantToRead",
                name: "Want to Read"
            },
            {
                id: "read",
                name: "Read"
            }
        ],
        books: []

    };

    componentDidMount() {
        getAll().then((books) => {
            this.setState((state) => ({shelves: state.shelves, books}))
        })
    }

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
                                               books={this.state.books.filter((book) => book.shelf === shelf.id)}/>
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
