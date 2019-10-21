import React, { Component } from 'react';
import Name from '../profile_components/Name.jsx';


class Onboarding1 extends Component {
    

    componentWillMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }
    render() { 
        return (  
            <div>
                <h5>What's your name? (What do your friends call you?) </h5>
                <Name Profiles={this.props.Profiles} />

            </div>
           
        );
    }
}
 
export default Onboarding1 ;