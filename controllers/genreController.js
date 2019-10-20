'use strict';

const async = require('async');
const Book = require('../models/book');
const Genre = require('../models/tag');
const utils = require('../utils');

exports.genreList = (req, res, next) => {
  Genre.find()
    .sort([['name', 'ascending']])
    .exec((err, listOfGenres) => {
      if (err) next(err);
      res.render('genre_list', {
        title: 'Genre List',
        listOfGenres
      });
    });
};

exports.genreDetail = (req, res, next) => {
  async.parallel({
    genre(callback) {
      Genre.findById(req.params.id)
        .exec(callback);
    },
    genreBooks(callback) {
      Book.find({ genre: req.params.id })
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.genre === null) {
      const err = new Error('Genre not found');
      err.status = 404;
      return next(err);
    }
    return utils.loadHtml('genre_detail', {
      title: 'Genre Detail',
      genre: results.genre,
      genreBooks: results.genreBooks,
    });
  });
};

// eslint-disable-next-line no-unused-vars
exports.genreCreateGet = (req, res) => {
  utils.loadHtml('genre_form', { title: 'Create Genre' });
};

exports.genreDeleteGet = (req, res, next) => {
  async.parallel({
    genre(callback) {
      Genre.findById(req.params.id)
        .exec(callback);
    },
    books(callback) {
      Book.find({ genre: req.params.id }, 'title author summary')
        .populate('author')
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);
    if (results.genre === null) res.redirect('/catalog/genres');
    return utils.loadHtml('genre_delete', {
      title: 'Delete Genre',
      genre: results.genre,
      books: results.books,
    });
  });
};

exports.genreUpdateGet = (req, res, next) => {
  Genre.findById(req.params.id)
    .exec((err, genre) => {
      if (err) return next(err);
      if (genre === null) {
        const error = new Error('Genre not found');
        error.status = 404;
        return next(error);
      }
      return utils.loadHtml('genre_form', {
        title: 'Update Genre',
        genre,
      });
    });
};
