'use strict';

const book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/tag');
const bookInstance = require('../models/bookinstance');
const async = require('async');
const utils = require('../utils');

// eslint-disable-next-line no-unused-vars
exports.index = (req, res) => {
  async.parallel({
    bookCount(callback) {
      book.countDocuments({}, callback);
    },
    bookInstanceCount(callback) {
      bookInstance.countDocuments({}, callback);
    },
    bookInstanceAvailableCount(callback) {
      bookInstance.countDocuments({ status: 'Available' }, callback);
    },
    authorCount(callback) {
      Author.countDocuments({}, callback);
    },
    genreCount(callback) {
      Genre.countDocuments({}, callback);
    }
  }, (err, results) => utils.loadHtml('index', {
    title: 'Local Library Home',
    error: err,
    data: results }));
};

exports.bookList = (req, res, next) => {
  book.find({}, 'title author')
    .populate('author')
    .exec((err, listOfbooks) => {
      if (err) return next(err);
      return utils.loadHtml('book_list', {
        title: 'book List',
        listOfbooks
      });
    });
};

exports.bookDetail = (req, res, next) => {
  async.parallel({
    book(callback) {
      book.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback);
    },
    bookInstances(callback) {
      bookInstance.find({ 'book': req.params.id })
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.book === null) {
      const err = new Error('book not found');
      err.status = 404;
      return next(err);
    }

    return utils.loadHtml('book_detail', {
      title: 'Title',
      book: results.book,
      bookInstances: results.bookInstances,
    });
  });
};

exports.bookCreateGet = (req, res, next) => {
  async.parallel({
    authors(callback) {
      Author.find(callback);
    },
    genres(callback) {
      Genre.find(callback);
    }
  }, (err, results) => {
    if (err) return next(err);
    return utils.loadHtml('book_form', {
      title: 'Create book',
      authors: results.authors,
      genres: results.genres,
    });
  });
};

exports.bookDeleteGet = (req, res, next) => {
  async.parallel({
    book(callback) {
      book.findById(req.params.id, 'title author')
        .populate('author')
        .exec(callback);
    },
    bookInstances(callback) {
      bookInstance.find({ book: req.params.id })
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.book === null) res.redirect('/catalog/books');
    return utils.loadHtml('book_delete', {
      title: 'Delete book',
      book: results.book,
      bookInstances: results.bookInstances,
    });
  });
};

exports.bookUpdateGet = (req, res, next) => {
  async.parallel({
    book(callback) {
      book.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback);
    },
    authors(callback) {
      Author.find(callback);
    },
    genres(callback) {
      Genre.find(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.book === null) {
      const error = new Error('book not found');
      error.status = 404;
      return next(error);
    }
    for (const genre of results.genres) {
      for (const bookGenre of results.book.genre) {
        if (genre._id.toString() === bookGenre._id.toString()) {
          genre.checked = 'true';
        }
      }
    }
    return utils.loadHtml('book_form', {
      title: 'Update book',
      authors: results.authors,
      genres: results.genres,
      book: results.book,
    });
  });
};
