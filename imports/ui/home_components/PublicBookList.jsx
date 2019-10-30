import React, { Component } from 'react';
import BorrowButton from '../home_components/BorrowButton';


class PublicBookList extends Component {

    render() { 

        let bookList = this.props.Books;
       

        if (bookList.length>0){

            // let filteredBooks = bookList.filter((x) => {return (x.owner == this.props.Profiles.nickname)});
            
            return(
                <div className='all-users-booklist-container'>
                    {bookList.map((book) => {
                        return(
                            <div className="user-all-books" key={book._id}>
                                <div className="user-all-books-eachBook" >
                                    <div className="each-book-info">
                                        <div className="each-book-title">{book.title}</div>
                                        <div className="each-book-author">by {book.author}</div>
                                    </div>

                                    
                                    <div className="each-user-nametag">
                                        {this.props.User._id != book.owner ? <div className="each-user-nickname">{book.ownerName}</div> : <div className="each-user-nickname"> You </div>}
                                    </div>

                                    <div>
                                        {this.props.User.profile.hasRequested == false && this.props.User._id != book.owner ? <BorrowButton  User={this.props.User} Book={book} Requests={this.props.Requests} />
                                        : 
                                        <div>
                                            <button className="request-borrow-btn-hidden"> Request </button> 
                                        </div>}
                                    </div>
                                </div>    
                            </div>    
                        )
                    })}
                </div> 
            )       
        }
        return(
            <div className='all-users-booklist-container'>
                <div className="user-all-books">
                    <div className="user-all-books-eachBook" >
                        <div className="home-request-notification-text">
                            ...this user's book shelf seems empty
                        </div>
                    </div>
                </div>

            </div>
        )
    }   
}



 
export default PublicBookList;