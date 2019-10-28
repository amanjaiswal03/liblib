import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EditName extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            clickedSubmit: false,
            showNameEdit : false,
        };
        this.hideEditButton.bind(this);

    }
    

    handleSubmit(event){
        event.preventDefault();

        const username = ReactDOM.findDOMNode(this.refs.nicknameInput).value.trim();

        if (username){
            Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }});
            this.hideEditButton();
        
        }
    }

    hideEditButton() {
        this.setState({
            showNameEdit: false,
        })
    }

    editButtonClicked() {
        this.setState({
            showNameEdit: !this.showNameEdit,
        })
    }



    render() {
        let profileList = this.props.Profiles;
       
    
        if (profileList.length>0){
            let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
            let currentName = currentUserData[0].profile.nickname;
 
        return (

            <div className="profile-name-container">

                <div className="profile-name-content">

                    {this.state.showNameEdit == false ? currentName :''}

                    {this.state.showNameEdit &&
                        <form onSubmit={this.handleSubmit.bind(this)  } >
                            <input 
                                type="text"
                                placeholder= {"Your name"}
                                // defaultValue= {currentName}
                                onChange={(e)=> {this.setState({username: e.target.value});}}     
                                ref="nicknameInput"
                                />   
                            
                            <input
                                type="Submit"
                                ref = "submitButton"
                                value = "Save"
                                />
                            
                        </form>
                    }
                </div>
                <div > 
                    {this.state.showNameEdit == false ? <button className="name-edit-btn" onClick={this.editButtonClicked.bind(this)}>edit </button> : ''}
                </div>
                
            </div> 
        
        );
       
    }

}
} 
export default EditName ;