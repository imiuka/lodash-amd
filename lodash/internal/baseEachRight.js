define(["lodash/internal/baseEachRight"], ["lodash/internal/baseForOwnRight", "lodash/internal/createBaseEach"], function(baseForOwnRight, createBaseEach) {
  /**
   * The base implementation of `_.forEachRight` without support for callback
   * shorthands and `this` binding.
   *
   * @private
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object|string} Returns `collection`.
   */
  var baseEachRight = createBaseEach(baseForOwnRight, true);

  return baseEachRight;
});
