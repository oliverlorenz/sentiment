/**
 * Converts raw AFINN data to JSON hash table.
 *
 * @package sentiment
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var async   = require('async'),
    fs      = require('fs');

var pattern = /(.+)\.txt/i;
var baseDirectory = __dirname + '/../node_modules/sentiment-lists';
fs.readdir(baseDirectory, function (err, directoryContent) {
    directoryContent.forEach(function (item) {
        var match = pattern.exec(item);
        if (match != null) {
            fs.readFile(baseDirectory + '/' + match[0], function (err, data) {
                // Storage object
                var hash = new Object(null);

                // Split lines
                var lines = data.toString().split(/\n/);
                async.forEach(lines, function (obj, callback) {
                    var item = obj.split(/\t/);
                    hash[item[0]] = Number(item[1]);
                    callback();
                }, function (err) {
                    if (err) throw new Error(err);

                    // Write out JSON
                    fs.writeFile(
                        __dirname + '/' + match[1] + '.json',
                        JSON.stringify(hash),
                    function (err) {
                        if (err) throw new Error(err);
                        process.stdout.write('Complete.');
                    });
                });
            });
        }
    });
});


/**
 * Read AFINN data from original format

*/
