import { toMode } from './bar';

export const escapeAction = function() {
  this.classList.add('disabled');
  toMode('NORMAL');
};

export const insertAction = function() {
  this.classList.remove('disabled');
  toMode('INSERT');
};

export const ddAction = function(copyBuffer) {
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (lines.length === 1) {
    this.value = '';
    copyBuffer.copy(lines[0]);
    return;
  }

  const currentLine = getCurrentLine(content, position),
    lineID = currentLine - 1;

  copyBuffer.copy(lines[lineID]);
  lines.splice(lineID, 1);
  this.value = lines.join('\n');
};

export const yyAction = function(buffer) {
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n'),
    currentLine = getCurrentLine(content, position);

  buffer.copy(lines[currentLine - 1]);
};

export const ggAction = function() {
  this.selectionStart = 0;
  this.selectionEnd = 0;
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

  const currentLine = getCurrentLine(content, position),
    offset = currentLine - 1;
  let lineEnd = 0;

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

  const currentLine = getCurrentLine(content, position),
    offset = currentLine - 1;

  let lineEnd = 0;

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

  const currentLine = getCurrentLine(content, position),
    offset = currentLine - 1;

  let lineEnd = 0;

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
    const newContent = lines.join('\n'),
      characters = newContent.length;
    this.value = newContent;
    this.selectionStart = characters;
    this.selectionEnd = characters;
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

export const pasteAction = function(buffer) {
  if (buffer.empty()) {
    return;
  }

  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  if (content === '') {
    this.value = buffer.paste();
    return;
  }

  const currentLine = getCurrentLine(content, position);

  lines.splice(currentLine, 0, buffer.paste());
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

export const joinLinesAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    offset = 1,
    lines = content.split('\n'),
    numberOfLines = lines.length;

  if (numberOfLines <= 1) {
    return;
  }

  const currentLine = getCurrentLine(content, position),
    currentLineIndex = currentLine - offset;

  if (currentLine === numberOfLines) {
    return;
  }

  const joinedLine = `${lines[currentLineIndex]} ${lines[currentLine]}`;

  lines[currentLineIndex] = joinedLine;
  lines.splice(currentLine, 1);

  this.value = lines.join('\n');
};

export const lineSelectAction = function() {
  const position = this.selectionStart,
    content = this.value.trim(),
    offset = 1,
    lines = content.split('\n');

  if (lines.length === 1) {
    this.selectionStart = 0;
    this.selectionEnd = content.length;
    return;
  }

  const currentLine = getCurrentLine(content, position);

  let start = 0;

  for (let i = 0; i < lines.length; i++) {
    if (i < currentLine - 1) {
      start += lines[i].length;
    }
    if (i === currentLine - 1) {
      start += currentLine * offset - 1;
      this.selectionStart = start;
      this.selectionEnd = start + lines[i].length;
      break;
    }
  }
};

export const yAction = function(copyBuffer) {
  const content = this.value,
    difference = this.selectionEnd - this.selectionStart,
    selection = content.substr(this.selectionStart, difference);

  this.selectionEnd = this.selectionStart;
  copyBuffer.copy(selection);
};

/**
 * @param {String} content
 * @param {String} position
 * @returns {Number}
 */
function getCurrentLine(content, position) {
  return content.slice(0, position).split('\n').length;
}
