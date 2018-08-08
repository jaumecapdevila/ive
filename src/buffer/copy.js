export function CopyBuffer() {
  this.content = '';
}

/**
 * @param {String} content
 */
CopyBuffer.prototype.copy = function(content) {
  this.content = content;
};

/**
 * @returns {String}
 */
CopyBuffer.prototype.paste = function() {
  return this.content;
};

/**
 * @returns {Boolean}
 */
CopyBuffer.prototype.empty = function() {
  return this.content === '';
};

CopyBuffer.prototype.clear = function() {
  this.content = '';
};
