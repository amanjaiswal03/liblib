import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';
import EditName from '../profile_components/EditName';

class Profile extends Component {
    
    render() { 
    
        return (
            
            <div className="profile-all-content">
                
                
                <div className="profile-header-container">
                    <EditName User={this.props.currentUser} Profiles={this.props.Profiles}/>
                </div>
                
                
            
                    
                <div className="profile-addBook-container" >
                    <div className="profile-addBook-header">
                        Got more books? Add them here!
                    </div> 
                    
                    <div className="profile-addBook-content">
                        <AddBook/> 
                    </div>

                </div>
                    
                <div className="profile-own-books-container">
                    <MyBookList Profiles={this.props.Profiles} User={this.props.User} Books={this.props.Books} />     
                </div>
           
            </div>
        );

    }
        
}


export default Profile;