import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { search } from '../BooksAPI'


class SearchBook extends Component {

    state = {
        query: '',
        books: []
    };

    searchBook = (query) => {
        query = query.trim();
        this.setState({query});
        search(query)
            .then((books) => {
            this.setState({books, query})
            })
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
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            </div>
        )
    }
}


export default SearchBook;