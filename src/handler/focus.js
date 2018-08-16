import { toMode } from '../util';

export const focusHandler = function() {
  this.classList.add('disabled');
  toMode('NORMAL');
};
