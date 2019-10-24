import React, { Component } from 'react';


class PublicBookList extends Component {
    render() { 

        let profileList = this.props.Profiles;

        if (profileList.length>0){ //0 because of filter function, lets test this for  bugs

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

 
export default PublicBookList;