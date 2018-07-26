import { KeyBuffer } from './buffer';
import { ddAction } from './actions';

const keyBuffer = new KeyBuffer();

export const focusHandler = function() {
  this.setAttribute('readonly', true);
};

export const keydownHandler = function(event) {
  switch (event.key) {
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
      ddAction.apply(this, [keyBuffer]);
      break;
    default:
      return;
  }
};
