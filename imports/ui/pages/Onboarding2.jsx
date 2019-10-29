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

        let bookList = this.props.Books;
        let currentUserBooks = bookList.filter((x) => {return (x.owner == Meteor.userId())});


        return ( 
            
            <div className="onboarding2-addName-container">
                
                <div>{(currentUserBooks.length <3) ? <div className="onboarding2-step-header">Step 2/2 </div>: ''}</div>
                {(currentUserBooks.length <3) ? <h6>Add 3 books you have. You can add more books later</h6> : ''}  
                {(currentUserBooks.length <3) ? <AddBook/> : ''}   
                {(currentUserBooks.length >2) ? <h4>Setup Completed!</h4> : ''}
                <div >
                    {(currentUserBooks.length >2) ? <GetStarted/> : ''}
                </div>
                <div className="onboarding2-books-container">
                    {(currentUserBooks.length <3) ? <MyBookList Profiles={this.props.Profiles} User={this.props.User} Books={this.props.Books} /> : ''}   
                </div> 
                
            </div>
         );
    }
}
 
export default Onboarding2 ;