var api_key = process.env.REACT_APP_MAILGUN_API_KEY;
var domain = process.env.REACT_APP_MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: process.env.EMAIL,
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if(error){
        console.log(error);
    }
  console.log(body);
});

export default mailgun.messages();