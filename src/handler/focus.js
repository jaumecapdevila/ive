import { toMode, show } from '../bar';

export const focusHandler = function() {
  this.classList.add('disabled');
  show();
  toMode('NORMAL');
};
