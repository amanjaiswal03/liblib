import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {


    render() { 
        //Return once data rendered        
        if(this.props.User){
            return (
                <div>

                    <nav className="nav">
                        <div className="nav-logo">Rekindle</div>
                        <NavLink activeClassName="nav-home-btn-active" className="nav-home-btn" exact to='/'>Home</NavLink>   
                        <NavLink activeClassName="nav-home-btn-active" className="nav-profile-btn" exact to='/profile/'>{this.props.User.profile.nickname}</NavLink>             
                        <AccountsUIWrapper className="nav-uiWrapper"/>
                    </nav>

                
                </div>
                
            );}
        return(<div></div>);
    }
}
 
export default Navbar;



