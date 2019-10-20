'use strict';

const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');
const async = require('async');
const utils = require('../utils');

exports.bookInstanceList = (req, res, next) => {
  BookInstance.find()
    .populate('book')
    .exec((err, listOfBookInstances) => {
      if (err) next(err);
      return utils.loadHtml('bookinstance_list', {
        title: 'Book Instance List',
        listOfBookInstances
      });
    });
};

exports.bookInstanceDetail = (req, res, next) => {
  BookInstance.findById(req.params.id)
    .populate('book')
    .exec((err, bookInstance) => {
      if (err) return next(err);
      if (bookInstance === null) {
        const err = new Error('Book copy not found');
        err.status = 404;
        return next(err);
      }

      return utils.loadHtml('bookinstance_detail', {
        title: 'Book:',
        bookInstance,
      });
    });
};

exports.bookInstanceCreateGet = (req, res, next) => {
  Book.find({}, 'title')
    .exec((err, books) => {
      if (err) return next(err);
      return utils.loadHtml('bookinstance_form', {
        title: 'Create BookInstance',
        books
      });
    });
};

exports.bookInstanceDeleteGet = (req, res, next) => {
  BookInstance.findById(req.params.id)
    .populate('book')
    .exec((err, bookInstance) => {
      if (err) return next(err);
      if (bookInstance === null) res.redirect('/catalog/bookinstances');
      return utils.loadHtml('bookinstances_delete', {
        title: 'Delete Copy',
        bookInstance,
      });
    });
};

exports.bookInstanceUpdateGet = (req, res, next) => {
  async.parallel({
    books(callback) {
      Book.find({}, 'title')
        .exec(callback);
    },
    bookInstance(callback) {
      BookInstance.findById(req.params.id)
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.bookInstance === null) {
      const error = new Error('Copy not found');
      error.status = 404;
      return next(error);
    }
    return utils.loadHtml('bookinstance_form', {
      title: 'Update BookInstance',
      books: results.books,
      selectedBook: results.bookInstance.book._id,
      bookInstance: results.bookInstance,
    });
  });
};
