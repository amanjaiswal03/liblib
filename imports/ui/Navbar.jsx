import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { BrowserRouter, NavLink } from 'react-router-dom';


class Navbar extends Component {

    render() { 
        console.log(this.props.User)
        
        if(this.props.User){
            return (
                <div>

                    <nav className="nav">
                        <div className="nav-logo">Rekindle</div>
                        <NavLink className="nav-home-btn" to='/'>Home</NavLink>   
                        <NavLink className="nav-profile-btn" to='/profile/:id'>{this.props.User.profile.nickname}</NavLink>             
                        <AccountsUIWrapper className="nav-uiWrapper"/>
                    </nav>

                
                </div>
                
            );}
        return(<div></div>);
    }
}
 
export default Navbar;



