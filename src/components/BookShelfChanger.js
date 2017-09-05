import React, { Component } from 'react';


class BookShelfChanger extends Component {
    /**
     *@description Options that move change a book status
     * @returns {JSX} menue with change options
     */

    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
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