import React, {Component} from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { BrowserRouter, NavLink } from 'react-router-dom';


class Navbar extends Component {

    

    handleButtonClickHome(){
        window.location.href='http://localhost:3000/';
        
    }


    handleButtonClick(){
     
        window.location.href='http://localhost:3000/profile/:id';
       
    }

    render() { 
        return (
            <div>

                <nav>
                    <NavLink to='/'>Home</NavLink>   
                    <NavLink to='/profile/:id'>My Profile</NavLink>             
                   
                    {/* <Link to='/profiles/:id'>Click Me</Link> */}
                    {/* <button onClick={this.handleButtonClickHome.bind(this)}> Logo </button>
                    <button onClick={this.handleButtonClick.bind(this)}> My Books </button>
                    <MyBooksButton /> */}
                    <AccountsUIWrapper />
                    
                
                </nav>
               
            </div>
            
        );
    }
}
 
export default Navbar;



