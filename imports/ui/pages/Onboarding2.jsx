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
        return  <NavLink className="onboarding2-start-btn" to ="/"> Get Started </NavLink>
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
            
            <div className="onboarding2-addName-container">
                
                <div>{(this.props.User.profile.books.length <3) ? <div className="onboarding2-step-header">Step 2/2 </div>: ''}</div>
                {(this.props.User.profile.books.length <3) ? <h6>Add 3 books you have. You can add more books later</h6> : ''}  
                {(this.props.User.profile.books.length <3) ? <AddBook/> : ''}   
                {(this.props.User.profile.books.length >2) ? <h4>Setup Completed!</h4> : ''}
                <div >
                    {(this.props.User.profile.books.length >2) ? <GetStarted/> : ''}
                </div>
                <div className="onboarding2-books-container">
                    {(this.props.User.profile.books.length <3) ? <MyBookList Profiles={this.props.Profiles} User={this.props.User}/> : ''}   
                </div> 
                
            </div>
         );
    }
}
 
export default Onboarding2 ;