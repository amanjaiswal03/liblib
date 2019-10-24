import React, { Component } from 'react';
import PublicBookList from '../home_components/PublicBookList';
import Friends from '../home_components/Friends';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            filteredProfiles: this.props.Profiles,
            filtered: false,
        }
    }

    // This is triggered when any of the 'friends' is clicked
    // Passes 'Profile' array to 'PublickBookList Component' with just its own (the friend clicked on) data
    filterBooksByName(friendId) {
        let filter = this.props.Profiles.filter((x) => {return (x._id == friendId)});;
        this.setState ({
            filteredProfiles: filter,
            filtered: true
        })
    }

    showAllBooks(){
        this.setState ({
            filteredProfiles: this.props.Profiles,
            filtered: false,
        })
    }

    render() { 

                return ( 

                    <div className='home-all-content'>

                        <div className='feed-container'>
                            <div className="breadcrumbs">
                                <button onClick={this.showAllBooks.bind(this)}>All Books</button>
                                {this.state.filtered == true? 
                                    this.state.filteredProfiles.map((Profile) => {
                                        return(
                                            ' > '+Profile.profile.nickname+ '\'s books'
                                        )
                                    }):''
                                }
                            </div>
                            {/* renders either all profiles or one profile (triggered in Friends Component)  */}
                            <PublicBookList Profiles={this.state.filteredProfiles}/>
                        </div>

                        
                        <div className="friends-container">
                            <div className='members-text'>Members</div>
                            <Friends Profiles={this.props.Profiles} User={this.props.User} filterBooksByName={this.filterBooksByName.bind(this)} />
                        </div>    

                    </div>
                        
                );
    }
}
 
export default Home;
