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
