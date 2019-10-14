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
    return(

      <div>

        {/* Home Components */}
        <Navbar />
        <PublicBookList publicBookList={this.props.books}/>
        <Friends />
        

        {/* Profile Page Components */}
        <ProfilePage />

      </div>
    );

  };
  
};


export default withTracker(() => {
  return {
    books: Books.find({}).fetch(),
  };
})(App);
