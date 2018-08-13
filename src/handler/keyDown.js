import { KeyBuffer } from '../buffer/key';
import { CopyBuffer } from '../buffer/copy';
import {
  ddAction,
  yyAction,
  ggAction,
  GAction,
  toLineStartAction,
  toLineEndAction,
  toLineEndWithEditAction,
  newLineWithEditAction,
  pasteAction,
  endOfWordAction,
  beginningOfWordAction,
  joinLinesAction
} from '../actions';

const keyBuffer = new KeyBuffer();
const copyBuffer = new CopyBuffer();

export const keyDownHandler = function(event) {
  const navigationKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'],
    key = event.key,
    isDisabled = this.classList.contains('disabled');

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
    case 'G':
      if (isDisabled) {
        GAction.apply(this);
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
    case 'e':
      if (isDisabled) {
        endOfWordAction.apply(this);
      }
      break;
    case 'b':
      if (isDisabled) {
        beginningOfWordAction.apply(this);
      }
      break;
    case 'J':
      if (isDisabled) {
        joinLinesAction.apply(this);
      }
      break;
    default:
      return;
  }
};
