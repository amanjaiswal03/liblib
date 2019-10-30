import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class AddBook extends Component {

    handleSubmit(event) {

        event.preventDefault();
     
        // Find the text field via the React ref
        const title = ReactDOM.findDOMNode(this.refs.titleNameInput).value.trim();
        const author = ReactDOM.findDOMNode(this.refs.authorNameInput).value.trim();

        
        // If book name & author fields are not empty
        // Later: Check for owner name as well
        if (title && author){
            
            // Insert the data in database
            // Meteor.users.update({_id : Meteor.userId()}, {$push: {'profile.books': ({'title': title, 'author': author, 'createdAt': new Date(), 'requestedBy': [] })}})
            // Meteor.users.insert({$set: {'profile.books': ({'title': bookName, 'author': author, 'createdAt': new Date(),})}})
            Meteor.call('books.insert', title, author);
         

            //Update counter in User collection (for sorting)
            Meteor.users.update({ _id: Meteor.userId()}, {$inc: {'profile.ownBooksCounter': 1 }});
            
            // Then Clear form
            ReactDOM.findDOMNode(this.refs.titleNameInput).value = '';
            ReactDOM.findDOMNode(this.refs.authorNameInput).value = '';
        }
      }

      
    render() { 
       
        return (
            <div>
                <form className="form-profile-addBook" onSubmit={this.handleSubmit.bind(this)}>

                    <input className="form-profile-addBook-title-input" type = "text" 
                        placeholder = "Title" 
                        ref = "titleNameInput"
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