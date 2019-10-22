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
                <div>
                    
                    {bookArray.map((book) => {
                        return(
                                                            
                            <li key={book.title}>

                                <div>{book.title}</div>
                                <div>{book.author}</div>

                                <button className="delete" onClick={() => this.deleteThisBook(book.title)}>
                                    &times;
                                </button>

                            </li>  
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