import React, { Component } from 'react';
import { Books } from '../../api/books.js';

class MyBookList extends Component {

    deleteThisBook(bookid) {
        Books.remove(bookid);
      }

    render() { 
        var myBookList = this.props.myBookList;
        return (
            <div className = "MyBookList"> My BookList
                <ul>
                    {myBookList.map((book) => {
                        return (
                            <li key={book._id}>

                                <div>{book.title}</div>
                                <div>{book.author}</div>

                                <button className="delete" onClick={() => this.deleteThisBook(book._id)}>
                                    &times;
                                </button>

                            </li>  
                        );
                    }
                    )}
                </ul>

            </div>
        );
    }
}
 
export default MyBookList;