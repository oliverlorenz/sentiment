/**
 * AFINN-based sentiment analysis for Node.js
 *
 * @package sentiment
 * @author Andrew Sliwinski <andrewsliwinski@acm.org>
 */

/**
 * Dependencies
 */
var assign = require('lodash.assign')
var tokenize = require('./tokenize')
var colors = require('colors')
/**
 * Performs sentiment analysis on the provided input 'phrase'.
 *
 * @param {String} Input phrase
 * @param {Object} Optional sentiment additions to AFINN (hash k/v pairs)
 *
 * @return {Object}
 */
module.exports = function (phrase, list, inject, callback) {
  if (!list) {
    list = 'en_us'
  }
  var afinn = require('../build/' + list + '.json')
  // Parse arguments
  if (typeof phrase === 'undefined') phrase = ''
  // if (!list) list = 'en_us';
  if (typeof inject === 'undefined') inject = null
  if (typeof inject === 'function') callback = inject
  if (typeof callback === 'undefined') callback = null

  // Merge
  if (inject !== null) {
    afinn = assign(afinn, inject)
  }

    // Storage objects
  var score = 0
  var words = []
  var positive = []
  var negative = []
  var phrases = {
    positive: [],
    negative: [],
    neutral: []
  }

  let phraseToPrint = phrase
  Object.keys(afinn).forEach((stringPattern) => {
    const patternScore = afinn[stringPattern]
    const pattern = new RegExp(stringPattern, 'ig')
    const match = pattern.exec(phrase)
    if (match && match[0]) {
      phraseToPrint = phraseToPrint.replace(pattern, `${match[0]}`.bgBlue + `(${patternScore})`.yellow)
      phrase = phrase.replace(pattern, `<replace>`)
      if (patternScore > 0) {
        phrases.positive.push(match[0])
      } else if (patternScore < 0) {
        phrases.negative.push(match[0])
      } else {
        phrases.neutral.push(match[0])
      }
      score += patternScore
    }
  })

  var tokens = tokenize(phrase)
  // Iterate over tokens
  var len = tokens.length
  while (len--) {
    var obj = tokens[len]
    var item = afinn[obj]
    if (!afinn.hasOwnProperty(obj)) continue

    words.push(obj)
    if (item > 0) positive.push(obj)
    if (item < 0) negative.push(obj)

    score += item
  }

  // Handle optional async interface
  var result = {
    phrases: phrases,
    score: score,
    comparative: score / tokens.length,
    tokens: tokens,
    words: words,
    positive: positive,
    negative: negative
  }

  let scoreLabel
  if (score > 0) {
    scoreLabel = `(${score})`.green
  } else if (score < 0) {
    scoreLabel = `(${score})`.red
  } else {
    scoreLabel = `(${score})`.yellow
  }
  result.debugMessage = `${phraseToPrint} ${scoreLabel}`
  if (callback === null) return result
  process.nextTick(function () {
    callback(null, result)
  })
}
