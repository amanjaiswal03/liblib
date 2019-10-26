import React, { Component } from 'react';


class MyBookList extends Component {
    
    constructor(props){
        super(props);
    }

    deleteThisBook(bookTitle) {
        //Books.remove(bookTitle);
        Meteor.users.update({_id : Meteor.userId()}, {$pull: {'profile.books': ({'title': bookTitle})}})
    }

    renderBooks(){        
            
        let profileList = this.props.Profiles;
        
        if (profileList.length>0){
            let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
            let bookArray = currentUserData[0].profile.books;
        
            return (
                <div className="user-own-booklist-container">
                    
                    {bookArray.map((book) => {
                        return(
                                                            
                            <div className= "user-own-books-eachBook" key={book.title}>

                                <div className="own-each-book-title" >{book.title}</div>
                                <div className="own-each-book-author"> {book.author}</div>

                                <button className="books-delete-btn" onClick={() => this.deleteThisBook(book.title)}>
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