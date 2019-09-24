const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
  transports: [
      new winston.transports.File({ filename: `${path.join(__dirname, 'log')}/debug.log`, level: 'info' })
    ]
});

module.exports = logger;