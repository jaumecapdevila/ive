import {KeyBuffer} from './buffer/key';
import {CopyBuffer} from './buffer/copy';
import {
  ddAction,
  yyAction,
  ggAction,
  toLineStartAction,
  toLineEndAction,
  toLineEndWithEditAction,
  newLineWithEditAction,
  pasteAction,
} from './actions';

const keyBuffer = new KeyBuffer();
const copyBuffer = new CopyBuffer();

export const focusHandler = function() {
  this.classList.add('disabled');
};

export const keydownHandler = function(event) {
  const navigationKeys = [
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'ArrowLeft',
  ];

  const key = event.key;

  const isDisabled = this.classList.contains('disabled');

  if (isDisabled && navigationKeys.indexOf(key) === -1) {
    event.preventDefault();
  }

  switch (key) {
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
        ddAction.apply(this, [keyBuffer, copyBuffer]);
      }
      break;
    case 'y':
      if (isDisabled) {
        yyAction.apply(this, [keyBuffer, copyBuffer]);
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
    case 'p':
      if (isDisabled) {
        pasteAction.apply(this, [copyBuffer]);
      }
      break;
    default:
      return;
  }
};
