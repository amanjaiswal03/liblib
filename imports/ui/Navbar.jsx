import React, {Component} from 'react';
import {Link, Router} from "react-router";
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


class Navbar extends Component {

    

    handleButtonClickHome(){
        window.location.href='http://localhost:3000/';
        
    }


    handleButtonClick(){
     
        window.location.href='http://localhost:3000/profile/:id';
       
    }

    render() { 
        return (
            
                <nav>
                    {/* <Link to='/profiles/:id'>Click Me</Link> */}
                    {/* <button onClick={this.handleButtonClickHome.bind(this)}> Logo </button>
                    <button onClick={this.handleButtonClick.bind(this)}> My Books </button>
                    <MyBooksButton /> */}
                    <AccountsUIWrapper />
                    
                
                </nav>
            
        );
    }
}
 
export default Navbar;



