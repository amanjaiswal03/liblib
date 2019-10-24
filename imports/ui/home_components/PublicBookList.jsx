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
                            <ul className="user-all-books">
                                {bookArray.map((book) => {
                                    return(
                                        <li className="user-all-books-eachBook" key={book.title}>
                                            <div className="each-book-title">{book.title}</div>
                                            <div className="each-book-author">{book.author}</div>
                                            <div className="each-user-nickname">{Profile.profile.nickname}</div> 
                                        </li>
                                    )
                                })}
                            </ul>    

                           )
                        })
                        
                        }
                       
                    </div>  
                )
                        
                    
                
                
                
            }
            
        return ( <div></div>)
      
    }
}

 
export default PublicBookList;