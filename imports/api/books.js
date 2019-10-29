//not used yet
import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Random } from 'meteor/random';


export const Books = new Mongo.Collection('books',{idGeneration: 'STRING'});



if (Meteor.isServer) {
    //this code only runs on the server
    Meteor.publish('books', function booksPublication() {
        return Books.find({
            // $or: [
            //     { private: { $ne: true } },
            //     { owner: this.userId},
            // ],
        });
    });
}


Meteor.methods({

    //might need .update 
    'books.insert'(title,author) {
        // check(title,author, String);

        //test if user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Books.insert({
            
            title,
            author,
            createdAt: new Date(),

            owner: this.userId,
            ownerName: Meteor.users.findOne(this.userId).profile.nickname,
        });
    },



    'books.remove' (bookId) {
        check(bookId, String);

        Books.remove(bookId);
    },



    // 'books.setPrivate'(taskId, setPrivate) { //Just allows changing the private property 
    //     check(taskId, String);
    //     check(setPrivate, Boolean);

    //     const task = Tasks.findOne(taskId); //why?

    //     //Make sure only the task owner can make a task private
    //     if (task.owner !== this.userId) {
    //         throw new Meteor.Error('not-authorized');
    //     }

    //     Tasks.update(taskId, { $set: { private: setPrivate } });
    // },

})
