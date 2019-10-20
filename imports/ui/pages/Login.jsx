import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper';

class Login extends Component {
 

    componentWillMount() {
        this.props.hideNavigation();
    }


    render(){
        return(
            <div>
                <h2>liblib Beta</h2>
                <h4>See what books your friends have!</h4>
                <AccountsUIWrapper/>
                <h6>It's free</h6>

            </div>
            
        )
    }

}


export default Login;