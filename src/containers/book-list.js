import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

//container is a react component that that access to state managed by Redux
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={()=>this.props.selectBook(book)} 
                    className="list-group-item">
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

//Anything returned from this function will end up as props
// on the BookList container

function mapDispatchToProps(dispatch) {
    //whenever selectBook is called , the result should be passed to 
    // all of the reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

// whenever application stat e changes, the other object in connnect function will be assigned as props to component
// Promote BookList from a component to a container - it needs to know
// about new dispatch method, selectBook. Make it available
// as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 
// hooked component using connect function
//we choose booklist because only booklist in our application only cares about books