import React, { Component } from 'react';



class Friends extends Component {

    
    render() { 
        var flist = this.props.Profiles;
        return (
           
                <div className="friends-list">
                    {flist.map((friend)=> { 
                        if( this.props.User && this.props.User._id !== friend._id) {
                            
                            return (
                            <div className="each-friend-container">   
                                <li key={friend._id} onClick={()=>this.props.filterBooksByName(friend._id)} className="each-friend-li">                      
                                    <div>{friend.profile && friend.profile.nickname ? friend.profile.nickname : ''} </div>
                                    <div>has {friend.profile.books.length} books</div>  
                                </li>  
                            </div>    
                            )}
                        } 
                    )}
                </div>
            

        );
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // render() { 
    //     return (
    //         <div className = "friends">
    //             <ul>
    //                 <li>
    //                     <div className = "name">Swen Kumar</div>
    //                     <div className = "total-books"> Has 5 Books </div>
    //                 </li>
    //                 <li>
    //                     <div className = "name">Mukesh Kumar</div>
    //                     <div className = "total-books"> Has 1 Books </div>
    //                 </li>
    //                 <li>
    //                     <div className = "name">Aman Kumar</div>
    //                     <div className = "total-books"> Has 10 Books </div>
    //                 </li>
    //             </ul>
    //         </div>
    //     );
    // }
}
 
export default Friends;