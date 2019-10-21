import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';
import Name from '../profile_components/Name.jsx';

class Profile extends Component {
    
    
    render() { 
    
        return (
            <div>
                {/*   User == CurrentUser passed by app.jsx */}
                <h6>Add your public name</h6>
                
                <Name Profiles={this.props.Profiles} />
                

                <h6>Add books you own. They will be visible by your friends</h6>
                <AddBook/> 
                
                <MyBookList Profiles={this.props.Profiles} User={this.props.User} />     
            </div>
        );

    }
        
}


export default Profile;