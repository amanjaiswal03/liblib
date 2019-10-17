import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './home_components/Navbar';
import PublicBookList from './home_components/PublicBookList';
import Friends from './home_components/Friends';
import ProfilePage from './profilepage_components/ProfilePage';

import { withTracker } from 'meteor/react-meteor-data';
 
import { Books } from '../api/books.js';

//test
//import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'; //change import to: require("history").createBrowserHistory` soon
//test end



 //test
const browserHistory = createBrowserHistory();
//test end

class App extends Component {


 

  //test end
  render() {
    // console.log(this.props.users);
    //console.log(this.props.books);
    //var propertypass = {users: this.props.users, currentUser: this.props.currentUser};
    return(

      // <div>

       
      //   <Navbar />
      //   <PublicBookList publicBookList={this.props.books}/>
      //   <Friends friendsList={this.props.users} User = {this.props.currentUser}/>
        

   
      //   <ProfilePage myBookList={this.props.books} User = {this.props.currentUser}/>
        
      // </div>

     


      // test
     <div>
      
        <Router history={browserHistory}>
          <Switch>
            {/* <Route exact path="/home" component={}/>
            <Route exact path="/" component={AccountsUIWrapper}/> */}
            <Route exact path="/" render={()=>{
              return(
                <div>
                  <Navbar/>
                  <PublicBookList publicBookList={this.props.books}/>
                  <Friends friendsList={this.props.users} User = {this.props.currentUser}/>
                </div> ) }}/>              
           
            <Route exact path="/profile/:id" render={()=>{
              return(
                <div>
                  <ProfilePage profiles={this.props.users} User = {this.props.currentUser}/>
                </div> ) }}/>
                      
            {/* <Route exact path="/signin" component={AuthPageSignIn}/>
            <Route exact path="/join" component={AuthPageJoin}/>
            <Route component={NotFoundPage}/> */}
          </Switch>
        </Router>



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
