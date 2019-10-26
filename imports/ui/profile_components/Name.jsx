import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

class Name extends Component {

    constructor(props){
        super(props);
        this.state = {username: "", clickedSubmit: false,};

    }
    

    handleSubmit(event){
        event.preventDefault();

        const username = ReactDOM.findDOMNode(this.refs.nicknameInput).value.trim();

        if (username){
            Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }});
            this.setState({clickedSubmit: true})
        
        }
    }

    
    
    render() { 
        let profileList = this.props.Profiles;
       
    
        if (profileList.length>0){
            let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
            let currentName = currentUserData[0].profile.nickname;

            return (  
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)  } >
                        <input className="form-profile-addBook-title-input"
                            type="text"
                            placeholder= "..."
                            defaultValue= {currentName}
                            onChange={(e)=> {this.setState({username: e.target.value});}}     
                            ref="nicknameInput"
                        />   
                        
                        <input className="form-profile-addBook-submit-btn"
                            type="Submit"
                            ref = "submitButton"
                            value = "Save"
                        />
                        
            
                    </form>

                    {this.state.clickedSubmit&& <Redirect to="/createProfile/2"/>}
                </div>
            );
        
        }
        return(<div></div>);
    }
}
export default Name;