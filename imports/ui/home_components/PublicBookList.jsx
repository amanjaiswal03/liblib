import React, { Component } from 'react';


class PublicBookList extends Component {
    render() { 
        var pblist = this.props.publicBookList;
        return (
            <div className = "book-list">
                <ul>
                    {pblist.map((book) => {
                        return (
                            <li key={book._id}>
                                <div>{book.title}</div>
                                <div>{book.author}</div>
                                <div>{book.owned_by}</div>
                            </li>  
                        );
                    }
                    )}
                </ul>
            </div>
        );
    }
}
 
export default PublicBookList;