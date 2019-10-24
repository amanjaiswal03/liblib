import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';
import EditName from '../profile_components/EditName';

class Profile extends Component {
    
    render() { 
    
        return (
            
            <div>
                
                
                <div>
                    <EditName User={this.props.currentUser} Profiles={this.props.Profiles}/>
                </div>
                
                
            
                    
                <div>
                    Add more books
                    <AddBook/> 

                </div>
                    
                
                <MyBookList Profiles={this.props.Profiles} User={this.props.User} />     
           
            </div>
        );

    }
        
}


export default Profile;