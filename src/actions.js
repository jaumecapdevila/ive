export const ddAction = function(buffer) {
  if (!buffer.has('d')) {
    buffer.push('d');
    setTimeout(() => {
      buffer.clear();
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
  buffer.clear();
};

export const yyAction = function(buffer) {
  if (!buffer.has('y')) {
    buffer.push('y');
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  const currentLine = getCurrentLine(content, position);

  const updatedContent = [];

  lines.forEach((line, number) => {
    updatedContent.push(line);
    if (number + 1 === currentLine) {
      updatedContent.push(line);
    }
  });

  this.value = updatedContent.join('\n');
  buffer.clear();
};

export const ggAction = function(buffer) {
  if (!buffer.has('g')) {
    buffer.push('g');
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  this.selectionStart = 0;
  this.selectionEnd = 0;
  buffer.clear();
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

/**
 * @param {String} position
 * @param {String} content
 */
function getCurrentLine(position, content) {
  return getCurrentLine(content, position);
}
