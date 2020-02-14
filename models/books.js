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
    class Book extends Sequelize.Model {
        // publishedAt will take the unformatted datetime provided by SQLite via 'createdAt' and format it using Moment.js.
        // publishedAt(){
        //     const date = moment(this.createdAt).format('MMMM D, YYYY, h:mma');
        //     return date;
        // }
        // On the homepage, just show a snippet of the article. The first 200 characters.
        // shortDescription(){
        //     const shortDesc = this.body.length > 200 ? this.body.substring(0,200) + '...' : this.body;
        //     return shortDesc;
        // }
    }
    Book.init(options, {sequelize});

    return Book;
};
