import React, { Component } from 'react';

class AddBook extends Component {
    render() { 
        return (
            <form>

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