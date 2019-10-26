import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class AddBook extends Component {

    handleSubmit(event) {

        event.preventDefault();
     
        // Find the text field via the React ref
        const bookName = ReactDOM.findDOMNode(this.refs.bookNameInput).value.trim();
        const author = ReactDOM.findDOMNode(this.refs.authorNameInput).value.trim();

        
        // If book name & author fields are not empty
        // Later: Check for owner name as well
        if (bookName && author){

            // Insert the data in database         
        
            Meteor.users.update({_id : Meteor.userId()}, {$push: {'profile.books': ({'title': bookName, 'author': author, 'createdAt': new Date(),})}})
           // Meteor.users.insert({$set: {'profile.books': ({'title': bookName, 'author': author, 'createdAt': new Date(),})}})
            
         
            
            // Then Clear form
            ReactDOM.findDOMNode(this.refs.bookNameInput).value = '';
            ReactDOM.findDOMNode(this.refs.authorNameInput).value = '';
        }
      }

      
    render() { 
       
        return (
            <div>
                <form className="form-profile-addBook" onSubmit={this.handleSubmit.bind(this)}>

                    <input className="form-profile-addBook-title-input" type = "text" 
                        placeholder = "Title" 
                        ref = "bookNameInput"
                    />

                    <input className="form-profile-addBook-author-input"type = "text" 
                        placeholder = "Author" 
                        ref = "authorNameInput"
                    />

                    <input className="form-profile-addBook-submit-btn" type = "Submit" 
                        ref = "submitButton"
                        value = "Add"
                    />
                    

                </form>
                
            </div>

        );
    }
}
 
export default AddBook;