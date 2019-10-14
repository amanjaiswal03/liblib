import React, { Component } from 'react';

class Friends extends Component {
    render() { 
        return (
            <div className = "friends">
                <ul>
                    <li>
                        <div className = "name">Swen Kumar</div>
                        <div className = "total-books"> Has 5 Books </div>
                    </li>
                    <li>
                        <div className = "name">Mukesh Kumar</div>
                        <div className = "total-books"> Has 1 Books </div>
                    </li>
                    <li>
                        <div className = "name">Aman Kumar</div>
                        <div className = "total-books"> Has 10 Books </div>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Friends;