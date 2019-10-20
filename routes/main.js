'use strict';

const router = require('../router');
const utils = require('../utils');

router.get('/', utils.loadHtml('index.html'));
router.get('/table', utils.loadHtml('table.html'));
router.get('/catalog', utils.loadHtml('site/catalog.html'));
router.get('/books', utils.loadHtml('site/books.html'));
router.get('/authors', utils.loadHtml('site/authors.html'));
router.get('/tags', utils.loadHtml('site/tags.html'));
router.get('/map', utils.loadHtml('site/map.html'));
router.get('/second', utils.loadHtml('second.html'));
router.get('/third', utils.loadHtml('/third.html'));
router.get('/third/1', utils.loadHtml('/third/1.html'));
router.get('/third/2', utils.loadHtml('/third/2.html'));
router.get('/third/3', utils.loadHtml('/third/3.html'));
router.get('/third/4', utils.loadHtml('/third/4.html'));
router.get('/third/5', utils.loadHtml('/third/5.html'));
router.get('/third/6', utils.loadHtml('/third/6.html'));
router.get('/third/7', utils.loadHtml('/third/7.html'));
router.get('/third/8', utils.loadHtml('/third/8.html'));
router.get('/third/9', utils.loadHtml('/third/9.html'));
router.get('/third/10', utils.loadHtml('/third/10.html'));
router.get('/third/11', utils.loadHtml('/third/11.html'));
router.get('/third/12', utils.loadHtml('/third/12.html'));

