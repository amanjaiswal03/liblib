import React, { Component } from 'react';
import AddBook from '../profile_components/AddBook';
import MyBookList from '../profile_components/MyBookList';
import Name from '../profile_components/Name.jsx';
import EditName from '../profile_components/EditName';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            showNameEdit : false,
        }
    }
    editButtonClicked = () => {
        this.setState({
            showNameEdit: !this.showNameEdit,
        })
    }

    hideEditButton = () => {
        this.setState({
            showNameEdit: false,
        })
    }
    render() { 
    
        return (
            
            <div>
                {this.state.showNameEdit && <EditName hideEditButton={this.hideEditButton} User={this.props.currentUser} Profiles={this.props.Profiles}/>}
                
                <h6></h6>
                
                <button onClick={this.editButtonClicked.bind(this)}>edit name</button>
                
            
                
                

                <h6>Add books you own. They will be visible by your friends</h6>
                <AddBook/> 
                
                <MyBookList Profiles={this.props.Profiles} User={this.props.User} />     
            </div>
        );

    }
        
}


export default Profile;