var request = require("request");

var options = { method: 'POST',
  url: 'https://api.trello.com/1/cards',
  qs: 
   { name: 'Laundry',
     idList: process.env.idList,
     idMembers: process.env.idMembers,
     keepFromSource: 'all',
     key: process.env.key,
     token: process.env.token } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
