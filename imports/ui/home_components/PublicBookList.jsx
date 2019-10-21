import React, { Component } from 'react';


class PublicBookList extends Component {
    render() { 

        let profileList = this.props.Profiles;

        if (profileList.length>0){ //0 because of filter function, lets test this for  bugs

                return(
                    <div className='book-list'>
                        {profileList.map((Profile) => {
                           
                           let bookArray = Profile.profile.books;
                            //console.log(bookArray);
                           return(
                            <ul>
                                {bookArray.map((book) => {
                                    return(
                                        <li key={book.title}>
                                        <div>{book.title}</div>
                                        <div>{book.author}</div>
                                        <div>{Profile.profile.nickname}</div> 
                                        
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