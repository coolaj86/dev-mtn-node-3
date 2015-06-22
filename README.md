
* https://www.twilio.com/user/account/voice-sms-mms
* https://www.twilio.com/docs/node/install


git clone git@github.com:coolaj86/dev-mtn-node-3.git

npm init

npm install --save express@4.x
npm install --save localhost.daplie.com-certificates@latest
npm install --save twilio@latest


# Copy the example file and season to taste
rsync -av ./config.sample.js ./config.js
vim ./config.js
