'use strict';
const Sequelize = require('sequelize');
const moment = require('moment');

const options = {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'Please provide a title.'},
            notEmpty: {msg: 'Please provide a title.'},
        },
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'Please provide an author.'},
            notEmpty: {msg: 'Please provide an author.'},
        },
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: 'Please provide a genre.'},
            notEmpty: {msg: 'Please provide a genre.'},
        },
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
}

module.exports = sequelize => {
    // Create the Book model class
    class Book extends Sequelize.Model {
        addedOn(){
            return moment(this.createdAt).format('MMMM, D, YYYY');
        }
        updatedOn(){
            return moment(this.updatedAt).format('MMMM, D, YYYY');
        }
    }
    // Initialize the class with options, passing the sequelize object
    Book.init(options, {sequelize});
    // Return the initialized Book model
    return Book;
};
