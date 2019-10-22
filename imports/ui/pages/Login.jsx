import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper';
import { Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';




class Login extends Component {
    
    componentDidMount() {
        this.props.hideNavigation();
    }

    componentWillUnmount() {
        this.props.unhideNavigation();
       
    }

    render(){

        if (!!this.props.User === true && !!this.props.User.profile.didOnboarding === false){
            return(
                <Redirect to="/createProfile/1" />
            )
            
        } else if (!!this.props.User === true){
            return(
                <Redirect to="/" />
            )
        
        
            }else {
            //console.log(this.props.User)
            return(
                <div>
                    <h2>liblib Beta</h2>
                    <h4>See what books your friends have! Yay!</h4>
                    <AccountsUIWrapper/>
                    <h6>(It's free)</h6>

                </div>
                
            )
        }
    
    }

}


export default Login;