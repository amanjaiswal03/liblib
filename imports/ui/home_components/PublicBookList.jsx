import React, { Component } from 'react';







class PublicBookList extends Component {

// constructor(props){
//     super(props);
//     this.state={
//         clickedBorrow: false,
//         clickedUnborrow: false,
//     }

// }



    render() { 

        let profileList = this.props.Profiles;

        if (profileList.length>0){

            return(
                <div className='all-users-booklist-container'>
                    {profileList.map((Profile) => {
                        
                        let bookArray = Profile.profile.books;
                        //console.log(bookArray);
                        return(
                            <div className="user-all-books">
                                
                                {bookArray.map((book) => {
                                    return(
                                        <div className="user-all-books-eachBook" key={book.title}>
                                            <div className="each-book-info">
                                                <div className="each-book-title">{book.title}</div>
                                                <div className="each-book-author">by {book.author}</div>
                                            </div>

                                            
                                            <div className="each-user-nametag">
                                                <div className="each-user-nickname">{Profile.profile.nickname}</div> 
                                            </div>

                                            <div>
                                                <BorrowButton ProfileId={Profile._id} User={this.props.User} BookUnit={book.requestedBy} Book={book}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>    
                        )
                    })}
                </div> 

            )       
        }
            
        return ( <div></div>)
      
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

        console.log(this.props.Book);
        // console.log(profile.books.title);
        // console.log(this.props.profile.books.book);
       
        // Meteor.users.update({_id : this.props.ProfileId} , {$set: { 'profile$[].books.[book_field].requestedBy' : this.props.User._id }},
        // {arrayFilters: [{ 'profile.books.title' : this.props.Book.title }]}
        //);
        this.setState((currentState) => ({

            clickedBorrow: !currentState.clickedBorrow,

        }));
    }

    render() { 
        return ( 
            <div>
                {this.state.clickedBorrow == false? <button className="request-borrow-btn" onClick={this.handleBorrowClick.bind(this)}>Borrow</button> :
                <button className="request-unborrow-btn" onClick={this.handleBorrowClick.bind(this)}>Requested</button> }
            </div>
         );
    }
}
 



 
export default PublicBookList;