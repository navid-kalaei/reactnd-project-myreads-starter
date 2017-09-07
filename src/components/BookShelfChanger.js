import React, { Component } from 'react';
import { update } from "../BooksAPI";

/**
 *@description Options that move change a book status
 * @returns {JSX} menue with change options
 */
class BookShelfChanger extends Component {

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(event) => (update(this.props.book, event.target.value))}>
                    <option className="option-disabled">Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger

//TODO: add state to generate options dynamically