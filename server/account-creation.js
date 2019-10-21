Accounts.onCreateUser(function(options, user) {
    console.log(options, user);
    // Use provided profile in options, or create an empty object
    user.profile = options.profile || {};  
    user.profile.nickname = '';
    user.profile.books = [];   
    
    // Returns the user object
    return user;
 });
