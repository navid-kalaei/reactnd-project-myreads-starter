import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'
import Book from './Book'


class SearchBook extends Component {

    state = {
        query: '',
        books: []
    };

    updateQuery = (query) => {
        query = query.trim();
        this.setState((state) => ({query, books: state.books}));
    };

    searchBook = (query) => {
        this.updateQuery(query);
        search(this.state.query)
            .then((books) => {
                (books && this.setState((state) => ({books, query: state.query})))
            })
            .catch((e) => console.log(e)
            //HERE THE ERROR IS HAPPENS!!!!!!
            );
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
                            {this.state.books && this.state.books.map((book) => (
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