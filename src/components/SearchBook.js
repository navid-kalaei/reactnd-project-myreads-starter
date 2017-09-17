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

    searchBook = (query) => {
        query = query.trim();
        this.setState(({query}));
        if(query) {
            search(query)
                .then((books) => {
                    if (books) {
                        if (!books.hasOwnProperty('error')) {
                            this.setState((state) => ({books, query: state.query}))
                        }
                        else {
                            // console.log(`ERROR IN SEARCHBOOK: {error: ${books.error}, query:${query}}`)
                        }
                    }
                })
                .catch((e) => (console.log('EXCEPTION IN SERACHBOOK: ', e, this.state)));
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
                                <Book book={book} onChangingShelfOfBook={(...args) => {}}/>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchBook;