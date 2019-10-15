import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Books } from '../../api/books.js';

class AddBook extends Component {

    handleSubmit(event) {

        event.preventDefault();
     
        // Find the text field via the React ref
        const bookName = ReactDOM.findDOMNode(this.refs.bookNameInput).value.trim();
        const author = ReactDOM.findDOMNode(this.refs.authorNameInput).value.trim();

        // Later: Get the owner name from Username
        const owner = "Aman";
     
        
        // If book name & author fields are not empty
        // Later: Check for owner name as well
        if (bookName && author){

            // Insert the data in database
            Books.insert({ 
                title: bookName, 
                author: author, 
                owned_by: owner, 
                createdAt: new Date() 
            });
            
            // Then Clear form
            ReactDOM.findDOMNode(this.refs.bookNameInput).value = '';
            ReactDOM.findDOMNode(this.refs.authorNameInput).value = '';
        }
     

      }
    

    render() { 
        return (

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

        );
    }
}
 
export default AddBook;