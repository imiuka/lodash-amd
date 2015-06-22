define("lodash/array/without", ["lodash/internal/baseDifference", "lodash/internal/isArrayLike", "lodash/function/restParam"], function(baseDifference, isArrayLike, restParam) {
  /**
   * Creates an array excluding all provided values using
   * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to filter.
   * @param {...*} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.without([1, 2, 1, 3], 1, 2);
   * // => [3]
   */
  var without = restParam(function(array, values) {
    return isArrayLike(array)
      ? baseDifference(array, values)
      : [];
  });

  return without;
});
