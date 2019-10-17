import React, {Component} from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

class Navbar extends Component {

    handleButtonClick(){
        window.location.href='http://localhost:3000/profile/id';
    }

    render() { 
        return (
            <nav>
                <button onClick={this.handleButtonClick.bind(this)}> My Books </button>
                <AccountsUIWrapper />
            </nav>
        );
    }
}
 
export default Navbar;

