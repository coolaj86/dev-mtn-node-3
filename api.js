'use strict';

function sendSms(toNumber, cb) {
  var twilio = require('twilio');

  // Your accountSid and authToken from twilio.com/user/account
  var config = require('./config');
  var accountSid = config.twilio.accountSid;
  var authToken = config.twilio.authToken;
  var client = twilio(accountSid, authToken);

  client.messages.create({
      body: "AJ please?! I love you <3",
      to: toNumber,
      from: "+14155992671"
  }, cb);
}

module.exports = function create() {
  var express = require('express');
  var app = express();

  app.get('/hello/:name?', function (req, res) {
    var name;

    if (req.params.name) {
      name = req.params.name;
    } else {
      name = 'Guest';
    }
    res.send({
      message: "Hello, " + encodeURIComponent(name) + "!"
    });
  });

  app.post('/twilio/:number', function (req, res) {
    sendSms(req.params.number, function (err/*, message*/) {
      console.error(err);

      if (err) {
        res.send({
          error: { message: 'developer error, see server console' }
        });
        return;
      }
      res.send({ success: true });
    });
  });

  return app;
};
