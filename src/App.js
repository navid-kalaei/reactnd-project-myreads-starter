//TODO: prop-type
//TODO: activate apis
//TODO: search
import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import SearchBook from './components/SearchBook'

class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={SearchBook}/>
            </div>
        )
    }
}

export default BooksApp
