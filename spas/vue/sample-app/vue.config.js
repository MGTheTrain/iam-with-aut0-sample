const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  pluginOptions: {
    dotenv: {
      path: '.env',
    },
  },
};