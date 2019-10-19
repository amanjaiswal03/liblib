import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory'; //change import to: require("history").createBrowserHistory` soon

import Home from './pages/Home';
import Profile from './pages/Profile';

import Navbar from './Navbar';



 //test
// const browserHistory = createBrowserHistory();
//test end

class App extends Component {


  render() {

    return(

     <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <div>
                <Home Profiles={this.props.users} User={this.props.currentUser}/>
              </div> ) }}/>              
          <Route exact path="/profile/:id" render={()=>{
            return(
              <div>
                <Profile Profiles={this.props.users} User = {this.props.currentUser}/>
              </div> ) }}/>
        </Switch>
      



      </div>















    );

  };
  
};


export default withTracker(() => {
  return {
 
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);

export {withRouter};
