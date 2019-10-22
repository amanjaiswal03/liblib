import React, { lazy, Suspense, Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, BrowserRouter} from 'react-router-dom';


const Home = (lazy(() => ( import ('./pages/Home'))))
const Profile = (lazy(() => ( import ('./pages/Profile'))))
const Login = (lazy(() => ( import ('./pages/Login'))))
const Onboarding1 = (lazy(() => ( import ('./pages/Onboarding1'))))
const Onboarding2 = (lazy(() => ( import ('./pages/Onboarding2'))))


import Navbar from './Navbar';



//Component needed for Suspense method
const LoadingMessage = () => ( "I'm loading...")



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
  unhideNavigation = () => {
    this.setState({
      showHeader : true,
    })
  }
  
  render() {
   
    // run return only after the last fetch (non-scalable solution)
    if (!!this.props.currentUser===true || this.props.users.length>0 ) {
    
      return(
      
      <div>
          {this.state.showHeader && <Navbar User={this.props.currentUser}/>}
         

          <Suspense fallback={<LoadingMessage/>}>

            <Switch>
              <Route exact path="/login" render={()=>{
                return(
                  <div>
                    <Login hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser}/>
                  </div> ) }}/>        
              

              
              <Route exact path="/" render={()=>
              
                (!this.props.currentUser? (
                  <Redirect to="/login" />
                ):(
                  <div>
                    <Home Profiles={this.props.users} User={this.props.currentUser}/>
                  </div> )) }/>              
              
              <Route exact path="/profile/:id" render={()=>
                (!this.props.currentUser? (
                  <Redirect to="/login" />
                ):(
                  <div>
                    <Profile Profiles={this.props.users} User = {this.props.currentUser}/>
                  </div> ))}/>


              <Route exact path="/createProfile/1" render={()=>{
                return(
                  <div>
                    <Onboarding1 hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser} Profiles={this.props.users}/>
                  </div> ) }}/>   

              <Route exact path="/createProfile/2" render={()=>{
                return(
                  <div>
                    <Onboarding2 hideNavigation={this.hideNavigation} unhideNavigation={this.unhideNavigation} User={this.props.currentUser} Profiles={this.props.users}/>
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
  return {
 
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(App);

export {withRouter};
