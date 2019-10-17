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
        // console.log(this.props.profiles);
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder= "your name"
                        onChange={(e)=> {this.setState({username: e.target.value});}}
                
                        onBlur={this.handleOnblur.bind(this)}
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
}

export default ProfilePage;