/**
 * @description Options that move change a book status
 * @exports {component} menu with change options
 */

import React from 'react';
import PropTypes from 'prop-types';
import { update } from "../BooksAPI";


function BookShelfChanger(props) {

    return (
        <div className="book-shelf-changer">
            <select value={props.book.shelf || 'none'} onChange={(event) => {
                const currentBook = props.book;
                const newShelf = event.target.value;
                console.log(newShelf);
                update(currentBook, newShelf)
                    .then((res) => {
                    props.onChangingShelfOfBook(currentBook.id, newShelf);
                    console.log(res);
                })
                    .catch((e) => {/*console.log(e)*/});
            }}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    onChangingShelfOfBook: PropTypes.func.isRequired
};


export default BookShelfChanger;