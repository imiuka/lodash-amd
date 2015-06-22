define(["lodash/internal/createCurry"], ["lodash/internal/createWrapper", "lodash/internal/isIterateeCall"], function(createWrapper, isIterateeCall) {
  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Creates a `_.curry` or `_.curryRight` function.
   *
   * @private
   * @param {boolean} flag The curry bit flag.
   * @returns {Function} Returns the new curry function.
   */
  function createCurry(flag) {
    function curryFunc(func, arity, guard) {
      if (guard && isIterateeCall(func, arity, guard)) {
        arity = undefined;
      }
      var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryFunc.placeholder;
      return result;
    }
    return curryFunc;
  }

  return createCurry;
});
