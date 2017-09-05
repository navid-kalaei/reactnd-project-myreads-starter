import React, { Component } from 'react'
import Book from './Book'

/**
 * @description bookshelf containing books
 * @return {JSX} bookshelf containing books
 */
class BookShelf extends Component {

    render() {
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book url="http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api" title="Golabi" authors="Golabi Nezhad"/>
                    {/*{this.props.books.map((book) => (*/}
                        {/*<li>*/}
                            {/*<Book url={book.url} title={book.title} authors={book.authors}/>*/}
                        {/*</li>*/}
                    {/*))}*/}
                </ol>
            </div>
        </div>
        );
    }
}

export default BookShelf