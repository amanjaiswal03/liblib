import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { withTracker } from 'meteor/react-meteor-data';

import { Router, Route, Switch } from 'react-router';
import { withRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'; //change import to: require("history").createBrowserHistory` soon




 //test
const browserHistory = createBrowserHistory();
//test end

class App extends Component {


  render() {

    return(

     <div>
        <Navbar/>
      
        <Router history={browserHistory}>
          <Switch>
            {/* <Route exact path="/home" component={}/>
            <Route exact path="/" component={AccountsUIWrapper}/> */}
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
 
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);
