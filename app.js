console.log('Starting app..');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Andrew',1,'Andrew',1,2,3,4]);
console.log(filteredArray);

// console.log('Result:', notes.add(9,-2));

// var user = os.userInfo();


//Up to v7 node
// fs.appendFile('greetings.txt', 'Hello world!');

//Option one
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function (err){
//   if (err){
//     console.log('Unable to write to file');
//   }
// });

//Option two
// fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);
