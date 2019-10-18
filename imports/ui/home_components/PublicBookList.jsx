import React, { Component } from 'react';


class PublicBookList extends Component {
    render() { 

        let profileList = this.props.Profiles;

        //console.log(profileList);  //this is an array holding the profiles
        
        // console.log(profileList.length);
        if (profileList.length>1){
           // console.log(profileList[0].profile.books);          
             let i;
             let length = profileList.length;
             let bookArray = [];
             let profileArray = [];
             for (i = 0; i < length; i++){
                
                bookArray.push(profileList[i].profile.books);
                profileArray.push(profileList[i]); //ok for now
            
                // console.log(i);
               // console.log(bookArray); //its rn only running thru it once
             }
             //console.log(bookArray);
             console.log(profileArray);

             
                return(
                    <div className='book-list'>
                        <ul>
                             
                            {   
                                bookArray.map((book) => {
                                 
                            


                                return (
                                    book.map((x) => {
                                        return(
                                            <li key={x.title}>
                                            <div>{x.title}</div>
                                            <div>{x.author}</div>
                                            <div>{profileArray[0].profile.nickname}</div>
                                            
                                             </li>
                                        )
                                        

                                    })

                                    
                                          
                                    );
                            }
                            )}
                        
                        </ul>
                    </div>  
                )
                        
                    
                
                
                
            }
       // }


        // var pblist = this.props.publicBookList;
        return ( <div></div>)
        //     <div className = "book-list">
        //         All Books
        //         <ul>
        //             {pblist.map((book) => {
        //                 return (

        //                     <li key={book._id}>
        //                         <div>{book.title}</div>
        //                         <div>{book.author}</div>
        //                         <div>{book.owned_by}</div>
                                
        //                     </li>  
                            
        //                 );
        //             }
        //             )}
        //         </ul>
        //     </div>
        // );
    }
}

 
export default PublicBookList;