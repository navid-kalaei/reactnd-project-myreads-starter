/**
 * @description Search route that works with api and search for books via authors and title as chars enters in search box
 * @exports {component} SearchBook - The search book route
 */

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import { search } from '../BooksAPI'
import Book from './Book'


class SearchBook extends Component {

    state = {
        query: '',
        books: []
    };


    resetStateByQuery = (query) => (this.setState((state) => ({books:[], query: state.query})));

    searchBook = (query) => {
        query = query.trim();
        this.resetStateByQuery(query);
        if(query) {
            search(query)
                .then((books) => {
                    if (books) {
                        if (!books.hasOwnProperty('error')) {
                            this.setState((state) => ({books, query: state.query}));
                        }
                        else {
                            this.resetStateByQuery(query);
                        }
                    }
                })
                .catch((e) => {
                    // console.log('EXCEPTION IN SERACHBOOK: ', e, this.state);
                    this.resetStateByQuery(query);
            });
        }
    };


    changeShelfOfBook = (...args) => {};


    render() {
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input type="text"
                                   placeholder="Search by title or author"
                                   value={this.state.query}
                                   onChange={(event) => this.searchBook(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {this.state.books && this.state.books.sort(sortBy('title')).map((book) => (
                                <li key={book.id}>
                                    <Book book={book} onChangingShelfOfBook={this.changeShelfOfBook}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchBook;