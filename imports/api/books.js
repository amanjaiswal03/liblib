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

    'books.insert'(title,author) {
        // possible to check the input here...
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


})
