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

  let acumPosition = 0;

  const cleaned = lines.map(line => {
    let oldPosition = acumPosition;
    acumPosition += line.length;
    if (position > oldPosition && position <= acumPosition) {
      return '';
    }
    return line;
  });

  this.value = cleaned.join('\n');
  buffer.clear();
};
