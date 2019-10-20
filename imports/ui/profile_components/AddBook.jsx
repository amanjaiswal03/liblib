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
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <input type = "text" 
                        placeholder = "Name of the Book" 
                        ref = "bookNameInput"
                    />

                    <input type = "text" 
                        placeholder = "Author" 
                        ref = "authorNameInput"
                    />

                    <input type = "Submit" 
                        ref = "submitButton"
                    />

                </form>
                <h6>Add books you own. They will be visible to your friends</h6>
            </div>

        );
    }
}
 
export default AddBook;