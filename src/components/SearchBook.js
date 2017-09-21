/**
 * @description Search route that works with api and search for books via authors and title as chars enters in search box
 * @exports {component} SearchBook - The search book route
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'sort-by';
import lo from 'lodash';
import { search } from '../BooksAPI';
import Book from './Book';

const has = Object.prototype.hasOwnProperty;

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
                        if (!has.call(books, 'error')) {
                            const filteredBooks = books.map((book) => {
                                const shelvedBook = this.props.shelvedBooks.find((b) => b.id === book.id);
                                if (shelvedBook) {
                                    book.shelf = shelvedBook.shelf;
                                } else {
                                    book.shelf = 'none';
                                }
                                return book;
                            });
                            this.setState((state) => ({books: filteredBooks, query: state.query}))
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
                                    <Book book={book} onChangingShelfOfBook={this.props.onChangingShelfOfBook}/>
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