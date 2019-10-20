const fs = require('fs');
const config = require('./config');

const loadFile = (path, cb) => (req, res) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(`Cannot read file: ${path}`);
      throw err
    }
    cb(data, req, res);
  })
}

const mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

const writeHTML = (data, req, res) => {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.write(data);  
  res.end();
}

const loadBase = data => loadFile(`${config.baseHTML}`, (base, req, res) => {
  data = data.replace('block content', '')
  base = base.replace('block content', data);
  writeHTML(base, req, res);
});

const applyOptions = (data, options) => {
  if (!options) return data;
  for (var field in options) {
    data.replace('{%' + field + '%}', options[filed])
  }
}

exports.loadHtml = (path, options) => loadFile(`${config.viewRoot}/${path}`, (data, req, res) => {
  data = applyOptions(data, options)
  if (data.includes('block content')) loadBase(data, req, res)(req, res);
  else writeHTML(data, req, res);
})

const loadData = (path, type, res) => {
  const stream = fs.createReadStream(path);
  res.writeHeader(200, {'Content-Type': type});
  stream.pipe(res);
};

exports.loadResources = (url, res) => {
  var id = url.substr(url.indexOf('.') + 1);
  var type = mime[id];
  if (type) return loadData(`${config.viewRoot}${url}`, type, res);
}

String.prototype.hashString = () => {
	let hash = 0;
	for (let i = 0; i < this.length; i++) {
		hash += Math.pow(this.charCodeAt(i) * 31, this.length - i);
		hash = hash & hash;
	}
	return hash;
}

Date.prototype.hashCode = () => this.getUTCFullYear
  + this.getUTCMonth
  + this.getUTCDate
  + this.getUTCDay

