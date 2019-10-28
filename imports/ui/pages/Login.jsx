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
                <div className="login-page-container">

                    <div className="content-container">
                        <h2 className="login-logo">Rekindle</h2>
                        <div className="slogan">Exchange books with your friends</div>
                        <div className="slogan2">Upload your own booklist now!</div>
                       
                       
                        <div className="login-link-container">
                            <div className="login-link">  <AccountsUIWrapper/> </div>
                        </div>
                       
                       
                        <div className="subline">For CodeUniversity people only</div>

                    </div>
                </div>
                
            )
        }
    
    }

}


export default Login;