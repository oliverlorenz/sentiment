/**
 * Converts raw AFINN data to JSON hash table.
 *
 * @package sentiment
 * @author Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Dependencies
 */
var fs = require('fs')
var pattern = /(.+)\.txt/i
var baseDirectory = fs.realpathSync(__dirname + '/../../public-transport-sentiment-lists')
fs.readdir(baseDirectory, function (err, directoryContent) {
    directoryContent.forEach(function (item) {
      var match = pattern.exec(item)
      if (match != null) {
        fs.readFile(baseDirectory + '/' + match[0], function (err, data) {
          // Storage object
          var hash = {}
          // Split lines
          var lines = data.toString().split(/\n/)
          lines.forEach((line) => {
            if (line.length !== 0) {
              var item = line.split(/\t/)
              hash[item[0]] = Number(item[1])
            }
          })
          fs.writeFile(
              __dirname + '/' + match[1] + '.json',
              JSON.stringify(hash, null, 2)
            )
          console.log(`wrote file ${__dirname + '/' + match[1] + '.json'}`)
        })
      }
    })
})


/**
 * Read AFINN data from original format

*/
