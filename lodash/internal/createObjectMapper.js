define(["lodash/internal/createObjectMapper"], ["lodash/internal/baseCallback", "lodash/internal/baseForOwn"], function(baseCallback, baseForOwn) {
  /**
   * Creates a function for `_.mapKeys` or `_.mapValues`.
   *
   * @private
   * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
   * @returns {Function} Returns the new map function.
   */
  function createObjectMapper(isMapKeys) {
    return function(object, iteratee, thisArg) {
      var result = {};
      iteratee = baseCallback(iteratee, thisArg, 3);

      baseForOwn(object, function(value, key, object) {
        var mapped = iteratee(value, key, object);
        key = isMapKeys ? mapped : key;
        value = isMapKeys ? value : mapped;
        result[key] = value;
      });
      return result;
    };
  }

  return createObjectMapper;
});
