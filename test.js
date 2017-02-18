var test = require('tape');
var forgetUtm = require('./');

test('makes no change if no query params', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com');

  t.equals(result, 'https://blah.com');
});

test('preserves trailing slash', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com/');

  t.equals(result, 'https://blah.com/');
});

test('makes no change if no utm query params', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com?name=ok&count=3');

  t.equals(result, 'https://blah.com?name=ok&count=3');
});

test('removes utm query param', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com?utm_thing=twitter');

  t.equals(result, 'https://blah.com');
});

test('removes only utm query params', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com?age=5&utm_thing=twitter&name=ok&utm_other=yes');

  t.equals(result, 'https://blah.com?age=5&name=ok');
});

test('removal from busy url', t => {
  t.plan(1);

  var result = forgetUtm('https://blah.com:80/a/b/c?age=5&utm_thing=twitter#top');

  t.equals(result, 'https://blah.com:80/a/b/c?age=5#top');
});
