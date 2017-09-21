/**
 * @description main app
 * @exports {component} BookApp - The main app
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { getAll } from "./BooksAPI";
import './App.css';
import Home from './components/Home';
import SearchBook from './components/SearchBook';


class BooksApp extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {
        getAll().then((books) => {
            this.setState((state) => ({books}))
        })
    };

    changeShelfOfBook = (bookId, newShelf) => {
        const newState = Object.assign({}, this.state);
        const bookIndex = newState.books.findIndex((book) => (book.id === bookId));
        if(bookIndex !== -1) {
            newState.books[bookIndex].shelf = newShelf;
            this.setState(newState);
        }
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={(props) => (
                    <Home books={this.state.books}
                          onChangingShelfOfBook={this.changeShelfOfBook}/>
                )}/>

                <Route path="/search" render={(props) => (
                    <SearchBook shelvedBooks={this.state.books}
                                onChangingShelfOfBook={this.changeShelfOfBook}/>
                )}/>
            </div>
        )
    }
}


export default BooksApp;
