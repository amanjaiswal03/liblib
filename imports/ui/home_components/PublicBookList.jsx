import React, { Component } from 'react';







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
                                        <div className="each-user-nickname">{book.ownerName}</div> 
                                    </div>

                                    <div>
                                        {this.props.User.profile.hasRequested == false && this.props.User._id != book.owner ? <BorrowButton User={this.props.User} Book={book} Requests={this.props.Requests} />
                                        : 
                                        <div>
                                            <button className="request-borrow-btn-hidden" onClick={console.log("you just tried to borow your own book, yo")}>Request</button> 
                                        </div>}
                                    </div>
                                </div>    
                            </div>    
                        )
                    })}
                </div> 
            )       
        }
    }   
}






class BorrowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedBorrow: false, 
        }
    }

    handleBorrowClick(){

        Meteor.call('requests.insert', this.props.Book);
        Meteor.users.update({_id : Meteor.userId()}, {$set: {'profile.hasRequested': true}})


        this.setState((currentState) => ({

            clickedBorrow: !currentState.clickedBorrow,

        }));
    }

   

    render() { 
        
        return ( 

            <div>
                <button className="request-borrow-btn" onClick={this.handleBorrowClick.bind(this)}>Request</button> 
             
            </div>
        );
    }

}
 

// <button className="request-unborrow-btn" onClick={this.handleBorrowClick.bind(this)}>Requested</button>


 
export default PublicBookList;