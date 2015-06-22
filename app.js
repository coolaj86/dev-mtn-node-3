'use strict';

module.exports = function create() {
  var express = require('express');
  var app = express();

  var path = require('path');
  var pubPath = path.join(__dirname, 'public');

  // __dirname == the directory where this script file is
  app.use('/', express.static(pubPath));

  return app;
};
