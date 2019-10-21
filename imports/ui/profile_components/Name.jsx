import React, { Component } from 'react';

class Name extends Component {

    constructor(props){
        super(props);
        this.state = {username: ""};

    }

    handleOnblur(){
        Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }})
    }




    render() { 
        let profileList = this.props.Profiles;
       
    
        if (profileList.length>1){
            let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
            let currentName = currentUserData[0].profile.nickname;

            return (  
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder= "..."
                            defaultValue= {currentName}
                            onChange={(e)=> {this.setState({username: e.target.value});}}     
                            onBlur={this.handleOnblur.bind(this)} //eventually we should make this a button
                        >   
                        </input>
                        submit
            
                    </form>

                    
                </div>
            );
       
        }
        return(<div></div>);
    }
}
export default Name;