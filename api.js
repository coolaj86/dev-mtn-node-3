'use strict';

function sendSms(toNumber) {
  var twilio = require('twilio');

  // Your accountSid and authToken from twilio.com/user/account
  var config = require('./config');
  var accountSid = config.twilio.accountSid;
  var authToken = config.twilio.authToken;
  var client = twilio(accountSid, authToken);

  return client.messages.create({
    body: "Please?! I love you <3"
    // whichever number the 6-digit verification code was sent to
  , to: toNumber
  , from: config.twilio.fromNumber
  });
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
    sendSms(req.params.number).then(function(message) {
      process.stdout.write(message.sid);

      res.send({ success: true });
    }, function (err) {
      console.error(err);

      res.send({
        error: { message: 'developer error, see server console' }
      });
    });
  });

  return app;
};
