const dotenv = require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV, 
  port: process.env.PORT,
}

if (dotenv.error) {
    throw new Error(dotenv.error);
}

module.exports = { config };