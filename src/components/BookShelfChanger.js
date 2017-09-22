/**
 * @description Options that move change a book status
 * @exports {component} menu with change options
 */

import React from 'react';
import PropTypes from 'prop-types';


function BookShelfChanger(props) {

    return (
        <div className="book-shelf-changer">
            <select value={props.book.shelf || 'none'}
                    onChange={(event) => {
                        const currentBook = props.book;
                        const newShelf = event.target.value;
                        props.onChangingShelfOfBook(currentBook, newShelf);
                        }
                    }>

                <option disabled>Move to...</option>
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