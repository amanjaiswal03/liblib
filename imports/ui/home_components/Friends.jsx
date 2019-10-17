import React, { Component } from 'react';
import ProfilePage from '../profilepage_components/ProfilePage';


class Friends extends Component {
    render() { 
        var flist = this.props.friendsList;
        return (
            <div className = "friends-list">
                <ul>
                    {flist.map((friend)=> { //console.log(this.props.User);
                        if( this.props.User && this.props.User._id !== friend._id) {
                            return (
                                
                                <li key={friend._id}>                      
                                    <div>{friend.profile && friend.profile.nickname ? friend.profile.nickname : ''} </div>
                                    <div>Has 5 books</div>
                                    
                                </li>  
                            )}
                        }
                    
                    )}
                </ul>
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