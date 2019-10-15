import React, { Component } from 'react';
import AddBook from './AddBook';
import MyBookList from './MyBookList';

class ProfilePage extends Component {
    render() { 
        return (
            <div>
                <Name />
                <AddBook />
                <MyBookList myBookList={this.props.myBookList}/>
            </div>
        );
    }
}

function Name(){
    return (
        <input defaultValue = "Mukesh Jaiswal" />
    )
}
 
export default ProfilePage;