import {KeyBuffer} from './buffer';
import {
  ddAction,
  yyAction,
  ggAction,
  toLineStartAction,
  toLineEndAction,
  toLineEndWithEditAction,
  newLineWithEditAction
} from './actions';

const keyBuffer = new KeyBuffer();

export const focusHandler = function() {
  this.classList.add('disabled');
};

export const keydownHandler = function(event) {
  const isDisabled = this.classList.contains('disabled');

  if (isDisabled) {
    event.preventDefault();
  }

  switch (event.key) {
    case 'Escape':
      this.classList.add('disabled');
      break;
    case 'i':
      if (isDisabled) {
        this.classList.remove('disabled');
        return;
      }
      break;
    case 'd':
      if (isDisabled) {
        ddAction.apply(this, [keyBuffer]);
      }
      break;
    case 'y':
      if (isDisabled) {
        yyAction.apply(this, [keyBuffer]);
      }
      break;
    case 'g':
      if (isDisabled) {
        ggAction.apply(this, [keyBuffer]);
      }
      break;
    case '0':
      if (isDisabled) {
        toLineStartAction.apply(this);
      }
      break;
    case '$':
      if (isDisabled) {
        toLineEndAction.apply(this);
      }
      break;
    case 'A':
      if (isDisabled) {
        toLineEndWithEditAction.apply(this);
      }
      break;
    case 'O':
      if (isDisabled) {
        newLineWithEditAction.apply(this);
      }
      break;
    default:
      return;
  }
};
