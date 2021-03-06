define("lodash/internal/createFindKey", ["lodash/internal/baseCallback", "lodash/internal/baseFind"], function(baseCallback, baseFind) {
  /**
   * Creates a `_.findKey` or `_.findLastKey` function.
   *
   * @private
   * @param {Function} objectFunc The function to iterate over an object.
   * @returns {Function} Returns the new find function.
   */
  function createFindKey(objectFunc) {
    return function(object, predicate, thisArg) {
      predicate = baseCallback(predicate, thisArg, 3);
      return baseFind(object, predicate, objectFunc, true);
    };
  }

  return createFindKey;
});
