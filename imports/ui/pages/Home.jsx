import React, { Component } from 'react';
import PublicBookList from '../home_components/PublicBookList';
import Friends from '../home_components/Friends';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            filteredProfiles: this.props.Profiles,
        }
    }

    filterBooksByName(friendId) {
        let filter = this.props.Profiles.filter((x) => {return (x._id == friendId)});;
        this.setState ({
            filteredProfiles: filter,
        })
    }


    render() { 
        
      
            return ( 
                <div>
                    <PublicBookList Profiles={this.state.filteredProfiles} />
                    <Friends Profiles={this.props.Profiles} User={this.props.User} filterBooksByName={this.filterBooksByName.bind(this)} />
                </div>
            );
        
    }
}
 
export default Home;