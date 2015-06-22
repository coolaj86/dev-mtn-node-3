
* https://www.twilio.com/user/account/voice-sms-mms
* https://www.twilio.com/docs/node/install

1) Security
2) Express static review
3) Twilio account
4) Commandline Twilio Demo

How to get this project up and running
-----------------

```
git clone git@github.com:coolaj86/dev-mtn-node-3.git

npm install



# Copy the example file and season to taste
rsync -av ./config.sample.js ./config.js
vim ./config.js

node test-twilio.js
```

How We Created this Project
---------------------------

I created a new project on github
* <https://github.com/new>

I copied the git url to the project and then cloned the directory

```bash
git clone git@github.com:coolaj86/dev-mtn-node-3.git
```

Then I created a `package.json` for this project and installed some
dependencies

```bash
npm init

npm install --save express@4.x
npm install --save localhost.daplie.com-certificates@latest
npm install --save twilio@latest

ls ./node_modules/
```

I copied the `serve.js` file from the previous project. This handles the web server and keeps it seperate from the express app.
* <https://github.com/coolaj86/dev-mtn-node-day-2/blob/master/serve.js>

I blocked my `config.js` from uploading to github and created
a `config.sample.js` in its place.


`vim ./.gitignore`:
```
config.js

# lots of other stuff below from github's default node.gitignore
```
