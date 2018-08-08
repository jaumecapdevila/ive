export function KeyBuffer() {
  this.keys = [];
}

/**
 * @param {String} key
 */
KeyBuffer.prototype.push = function(key) {
  this.keys.push(key);
  setTimeout(() => {
    this.clear();
  }, 1000);
};

/**
 * @param {String} key
 * @returns {Boolean}
 */
KeyBuffer.prototype.has = function(key) {
  return this.keys.indexOf(key) !== -1;
};

KeyBuffer.prototype.clear = function() {
  this.keys = [];
};
