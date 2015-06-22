define(["lodash/array/takeWhile"], ["lodash/internal/baseCallback", "lodash/internal/baseWhile"], function(baseCallback, baseWhile) {
  /**
   * Creates a slice of `array` with elements taken from the beginning. Elements
   * are taken until `predicate` returns falsey. The predicate is bound to
   * `thisArg` and invoked with three arguments: (value, index, array).
   *
   * If a property name is provided for `predicate` the created `_.property`
   * style callback returns the property value of the given element.
   *
   * If a value is also provided for `thisArg` the created `_.matchesProperty`
   * style callback returns `true` for elements that have a matching property
   * value, else `false`.
   *
   * If an object is provided for `predicate` the created `_.matches` style
   * callback returns `true` for elements that have the properties of the given
   * object, else `false`.
   *
   * @static
   * @memberOf _
   * @category Array
   * @param {Array} array The array to query.
   * @param {Function|Object|string} [predicate=_.identity] The function invoked
   *  per iteration.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.takeWhile([1, 2, 3], function(n) {
   *   return n < 3;
   * });
   * // => [1, 2]
   *
   * var users = [
   *   { 'user': 'barney',  'active': false },
   *   { 'user': 'fred',    'active': false},
   *   { 'user': 'pebbles', 'active': true }
   * ];
   *
   * // using the `_.matches` callback shorthand
   * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
   * // => ['barney']
   *
   * // using the `_.matchesProperty` callback shorthand
   * _.pluck(_.takeWhile(users, 'active', false), 'user');
   * // => ['barney', 'fred']
   *
   * // using the `_.property` callback shorthand
   * _.pluck(_.takeWhile(users, 'active'), 'user');
   * // => []
   */
  function takeWhile(array, predicate, thisArg) {
    return (array && array.length)
      ? baseWhile(array, baseCallback(predicate, thisArg, 3))
      : [];
  }

  return takeWhile;
});
