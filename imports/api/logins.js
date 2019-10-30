
import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
// import { check } from 'meteor/check';



export const Logins = new Mongo.Collection('logins', {idGeneration: 'STRING'});



if (Meteor.isServer) {
    //this code only runs on the server
    Meteor.publish('logins', function loginsPublication() {
        return Logins.find({
            // $or: [
            //     { private: { $ne: true } },
            //     { owner: this.userId},
            // ],
        });
    });
}


Meteor.methods({

    //might need .update 
    'logins.insert'() {
        // check(title,author, String);

        //test if user is logged in before inserting a task
        // if (! this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        Logins.insert({
           
            createdAt: new Date(),
            
            user: this.userId,
            username: Meteor.users.findOne(this.userId).profile.nickname,
            

        });

        

    },


})
