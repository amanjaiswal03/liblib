import React, { Component } from 'react';
import AddBook from './AddBook';
import MyBookList from './MyBookList';

class ProfilePage extends Component {
    
    constructor(props){
        super(props);
        this.state = {username: ""};

    }
    
   
    handleOnblur(){
   
        Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }})
    }

   

   
    render() { 
        
        
        let profileList = this.props.profiles;
            //console.log(this) 
           // console.log(this.props.Profiles[0]);
           // console.log(profileList);
        if (profileList.length>1){
            let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
            // console.log(currentUserData);
            let currentName = currentUserData[0].profile.nickname;

            return (
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder= "Add your name"
                            defaultValue= {currentName}
                            onChange={(e)=> {this.setState({username: e.target.value});}}
                    
                            onBlur={this.handleOnblur.bind(this)} //eventually we should make this a button, ux: separate
                        >
                        
                        </input>
                

                    </form>
                    <h6>your name will be visible to your friends</h6>

                    {/*   User == CurrentUser passed by app.jsx */}
                    <AddBook User = {this.props.User} /> 
                    <MyBookList Profiles={this.props.profiles} User={this.props.User} />
                    
                </div>
            );

        }
        return ( <div></div>)
    }
}

export default ProfilePage;