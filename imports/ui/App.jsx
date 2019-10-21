import React, { lazy, Suspense, Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Switch } from 'react-router';
import { withRouter, Redirect, BrowserRouter} from 'react-router-dom';


const Home = (lazy(() => ( import ('./pages/Home'))))
const Profile = (lazy(() => ( import ('./pages/Profile'))))
const Login = (lazy(() => ( import ('./pages/Login'))))


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
    if (!!this.props.currentUser===true || this.props.users.length>1 ) {
      
      return(

      <div>
          {this.state.showHeader && <Navbar/>}
         

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
