import React, { Component } from 'react';


class MyBookList extends Component {
    
    constructor(props){
        super(props);
    }

    deleteThisBook(bookId) {

        Meteor.call('books.remove', bookId);
        // Books.remove(bookId);
        // Meteor.users.update({_id : Meteor.userId()}, {$pull: {'profile.books': ({'title': bookTitle})}})
        Meteor.users.update({ _id: Meteor.userId()}, {$inc: {'profile.ownBooksCounter': -1 }});
    }

    renderBooks(){        
             
        let bookList = this.props.Books;
        
        if (bookList.length>0){
            let currentUserBooks = bookList.filter((x) => {return (x.owner == Meteor.userId())});
        
        
            return (
                <div className="user-own-booklist-container">
                    
                    {currentUserBooks.map((book) => {
                        return(
                                                            
                            <div className= "user-own-books-eachBook" key={book._id}>

                                <div className="own-each-book-title" >{book.title}</div>
                                <div className="own-each-book-author"> {book.author}</div>

                                <button className="books-delete-btn" onClick={() => this.deleteThisBook(book._id)}>
                                    &times;
                                </button>

                            </div>  
                        )
                        
                    })}
                </div>
            )
        }
    }

    
    render() {

        return (
            <div className = "MyBookList"> 
            
                 {this.renderBooks()}
                         
            </div>
        )
}
}

export default MyBookList;