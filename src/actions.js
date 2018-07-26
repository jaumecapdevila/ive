export const ddAction = function(buffer) {
  if (!buffer.has('d')) {
    buffer.push('d');
    event.preventDefault();
    setTimeout(() => {
      buffer.clear();
    }, 1000);
    return;
  }
  const position = this.selectionStart;
  const content = this.value.trim();
  const lines = content.split('\n');

  if (lines.length === 1) {
    this.value = '';
  }

  const currentLine = content
    .slice(0, position)
    .split('\n').length;

  const filtered = lines.filter((line, index) => (index + 1) !== currentLine);

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
  const position = this.selectionStart;
  const content = this.value.trim();
  const lines = content.split('\n');

  const currentLine = content
    .slice(0, position)
    .split('\n').length;

  const updatedContent = [];

  lines.forEach((line, number) => {
    updatedContent.push(line);
    if ((number + 1) === currentLine) {
      updatedContent.push(line);
    }
  });

  this.value = updatedContent.join('\n');
  buffer.clear();
};
