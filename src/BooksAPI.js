/**
 * @description APIs including get, getAll, update, search. Set headers and use localStorage as authentication
 * @type {string}
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
 * @param {integer} bookId - ID of the book that you want to get details
 * @return {json} - The gotten book
 */
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

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
    console.log('EXCEPTION IN SEARCH API: ' ,e);
    return null;
});