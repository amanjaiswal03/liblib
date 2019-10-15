import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './home_components/Navbar';
import PublicBookList from './home_components/PublicBookList';
import Friends from './home_components/Friends';
import ProfilePage from './profilepage_components/ProfilePage';

import { withTracker } from 'meteor/react-meteor-data';
 
import { Books } from '../api/books.js';




class App extends Component {

  render() {
    console.log(this.props.books);
    //var propertypass = {users: this.props.users, currentUser: this.props.currentUser};
    return(

      <div>

        {/* Home Components */}
        <Navbar />
        <PublicBookList publicBookList={this.props.books}/>
        <Friends friendsList={this.props.users} User = {this.props.currentUser}/>
        

        {/* Profile Page Components */}
        <ProfilePage />

      </div>
    );

  };
  
};


export default withTracker(() => {
  return {
    books: Books.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
