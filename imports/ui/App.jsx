import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';


import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

import Navbar from './Navbar';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showHeader : true,
    }
  }

  hideNavigation = () => {
    this.setState({
      showHeader : false,
    }) 
  }  

  
  render() {

    return(

     <div>
        {this.state.showHeader && <Navbar/>}
        <Switch>
          <Route exact path="/login" render={()=>{
            return(
              <div>
                <Login hideNavigation={this.hideNavigation} />
              </div> ) }}/>        
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
