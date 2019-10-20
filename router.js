const router = { }

exports.router = router;
exports.post = () => { }
exports.get = (url, value) => {
  router[url] = value;
}