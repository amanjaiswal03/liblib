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

    // This is triggered when any of the 'friends' is clicked
    // Passes 'Profile' array to 'PublickBookList Component' with just its own (the friend clicked on) data
    filterBooksByName(friendId) {
        let filter = this.props.Profiles.filter((x) => {return (x._id == friendId)});;
        this.setState ({
            filteredProfiles: filter,
        })
    }

    showAllBooks(){
        this.setState ({
            filteredProfiles: this.props.Profiles,
        })
    }

    render() { 
        
      
            return ( 
                <div className="home-all-content">
                    <div className="home-central-content">
                        <button className="breadcrumbs-allbooks" onClick={this.showAllBooks.bind(this)}>All Books</button>
                        <PublicBookList Profiles={this.state.filteredProfiles} />
                    </div>
                    <Friends className="friends-container" Profiles={this.props.Profiles} User={this.props.User} filterBooksByName={this.filterBooksByName.bind(this)} />
                </div>
            );
        
    }
}
 
export default Home;