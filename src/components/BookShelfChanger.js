/**
 * @description Options that move change a book status
 * @exports {component} menu with change options
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class BookShelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onChangingShelfOfBook: PropTypes.func.isRequired
    };

    state = {
        value: ''
    };

    changeValue(newValue) {
        this.setState({value: newValue});
    };

    render() {
        const book = this.props.book;
        const onChangingShelfOfBook = this.props.onChangingShelfOfBook;

        return (
            <div className="book-shelf-changer">
                <select value={this.state.value || book.shelf || 'none'}
                        onChange={(event) => {
                            const newShelf = event.target.value;
                            this.setState({value: newShelf});
                            onChangingShelfOfBook(book, newShelf);
                        }}
                    >

                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;