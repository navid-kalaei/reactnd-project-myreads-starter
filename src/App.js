/**
 * @description main app
 * @exports {component} BookApp - The main app
 */

import React from 'react';
import { Route } from 'react-router-dom';
import { get, getAll, update } from "./BooksAPI";
import './App.css';
import Home from './components/Home';
import SearchBook from './components/SearchBook';

const values = Object.values;

class BooksApp extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {
        getAll().then((books) => {
            this.setState((state) => ({books}))
        })
    };

    changeShelfOfBook = (bookToMove, newShelf) => {
        // console.log(bookToMove);
        update(bookToMove, newShelf)
            .then((res) => {
                // values(res).map((arr) => (console.log(arr)));
                // console.log([].concat(...values(res)));
                const shelvedBookIds = [].concat(...values(res));
                // console.log(res);
                Promise
                    .all(
                        shelvedBookIds.map((bookId) => (
                            get(bookId)
                        ))
                    )
                    .then(
                        (shelvedBooks) => {
                            // console.log(shelvedBooks);
                            this.setState({books:shelvedBooks});
                        }
                    );
            });
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
