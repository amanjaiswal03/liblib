import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';
import { BrowserRouter, NavLink } from 'react-router-dom';



// Component called within Page,renders NavLink, sets profile.didOnboarding to true
class GetStarted extends Component {

    constructor (props){
        super(props);
        this.onboardingDone.bind(this);
    }
    onboardingDone(){
        Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.didOnboarding': true }});
        
    }


    render() { 
        this.onboardingDone();
        return  <NavLink to ="/"> Get Started! </NavLink>
    }

}


class Onboarding2 extends Component {
    

    componentDidMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }



    render() { 
        return ( 
            
            <div>
                
                <div>{(this.props.User.profile.books.length <3) ? <h2>Step 2/2</h2> : ''}</div>
                {(this.props.User.profile.books.length <3) ? <h6>Add 3 books you have. You can add more books later</h6> : ''}  
                {(this.props.User.profile.books.length <3) ? <AddBook/> : ''}   
                {(this.props.User.profile.books.length >2) ? <h2>Setup Completed!</h2> : ''}
                {(this.props.User.profile.books.length >2) ? <GetStarted/> : ''}
                {(this.props.User.profile.books.length <3) ? <MyBookList Profiles={this.props.Profiles} User={this.props.User}/> : ''}   
                 
                
            </div>
         );
    }
}
 
export default Onboarding2 ;