var test = require('tap').test;
var sentiment = require('../../lib/index');

test('interface', function (t) {
    t.type(sentiment, 'function', 'module is a function');
    t.type(sentiment('test', 'en_us'), 'object');
    t.type(sentiment('test', 'en_us', {test: 10}), 'object');
    t.end();
});
