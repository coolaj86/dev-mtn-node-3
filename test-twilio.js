'use strict';

var twilio = require('twilio');

// Your accountSid and authToken from twilio.com/user/account
var config = require('./config');
var accountSid = config.twilio.accountSid;
var authToken = config.twilio.authToken;
var client = twilio(accountSid, authToken);

client.messages.create({
  body: "Jenny please?! I love you <3"
  // whichever number the 6-digit verification code was sent to
, to: "YOUR VERIFIED NUMBER HERE"
, from: config.twilio.fromNumber
}).then(function(message) {
  process.stdout.write(message.sid);
}, function (err) {
  console.error(err);
});
