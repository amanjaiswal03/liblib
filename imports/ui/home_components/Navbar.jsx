import React, {Component} from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

class Navbar extends Component {
    render() { 
        return (
            <nav>
                <button> My Books </button>
                <AccountsUIWrapper />
            </nav>
        );
    }
}
 
export default Navbar;

