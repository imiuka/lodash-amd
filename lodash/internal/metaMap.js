define("lodash/internal/metaMap", ["lodash/internal/getNative", "lodash/internal/root"], function(getNative, root) {
  /** Native method references. */
  var WeakMap = getNative(root, 'WeakMap');

  /** Used to store function metadata. */
  var metaMap = WeakMap && new WeakMap;

  return metaMap;
});
