import React, { Component } from 'react';
import Name from '../profile_components/Name.jsx';


class Onboarding1 extends Component {
    

    componentDidMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }

    // navigateToNextScreen= () => {
    //     this.setState({
    //       showHeader : true,
    //     })
    //   }


    render() { 
        return (  
            <div>
                <h2>Step 1/2</h2>
                <h5>What's your name? (What do your friends call you?) </h5>
                <Name Profiles={this.props.Profiles} />

            </div>
           
        );
    }
}
 
export default Onboarding1 ;