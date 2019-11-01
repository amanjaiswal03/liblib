import React, { Component } from 'react';
import Name from '../profile_components/Name.jsx';


class Onboarding1 extends Component {
    

    componentDidMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }

    
    render() { 
        return (  
            

                <div className="onboarding-content-container">
                    <div className="onboarding-step-header"> Step 1/2 </div>

                    <div className="onboarding-addName-container">

                        <div className="onboading-addName-header">What's your name? </div>
                        <div className="onboarding-addName-message">You name will be displayed to all users</div>
                        <Name Profiles={this.props.Profiles} />
                    </div>

                </div>
          
        );
    }
}
 
export default Onboarding1 ;