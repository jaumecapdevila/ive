export const ddAction = function(buffer) {
  if (!buffer.has('d')) {
    buffer.push('d');
    event.preventDefault();
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

  const currentLine = content.slice(0, position).split('\n').length;

  const filtered = lines.filter((line, index) => index + 1 !== currentLine);

  this.value = filtered.join('\n');
  buffer.clear();
};

export const yyAction = function(buffer) {
  if (!buffer.has('y')) {
    buffer.push('y');
    event.preventDefault();
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart,
    content = this.value.trim(),
    lines = content.split('\n');

  const currentLine = content.slice(0, position).split('\n').length;

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

  const currentLine = content.slice(0, position).split('\n').length;

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

  const currentLine = content.slice(0, position).split('\n').length;

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

  const currentLine = content.slice(0, position).split('\n').length;

  let lineEnd = 0;

  const offset = currentLine - 1;

  for (let i = 0; i <= offset; i++) {
    lineEnd += lines[i].length;
  }

  this.selectionStart = lineEnd + offset;
  this.selectionEnd = lineEnd + offset;
  this.classList.remove('disabled');
};
