import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EditName extends Component {
    constructor(props){
        super(props);
        this.state = {username: "", clickedSubmit: false,};

    }
    

    handleSubmit(event){
        event.preventDefault();

        const username = ReactDOM.findDOMNode(this.refs.nicknameInput).value.trim();

        if (username){
            Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }});
            this.props.hideEditButton();
        
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
                <input 
                    type="text"
                    placeholder= "..."
                    defaultValue= {currentName}
                    onChange={(e)=> {this.setState({username: e.target.value});}}     
                    ref="nicknameInput"
                />   
                
                <input
                    type="Submit"
                    ref = "submitButton"
                />
                
    
            </form>

            
        </div> 
        
        );
       
    }

}
} 
export default EditName ;