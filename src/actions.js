export const ddAction = function(keyBuffer) {
  if (!keyBuffer.has('d')) {
    keyBuffer.push('d');
    setTimeout(() => {
      keyBuffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    this.value = '';
  }

  const currentLine = getCurrentLine(content, position);

  const filtered = lines.filter((line, index) => index + 1 !== currentLine);

  this.value = filtered.join('\n');
  keyBuffer.clear();
};

export const yyAction = function(keyBuffer, copyBuffer) {
  if (!keyBuffer.has('y')) {
    keyBuffer.push('y');
    setTimeout(() => {
      keyBuffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  const currentLine = getCurrentLine(content, position);
  copyBuffer.copy(lines[currentLine - 1]);

  keyBuffer.clear();
};

export const ggAction = function(keyBuffer) {
  if (!keyBuffer.has('g')) {
    keyBuffer.push('g');
    setTimeout(() => {
      keyBuffer.clear();
    }, 1000);
    return;
  }
  this.selectionStart = 0;
  this.selectionEnd = 0;
  keyBuffer.clear();
};

export const toLineStartAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    this.selectionStart = 0;
    this.selectionEnd = 0;
    return;
  }

  const currentLine = getCurrentLine(content, position);

  let lineEnd = 0;

  const offset = currentLine - 1;

  for (let i = 0; i < offset; i++) {
    lineEnd += lines[i].length;
  }

  this.selectionStart = lineEnd + offset;
  this.selectionEnd = lineEnd + offset;
};

export const toLineEndAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    characters = content.length,
    lines = content.split('\n');

  if (lines.length === 1) {
    this.selectionStart = characters;
    this.selectionEnd = characters;
    return;
  }

  const currentLine = getCurrentLine(content, position);

  let lineEnd = 0;

  const offset = currentLine - 1;

  for (let i = 0; i <= offset; i++) {
    lineEnd += lines[i].length;
  }

  this.selectionStart = lineEnd + offset;
  this.selectionEnd = lineEnd + offset;
};

export const toLineEndWithEditAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    characters = content.length,
    lines = content.split('\n');

  if (lines.length === 1) {
    this.selectionStart = characters;
    this.selectionEnd = characters;
    this.classList.remove('disabled');
    return;
  }

  const currentLine = getCurrentLine(content, position);

  let lineEnd = 0;

  const offset = currentLine - 1;

  for (let i = 0; i <= offset; i++) {
    lineEnd += lines[i].length;
  }

  this.selectionStart = lineEnd + offset;
  this.selectionEnd = lineEnd + offset;
  this.classList.remove('disabled');
};

export const newLineWithEditAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    lines.push('');
    this.value = lines.join('\n');
    this.classList.remove('disabled');
    return;
  }

  const currentLine = getCurrentLine(content, position);

  let lineEnd = 0;

  lines.splice(currentLine, 0, '');

  for (let i = 0; i <= currentLine; i++) {
    lineEnd += lines[i].length;
  }

  this.value = lines.join('\n');
  this.selectionStart = lineEnd + currentLine;
  this.selectionEnd = lineEnd + currentLine;
  this.classList.remove('disabled');
};

export const pasteAction = function(copyBuffer) {
  if (copyBuffer.empty()) {
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  const currentLine = getCurrentLine(content, position);

  lines.splice(currentLine, 0, copyBuffer.paste());
  this.value = lines.join('\n');
};

/**
 * @param {String} content
 * @param {String} position
 * @returns {Number}
 */
function getCurrentLine(content, position) {
  return content.slice(0, position).split('\n').length;
}
