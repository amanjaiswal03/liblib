//not used yet
import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';



export const Requests = new Mongo.Collection('requests', {idGeneration: 'STRING'});



if (Meteor.isServer) {
    //this code only runs on the server
    Meteor.publish('requests', function booksPublication() {
        return Requests.find({
            // $or: [
            //     { private: { $ne: true } },
            //     { owner: this.userId},
            // ],
        });
    });
}


Meteor.methods({

    //might need .update 
    'requests.insert'(book) {
        // check(title,author, String);

        //test if user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Requests.insert({
           
            createdAt: new Date(),

            bookId: book._id,
            title: book.title,
            author: book.author,
            owner: book.owner,
            ownerName: book.ownerName,

            requestBy: this.userId,
            requestByUsername: Meteor.users.findOne(this.userId).profile.nickname,

        });
    },



    'requests.remove' (requestId) {
        check(requestId, String);

        Requests.remove(requestId);
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
