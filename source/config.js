const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'env', `.env.${process.env.NODE_ENV}`) })

module.exports = {
  port: process.env.PORT
}