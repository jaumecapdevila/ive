import { hide } from '../bar';

export const blurHandler = function() {
  const focused = document.activeElement;
  if (focused.tagName.toLowerCase === 'TEXTAREA') {
    return;
  }
  hide();
};
