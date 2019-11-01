import React, { Component } from 'react';
import PublicBookList from '../home_components/PublicBookList';
import Friends from '../home_components/Friends';
import PendingRequestNotification from '../home_components/PendingRequestNotification';


class Home extends Component {
    
    constructor(props){
        super(props);
        this.state={
            filteredBooks: this.props.Books,
            filtered: false,
        }
    }

    // This is triggered when any of the 'friends' is clicked
    // Passes 'Profile' array to 'PublickBookList Component' with just its own (the friend clicked on) data
    filterBooksByName(friendId) {
        let bookFilter = this.props.Books.filter((x) => {return (x.owner == friendId)});;
        this.setState ({
            filteredBooks: bookFilter,
            filtered: true,
        })
    }

    showAllBooks(){
        this.setState ({
            filteredBooks: this.props.Books,
            filtered: false,
        })
    }


    render() { 
                return ( 

                    <div className='home-all-content' >


                        <div className='home-container'>

                            <div className='home-main-container'>

                                <div className='feed-col'>

                                    <div className='feed-container' >
                                        
                                        {this.props.User.profile.hasRequested == true?
                                            <div className="home-request-notification-container">
                                                <PendingRequestNotification User={this.props.User} Requests={this.props.Requests} Books={this.props.Books} />
                                               
                                            </div> : ''}
                                        {/* breadcrumbs menu */}
                                        <div className="breadcrumbs">
                                            <button className= "breadcrumbs-show-all-btn"onClick={this.showAllBooks.bind(this)}>All books</button>
                                            {this.state.filtered == true && this.state.filteredBooks.length > 0 ? 
                                                ' / ' +this.state.filteredBooks[0].ownerName+ '\'s books' :''
                                            }
                                        </div>

                                        {/* renders either all profiles or one profile (triggered in Friends Component)  */}
                                        <PublicBookList Books={this.state.filteredBooks} User={this.props.User} Requests={this.props.Requests}/>
                                    </div>

                                </div>
                                
                                
                                <div className='friends-col' >

                                    <div className="friends-container" >
                                        <div className='members-text'>Member ranks </div>
                                        <Friends Profiles={this.props.Profiles} User={this.props.User} filterBooksByName={this.filterBooksByName.bind(this)} Books={this.props.Books}/>
                                    </div>    
                            
                                </div>

                            </div>

                        </div>

                    </div>
                    
                        
                );
                
    }
}
 


export default Home;