var contextService = require('request-context');

module.exports = function(req, res, next) {
  const header = req.headers && req.headers['x-token'];
  if(header) {
    contextService.set('request:token', header);
    next()
  } else {
    var err = new Error('Not token');
    err.status = 401;
    next(err);
  }
}