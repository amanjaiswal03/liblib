import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { BrowserRouter, NavLink } from 'react-router-dom';


class Navbar extends Component {

    render() { 
        return (
            <div>

                <nav>
                    <NavLink to='/'>Home</NavLink>   
                    <NavLink to='/profile/:id'>My Profile</NavLink>             
                    <AccountsUIWrapper />
                    
                
                </nav>
               
            </div>
            
        );
    }
}
 
export default Navbar;



