'use strict';

const async = require('async');
const utils = require('../utils');
const Author = require('../models/author');
const Book = require('../models/book');

exports.authorList = (req, res, next) => {
  Author.find()
    .sort([['lastName', 'ascending']])
    .exec((err, listOfAuthors) => {
      return utils.loadHtml('author_list', {
        title: 'Author List',
        listOfAuthors
      });
    });
};

exports.authorDetail = (req, res, next) => {
  async.parallel({
    author(callback) {
      Author.findById(req.params.id)
        .exec(callback);
    },
    authorsBooks(callback) {
      Book.find({ author: req.params.id }, 'title summary')
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.author === null) {
      const err = new Error('Author not found');
      err.status = 404;
      return next(err);
    }

    return utils.loadHtml('author_detail', {
      title: 'Author Detail',
      author: results.author,
      authorsBooks: results.authorsBooks
    });
  });
};

exports.authorCreateGet = (req, res) => utils.loadHtml('author_form', { title: 'Create Author' });

exports.authorDeleteGet = (req, res, next) => {
  async.parallel({
    author(callback) {
      Author.findById(req.params.id)
        .exec(callback);
    },
    authorBooks(callback) {
      Book.find({ author: req.params.id })
        .exec(callback);
    }
  }, (err, results) => {
    if (err) return next(err);
    if (results.author === null) res.redirect('/catalog/authors');
    return utils.loadHtml('author_delete', {
      title: 'Delete Author',
      author: results.author,
      authorBooks: results.authorBooks,
    });
  });
};

exports.authorUpdateGet = (req, res, next) => {
  Author.findById(req.params.id)
    .exec((err, author) => {
      if (err) return next(err);
      if (author === null) {
        const error = new Error('Author not found');
        error.status = 404;
        return next(error);
      }
      return utils.loadHtml('author_form', {
        title: 'Update Author',
        author,
      });
    });
};
