import React, { Component } from 'react';
import PublicBookList from '../home_components/PublicBookList';
import Friends from '../home_components/Friends';
import { metaProperty } from '@babel/types';


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

                    <div className='home-all-content'>


                       

                        <div className='feed-container'>
                            
                            {this.props.User.profile.hasRequested == true?
                                <div className="home-request-notification-container">
                                    <PendingRequestNotification User={this.props.User} Requests={this.props.Requests} Books={this.props.Books} />
                                </div> : ''}
                            
                            <div className="breadcrumbs">
                                <button className= "breadcrumbs-show-all-btn"onClick={this.showAllBooks.bind(this)}>All Books</button>
                                {this.state.filtered == true && this.state.filteredBooks.length > 0 ? 
                                    ' / ' +this.state.filteredBooks[0].ownerName+ '\'s books' :''
                                }
                            </div>

                            {/* renders either all profiles or one profile (triggered in Friends Component)  */}
                            <PublicBookList Books={this.state.filteredBooks} User={this.props.User} Requests={this.props.Requests}/>
                        </div>

                        
                        <div className="friends-container">
                            <div className='members-text'>Members</div>
                            <Friends Profiles={this.props.Profiles} User={this.props.User} filterBooksByName={this.filterBooksByName.bind(this)} Books={this.props.Books}/>
                        </div>    

                    </div>
                        
                );
    }
}
 



class PendingRequestNotification extends Component {
    
    
    deleteRequest(x_id){
        Meteor.call('requests.remove',x_id);
        Meteor.users.update({_id : Meteor.userId()}, {$set: {'profile.hasRequested': false}})    
    }


    render() { 
        let allRequests = this.props.Requests;

        console.log(allRequests);

        if (allRequests.length>0){
        
            let filteredRequest = allRequests.filter((request) => { console.log(request.requestBy); console.log(Meteor.userId());
                return (request.requestBy == Meteor.userId()) } )
            
            return(
                <div>

                    {filteredRequest.map((x) => {
                        
                        return(                                                
                            <div className= "home-request-notification-each" key={x.title}>
                               
                                <div>
                                    <div className="home-request-notification-header">
                                    You requested {x.title} from {x.ownerName}
                                    </div>
                                    <div className="home-request-notification-text">
                                    Now, just wait for them to approach you.
                                    </div>
                                
                                    <div className="home-request-notification-text">
                                    At this moment, everyone can request only one book at a time.
                                    But don't worry - the average owner responds within 2 days.
                                    If you decide to request another book, simply delete this request.
                                    </div>
                                </div>
                               
                                <div className="home-request-notification-block">

                                    <button className="books-delete-btn" onClick={() => this.deleteRequest(x._id)}>
                                        &times;
                                    </button> 
                                </div>

                            </div>  
                        )})
                    }
                </div>
            )

        }
        return(
            <div></div>
        )


       
    }
}
 

export default Home;