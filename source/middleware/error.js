const logger = require('../logger');
module.exports = function(err, req, res, next) {
  if(err && err.error && err.error.isJoi) {
    logger.error(err.error.message);
    // we had a joi error, let's return a custom 400 json response
    res.status(400)
    res.send(err.error.name + ", " + err.error.message);
  }
  logger.error(err.message);
  res.status(err.status || 500);
  res.send(err.message);
}