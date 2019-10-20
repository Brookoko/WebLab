'use strict';

const http = require('http');
const utils = require('./utils');
const config = require('./config');
const router = require('./router');
require('./routes/main');
require('./routes/catalog');
require('./db');

const types = {
  string: s => s,
  function: (fn, req, res) => fn(req, res),
  undefined: (data, req, res) => res.end(),
};

const processData = (req, res) => {
  const data = router.router[req.url];
  if (!data) utils.loadResources(req.url, res);
  else {
    const type = typeof data;
    if (type === 'string') return res.end(data);
    const serializer = types[type];
    serializer(data, req, res);
  }
};

const server = http.createServer(async (req, res) => {
  processData(req, res);
});


server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});

server.on('error', err => {
  if (err.code === 'EACCES') {
    console.error(`No access to port: ${config.port}`);
  }
});

