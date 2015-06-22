define("lodash/string/trimLeft", ["lodash/internal/baseToString", "lodash/internal/charsLeftIndex", "lodash/internal/isIterateeCall", "lodash/internal/trimmedLeftIndex"], function(baseToString, charsLeftIndex, isIterateeCall, trimmedLeftIndex) {
  /**
   * Removes leading whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimLeft('  abc  ');
   * // => 'abc  '
   *
   * _.trimLeft('-_-abc-_-', '_-');
   * // => 'abc-_-'
   */
  function trimLeft(string, chars, guard) {
    var value = string;
    string = baseToString(string);
    if (!string) {
      return string;
    }
    if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
      return string.slice(trimmedLeftIndex(string));
    }
    return string.slice(charsLeftIndex(string, (chars + '')));
  }

  return trimLeft;
});
