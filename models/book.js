'use strict';

const utils = require('../utils');
const Author = require('./author');
const db = require('../db');

function Book(title, author, summary, tags) {
  this.title = title;
  this.author = author;
  this.summary = summary;
  this.tags = tags;
} 

Book.prototype.id = () => title.hashCode()
  + author
  + summary.hashCode()
  + tags.reduce((acc, val) => acc + val.id);

Book.prototype.url = () => '/catalog/book/' + this.id;

Book.prototype.html = (data, cb) => {
  db.getId('Author', this.author, d => {
    data = data.replace('{%book.author%}', d);
    data = data.replace('{%book.title%}', this.title);
    db.getPred('Tag', el => this.tags.includes(el.id), res => {
      for (let tag in res) {
        t += '<li>\n'
        t += tag.html();
        t += '</li>\n'
      }
      cb(data);
    })
  })
};

module.exports = Book;
