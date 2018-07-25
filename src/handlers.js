import { KeyBuffer } from './buffer';

const keyBuffer = new KeyBuffer();

export const focusHandler = function() {
  this.setAttribute('readonly', true);
};

export const keydownHandler = function(event, ) {
  const key = event.key;
  switch (key) {
    case 'Escape':
      this.setAttribute('readonly', true);
      break;
    case 'i':
      if (this.hasAttribute('readonly')) {
        this.removeAttribute('readonly');
        event.preventDefault();
        return;
      }
      break;
    case 'd':
      if (!this.hasAttribute('readonly')) {
        return;
      }
      if (!keyBuffer.has('d')) {
        keyBuffer.push('d');
        event.preventDefault();
        setTimeout(() => {
          keyBuffer.clear();
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

      const cleaned = lines.map((line) => {
        let oldPosition = acumPosition;
        acumPosition += line.length;
        if (position > oldPosition && position <= acumPosition) {
          return '';
        }
        return line;
      });

      this.value = cleaned.join('\n');
      keyBuffer.clear();
      break;
    default:
      return;
  }
};
