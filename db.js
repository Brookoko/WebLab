'use strict';

const fs = require('fs');

const pathes = {
  'Author': './saves/authors',
  'Book': './saves/books',
  'Tag': './saves/tags'
};

exports.save = (obj, cb) => {
  const path = pathes[obj.constructor.name];
  const json = JSON.stringify(obj);
  fs.appendFile(path, json, 'utf8', err => {
    if (err) {
      console.error(`Falied to add new data ${json}`);
      throw err;
    }
    cb();
  });
};

exports.getAll = (type, cb) => {
  const path = pathes[type];
  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(`Cannot load ${type}`);
    }
    cb(JSON.parse(data));
  });
};

exports.getId = (type, id, cb) => exports.getAll(type, data => {
  cb(data.find(el => el.id === id));
});

exports.getPred = (type, predicate, cb) => exports.getAll(type, data => {
  cb(data.filter(el => predicate(el)));
});

