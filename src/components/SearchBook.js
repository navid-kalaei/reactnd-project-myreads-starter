/**
 * @description Search route that works with api and search for books via authors and title as chars enters in search box
 * @exports {component} SearchBook - The search book route
 */

import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import lo from 'lodash'
import { search } from '../BooksAPI'
import Book from './Book'


class SearchBook extends Component {

    state = {
        query: '',
        books: []
    };

    resetState = () => {
        this.setState((state) => ({books:[], query:state.query}));
    };

    searchBook = (query) => {
        query = lo.trimStart(query);
        this.setState((state) => ({books:state.books, query}));
        if(query) {
            search(query)
                .then((books) => {
                    if (books) {
                        if (!books.hasOwnProperty('error')) {
                            this.setState((state) => ({books, query:state.query}));
                        }
                        else {
                            this.resetState();
                        }
                    }
                })
                .catch((e) => {
                    // console.log('EXCEPTION IN SERACHBOOK: ', e, this.state);
                    this.resetState();
            });
        }
        else {
            this.resetState();
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