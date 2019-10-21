import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';

class Onboarding2 extends Component {
    

    componentWillMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }
    render() { 
        return ( 
            <div>
                <AddBook/> 
                <MyBookList Profiles={this.props.Profiles} User={this.props.User} />   

            </div>
         );
    }
}
 
export default Onboarding2 ;