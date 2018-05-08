import React, {Component} from 'react';
import BookList from '../containers/book-list';


export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
      </div>

    );
  }
}


//whenever application state changes it will rerender the container component