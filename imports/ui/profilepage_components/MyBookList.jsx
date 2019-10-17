import React, { Component } from 'react';
import { Books } from '../../api/books.js';

class MyBookList extends Component {
    constructor(props){
        super(props);
        //this.renderBooks = this.renderBooks.bind(this);
    }

    deleteThisBook(bookid) {
        Books.remove(bookid);
    }

    renderBooks(){        
            
            let profileList = this.props.Profiles;
            //console.log(this) 
           // console.log(this.props.Profiles[0]);
            console.log(profileList);
            if (profileList.length>0){
                let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
                //console.log(currentUserData);
                let bookArray = currentUserData[0].profile.books;
                console.log(bookArray);
                
                
                // if( this.props.User && this.props.User._id == tProfiles._id) {
                return (
                    <div>
                        please
                        {bookArray.map((book) => {
                            return(
                                                                
                                <li key={book.title}>

                                    <div>{book.title}</div>
                                    <div>{book.author}</div>

                                    <button className="delete" onClick={() => this.deleteThisBook(book.title)}>
                                        &times;
                                    </button>

                                </li>  
                            )
                            
                        })}
                    </div>
                )
                   // }
                // {this.props.User.profile.books.map((book) => {                                            
                //     return (
                //         <li key={book.title}>

                //             <div>{book.title}</div>
                //             <div>{book.author}</div>

                //             <button className="delete" onClick={() => this.deleteThisBook(book.title)}>
                //                 &times;
                //             </button>

                //         </li>  
                //     );
                //     }
                // )}
    }
}

    render() {
        //   console.log(this.currentUserData);
        //   console.log(this.props.Profiles); 
        //   console.log(Meteor.userId());
        //   (this.props.Profiles.filter((x) => {
        //       return (x._id == Meteor.userId())
        //     }));
       // console.log(this.props.Profiles.filter((x) => {x._id == this.props.User._id}));
        
    //    let profileList = this.props.Profiles; 
    //    let currentUserData = profileList.filter((x) => {return (x._id == Meteor.userId())});
       
    //   // let bookArray = currentUserData[0].profile.books;
    //    console.log(profileList);
    //    console.log(currentUserData);




        return (
            <div className = "MyBookList"> 
            
                 {this.renderBooks()}
                         
            </div>
        )
}
}
export default MyBookList;