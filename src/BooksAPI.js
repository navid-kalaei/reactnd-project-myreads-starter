/**
 * @description APIs including get, getAll, update, search. Set headers and use localStorage as authentication
 * @exports {Promise} API
 */


// base API url
const api = "https://reactnd-books-api.udacity.com";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};


/**
 * @description get a book details by its ID
 * @method GET
 * @param {int} bookId - ID of the book that you want to get details
 * @return {Promise} - The gotten book
 */
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);


/**
 * @description get all available books
 * @method GET
 * @return {Promise} - All books from backend
 */
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);


/**
 * @description update a book's status (shelf)
 * @method PUT
 * @param {JSON} book - The book that you want to change its shelf
 * @param {string} shelf - New shelf ID that you want to change it to
 */
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());


/**
 * @description search for books in authors and title via the sent query
 * @method POST
 * @param query
 * @param maxResults
 * @return {Promise} filtered books
 */
export const search = (query, maxResults=20) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query, maxResults })
  }).then(res => res.json())
    .then(data => data.books)
    .catch((e) => {
    // console.log('EXCEPTION IN SEARCH API: ' ,e);
    return null;
});