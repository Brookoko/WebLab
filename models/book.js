'use strict';

const db = require('../db');

function Book(title, author, summary, tags) {
  this.title = title;
  this.author = author;
  this.summary = summary;
  this.tags = tags;
}

Book.prototype.id = () => this.title.hashCode() +
  this.author +
  this.summary.hashCode() +
  this.tags.reduce((acc, val) => acc + val.id);

Book.prototype.url = () => '/catalog/book/' + this.id;

Book.prototype.html = (data, cb) => {
  db.getId('Author', this.author, d => {
    data = data.replace('{%book.author%}', d);
    data = data.replace('{%book.title%}', this.title);
    db.getPred('Tag', el => this.tags.includes(el.id), res => {
      for (const tag in res) {
        data += '<li>\n';
        data += tag.html();
        data += '</li>\n';
      }
      cb(data);
    });
  });
};

module.exports = Book;
