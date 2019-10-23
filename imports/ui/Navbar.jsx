import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {


    render() { 
        //Return once data rendered        
        if(this.props.User){
            return (
                <div>

                    <nav>
                        <NavLink to='/'>Home</NavLink>   
                        <NavLink to='/profile/:id'>{this.props.User.profile.nickname}</NavLink>             
                        <AccountsUIWrapper />
  
                    </nav>

                
                </div>
                
            );}
        return(<div></div>);
    }
}
 
export default Navbar;



