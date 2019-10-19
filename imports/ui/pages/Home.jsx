import React, { Component } from 'react';
import PublicBookList from '../home_components/PublicBookList';
import Friends from '../home_components/Friends';

class Home extends Component {
    
    render() { 
        return ( 
            <div>
                <PublicBookList Profiles={this.props.Profiles} />
                <Friends Profiles={this.props.Profiles} User={this.props.User} />
            </div>
         );
    }
}
 
export default Home;