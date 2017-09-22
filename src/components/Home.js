/**
 * @description Home route that contains shelves and books
 * @exports {component} Home - The home route
 */

import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

function Home(props) {

    const shelves = [
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
    ];

    return (
        <div className="app">

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf) => (
                            <BookShelf key={shelf.title} title={shelf.title}
                                       books={props.books.filter((book) => book.shelf === shelf.id)}
                                       onChangingShelfOfBook={props.onChangingShelfOfBook}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
