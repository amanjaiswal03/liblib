import React, { lazy, Suspense, Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, BrowserRouter} from 'react-router-dom';

import { Books } from '../api/books';
import { Requests } from '../api/requests';


const Home = (lazy(() => ( import ('./pages/Home'))))
const Profile = (lazy(() => ( import ('./pages/Profile'))))
const Login = (lazy(() => ( import ('./pages/Login'))))
const Signup = (lazy(() => ( import ('./pages/Signup'))))
const Onboarding1 = (lazy(() => ( import ('./pages/Onboarding1'))))
const Onboarding2 = (lazy(() => ( import ('./pages/Onboarding2'))))


import Navbar from './Navbar';






//Component needed for Suspense method
const LoadingMessage = () => ( "I'm loading...")


//Entry
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showHeader : true,
    }
  }
 
  //Called by Login + Onboarding Pages within their lifecycle
  hideNavigation = () => {
    this.setState({
      showHeader : false,
    }) 
  }  
  unhideNavigation = () => {
    this.setState({
      showHeader : true,
    })
  }

  
  render() {
   
    //If Data is there, return
    if (!!this.props.currentUser===true || this.props.users.length>=0 ) {
    
      return(
      
      <div>
          {this.state.showHeader && <Navbar User={this.props.currentUser}/>}
         
          {/* Lazy Load, Defines Routes and props passed */}
          <Suspense fallback={<LoadingMessage/>}>

            <Switch>
              <Route exact path="/login" render={()=>{
                return(
                  <div>
                    <Login hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser}/>
                  </div> ) }}/>        
              
              <Route exact path="/signup" render={()=>{
                return(
                  <div>
                    <Signup hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser}/>
                  </div> ) }}/>        
              

              <Route exact path="/" render={()=>
                // Protected route
                (!this.props.currentUser? (
                  <Redirect to="/login" />
                ):(
                  <div>
                    <Home Profiles={this.props.users} User={this.props.currentUser} Books={this.props.books} Requests={this.props.requests}/>
                  </div> )) }/>              
              
              <Route exact path="/profile/" render={()=>
                (!this.props.currentUser? (
                  <Redirect to="/login" />
                ):(
                  <div>
                    <Profile Profiles={this.props.users} User = {this.props.currentUser} Books={this.props.books}/>
                  </div> ))}/>


              <Route exact path="/createProfile/1" render={()=>{
                return(
                  <div>
                    <Onboarding1 hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser} Profiles={this.props.users}/>
                  </div> ) }}/>   

              <Route exact path="/createProfile/2" render={()=>{
                return(
                  <div>
                    <Onboarding2 hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser} Profiles={this.props.users} Books={this.props.books}/>
                  </div> ) }}/>         


            </Switch>
          
          </Suspense>


        </div>

      );
    }
    
    return(<div></div>);
  };
  
};


 








export default withTracker(() => {

  Meteor.subscribe('books');
  Meteor.subscribe('requests');


  return {

    requests: Requests.find({}).fetch(),
    books: Books.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);

export {withRouter};
