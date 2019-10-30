import React, {Component} from  'react';

class BorrowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedBorrow: false, 
        }
    }

    handleBorrowClick(){

        Meteor.call('requests.insert', this.props.Book);
        Meteor.users.update({_id : Meteor.userId()}, {$set: {'profile.hasRequested': true}});


        this.setState((currentState) => ({

            clickedBorrow: !currentState.clickedBorrow,

        }));
    }

   

    render() { 
       
        return ( 
            
            <div>
                <button className="request-borrow-btn" onClick={this.handleBorrowClick.bind(this)}>Request</button> 
                
            </div>
        );
    }

}


export default BorrowButton