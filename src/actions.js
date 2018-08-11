export const ddAction = function(keyBuffer, copyBuffer) {
  if (!keyBuffer.has('d')) {
    keyBuffer.push('d');
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    this.value = '';
    copyBuffer.copy(lines[0]);
    return;
  }

  const currentLine = getCurrentLine(content, position);

  const lineID = currentLine - 1;

  copyBuffer.copy(lines[lineID]);

  lines.splice(lineID, 1);

  this.value = lines.join('\n');

  keyBuffer.clear();
};

export const yyAction = function(keyBuffer, copyBuffer) {
  if (!keyBuffer.has('y')) {
    keyBuffer.push('y');
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
    return;
  }
  this.selectionStart = 0;
  this.selectionEnd = 0;
  keyBuffer.clear();
};

export const GAction = function() {
  const content = this.value;
  this.selectionStart = content.length;
  this.selectionEnd = content.length;
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

  if (content === '') {
    this.value = copyBuffer.paste();
    return;
  }

  const currentLine = getCurrentLine(content, position);

  lines.splice(currentLine, 0, copyBuffer.paste());
  this.value = lines.join('\n');
};

export const endOfWordAction = function() {
  const position = this.selectionStart,
    offset = 1,
    content = this.value.trim();

  if (content === '' || position === content.length) {
    return;
  }

  const firstIndex = position + offset;

  for (let i = firstIndex; i <= content.length; i++) {
    const regex = /\s/,
      character = content.charAt(i);

    if (i === firstIndex && regex.test(character)) {
      let newIndex = i + 1;
      while (regex.test(content.charAt(newIndex))) {
        newIndex++;
      }
      this.selectionStart = newIndex;
      this.selectionEnd = newIndex;
      break;
    }

    if (regex.test(character)) {
      this.selectionStart = i;
      this.selectionEnd = i;
      break;
    }

    if (i === content.length) {
      this.selectionStart = content.length;
      this.selectionEnd = content.length;
      break;
    }
  }
};

export const beginningOfWordAction = function() {
  const position = this.selectionStart,
    offset = 2,
    content = this.value.trim();

  if (content === '' || position === 0) {
    return;
  }
  const firstIndex = position - offset;
  for (let i = firstIndex; i >= 0; i--) {
    const regex = /\s/,
      character = content.charAt(i);

    if (i === firstIndex && regex.test(character)) {
      let newIndex = i - 1;
      while (regex.test(content.charAt(newIndex))) {
        newIndex--;
      }
      this.selectionStart = newIndex + 1;
      this.selectionEnd = newIndex + 1;
      break;
    }

    if (regex.test(character)) {
      this.selectionStart = i + 1;
      this.selectionEnd = i + 1;
      break;
    }

    if (i === 0) {
      this.selectionStart = 0;
      this.selectionEnd = 0;
      break;
    }
  }
};
/**
 * @param {String} content
 * @param {String} position
 * @returns {Number}
 */
function getCurrentLine(content, position) {
  return content.slice(0, position).split('\n').length;
}
