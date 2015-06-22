define("lodash/math/round", ["lodash/internal/createRound"], function(createRound) {
  /**
   * Calculates `n` rounded to `precision`.
   *
   * @static
   * @memberOf _
   * @category Math
   * @param {number} n The number to round.
   * @param {number} [precision=0] The precision to round to.
   * @returns {number} Returns the rounded number.
   * @example
   *
   * _.round(4.006);
   * // => 4
   *
   * _.round(4.006, 2);
   * // => 4.01
   *
   * _.round(4060, -2);
   * // => 4100
   */
  var round = createRound('round');

  return round;
});
