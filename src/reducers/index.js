import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({ //added reducer in combineReducer
  // state: (state = {}) => state
  books: BooksReducer, // this will add key to global application state called books and value is whatever going to be returned from BooksReducer i.e Array of Books
  activeBook: ActiveBook
});

export default rootReducer;
