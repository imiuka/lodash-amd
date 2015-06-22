define(["lodash/array/xor"], ["lodash/internal/arrayPush", "lodash/internal/baseDifference", "lodash/internal/baseUniq", "lodash/internal/isArrayLike"], function(arrayPush, baseDifference, baseUniq, isArrayLike) {
  /**
   * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the provided arrays.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of values.
   * @example
   *
   * _.xor([1, 2], [4, 2]);
   * // => [1, 4]
   */
  function xor() {
    var index = -1,
        length = arguments.length;

    while (++index < length) {
      var array = arguments[index];
      if (isArrayLike(array)) {
        var result = result
          ? arrayPush(baseDifference(result, array), baseDifference(array, result))
          : array;
      }
    }
    return result ? baseUniq(result) : [];
  }

  return xor;
});
