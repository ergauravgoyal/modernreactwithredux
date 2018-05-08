import React, { Component } from 'react';
import { connect } from 'react-redux';

//container is a react component that that access to state managed by Redux
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {  
    //Whatever is returned will show up as props
    //Whenever there is any changes in state it will rerender this component/container
    //inside the BookList
    return { books: state.books };
}

//whenever application state changes, the other object in connnect function will be assigned as props to component
export default connect(mapStateToProps)(BookList); // hooked component using connect function
//we choose booklist because only booklist in our application only cares about books