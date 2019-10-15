import React, { Component } from 'react';
import AddBook from './AddBook';
import MyBookList from './MyBookList';

class ProfilePage extends Component {
    
    constructor(props){
        super(props);
        this.state={username: ""};

    }
    
   
   // handleOnblur(){
    
     //   console.log(this.state.username);

  //  }
   
    render() { 
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder= "your name"
                        onChange={(e)=> {this.setState({username: e.target.value});}}
                
                        onBlur={()=> {Meteor.users.update({_id : Meteor.userId()}, {$set : {'profile.nickname': this.state.username }})}}
                    >
                    
                    </input>
            

                </form>
                <h6>your name will be visible to your friends</h6>


                <AddBook />
                <MyBookList myBookList={this.props.myBookList}/>
            </div>
        );
    }
}

export default ProfilePage;