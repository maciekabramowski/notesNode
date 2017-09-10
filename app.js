console.log('Starting app..');

const fs = require('fs');

//Up to v7 node
// fs.appendFile('greetings.txt', 'Hello world!');

//Option one
fs.appendFile('greetings.txt', 'Hello world!', function (err){
  if (err){
    console.log('Unable to write to file');
  }
});

//Option two
// fs.appendFileSync('greetings.txt','Hello world');
