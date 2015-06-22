'use strict';

var twilio = require('twilio');

// Your accountSid and authToken from twilio.com/user/account
var config = require('./config');
var accountSid = config.twilio.accountSid;
var authToken = config.twilio.authToken;
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    body: "AJ please?! I love you <3",
    to: "+13174266525",
    from: "+14155992671"
}, function(err, message) {
    if (err) {
      console.error(err);
      return;
    }
    process.stdout.write(message.sid);
});
