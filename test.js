var test = require('tape');
var forgetUtm = require('./');

test('makes no change if no query params', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com');

  t.equals(result, 'https://blah.com');
});


test('makes no change if no utm query params', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com?name=ok&count=3');

  t.equals(result, 'https://blah.com?name=ok&count=3');
});
