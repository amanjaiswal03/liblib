import React, { Component } from 'react';
import AddBook from '../profilepage_components/AddBook';
import MyBookList from '../profilepage_components/MyBookList';
import Name from '../profilepage_components/Name.jsx';

class Profile extends Component {
    
    
    render() { 
    
        return (
            <div>
                {/*   User == CurrentUser passed by app.jsx */}
                <Name Profiles={this.props.Profiles} />
                <AddBook/> 
                <MyBookList Profiles={this.props.Profiles} User={this.props.User} />     
            </div>
        );

    }
        
}


export default Profile;