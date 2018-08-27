import { hide } from '../bar';

export const blurHandler = function() {
  if (document.activeElement.tagName.toLowerCase !== 'TEXTAREA') {
    hide();
  }
};
