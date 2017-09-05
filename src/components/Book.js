import React, { Component } from 'react'


class Book extends Component {
    /**
     * @description complete book containing image, title, authors, and change shelf button
     * @returns {JSX} a single book
     */
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})` }}></div>
                    <BookShelfChanger/>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        );
    }
}