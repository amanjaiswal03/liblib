import React, { Component } from 'react';


class PendingRequestNotification extends Component {
    
    
    deleteRequest(x_id){
        Meteor.call('requests.remove',x_id);
        Meteor.users.update({_id : Meteor.userId()}, {$set: {'profile.hasRequested': false}})    
    }




    render() { 
        let allRequests = this.props.Requests;

       

        if (allRequests.length>0){
        
            let filteredRequest = allRequests.filter((request) => { 
                return (request.requestBy == Meteor.userId()) } )
            


            return(
                <div>

                    {filteredRequest.map((x) => {

                        
                        
                        
                        return(                                                
                            <div  className= "home-request-notification-each" key={x.title}>
                               
                                <div>
                                    <div className="home-request-notification-header">
                                    You borrowed {x.title} from {x.ownerName}
                                    </div>
                                    <div className="home-request-notification-text">
                                    {x.ownerName} will aproach you via Slack within 2 days. 
                                    </div>
                                
                                    <div className="home-request-notification-text">
                                   
                                    </div>
                                </div>
                               
                                <div className="home-request-notification-block">

                                    <button className="request-delete-btn" onClick={() => this.deleteRequest(x._id)}>
                                        Cancel request
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
 
export default PendingRequestNotification