/**
 * 
 * @param {String} string 
 * @returns {String} Convert a string to lowercase, but the first letter is large.
 */
function stringHumanReadableForm(string) {
  let result = "";
  result = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return result;
}

/**
 * 
 * @param {String} string 
 * @returns {String} Converting a string in order to correctly place spaces.
 */
function stringCleanUp(string) {
  let result = "";

  result = string.replace(/\p{Po}/gu, '$& ');
  result = result.replace(/\s+([.,])/g, '$1');
  result = result.replace(/\s+/g, ' ');
  
  return result;
}

/**
 * 
 * @param {String} string 
 * @returns {Number} number of words per line
 */
function stringWordCount(string) {
  let blank = '';
  let result = "";

  result = string.replace(/\p{Po}/gu, ' ').replace(/\s+/g, ' ');

  result = result.split(' ').filter(item => item !== blank).length;

  return result;
}

/**
 * 
 * @param {String} string 
 * @returns {Array} objects: Counting, unique words.
 * {word: "someWord", counter: 0}
 */
function stringUniqueWordCount(string) {
  let blank = '';
  let result = "";
  let wordListObj = {};
  let output = [];

  result = string.replace(/\p{Po}/gu, ' ');

  result = result.toLowerCase().split(' ').filter(item => item !== blank);

  for (let item of result) {
    if (wordListObj[item] === undefined) {
      wordListObj[item] = 1;
    } else {
      wordListObj[item]++;
    }
  }

  for (let item in wordListObj) {
    if (wordListObj.hasOwnProperty(item)) {
      output.push({
        'word': item,
        'counter':  wordListObj[item]
      })
    }
  }
  output.sort((a, b) => b.counter - a.counter);

  return output;
}

export {stringHumanReadableForm, stringCleanUp, stringWordCount, stringUniqueWordCount};