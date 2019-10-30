import React, { Component } from 'react';



class Friends extends Component {

    
    render() { 
        var flist = this.props.Profiles;
        
        
        
        return (
           
                <div className="friends-list">
                    {flist.map((friend)=> { 
                        if( this.props.User && this.props.User._id !== friend._id) {
                            
                            let bookList = this.props.Books;
                            let friendsBooks = bookList.filter((x) => {return (x.owner == friend._id)});
                            
                            
                            return(
                                
                                <div className="each-friend-container" key={friend._id}>   
                                    <li key={friend._id} onClick={()=>this.props.filterBooksByName(friend._id)} className="each-friend-li">                      
                                        <div>{friend.profile && friend.profile.nickname ? friend.profile.nickname : 'Anon'} </div>
                                        <div>has {friendsBooks.length} books</div>  
                                    </li>  
                                </div>        
                                
                            
                            )    
                        }
                        } 
                    )}
                </div>
            

        );
    }
    

}
 
export default Friends;