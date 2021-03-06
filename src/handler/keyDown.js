import { KeyBuffer } from '../buffer/key';
import { ActionsRegistry } from '../buffer/actions';
import { CopyBuffer } from '../buffer/copy';
import {
  escapeAction,
  insertAction,
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
  joinLinesAction,
  lineSelectAction,
  yAction,
} from '../actions';

const keyBuffer = new KeyBuffer(),
  copyBuffer = new CopyBuffer(),
  actionsRegistry = new ActionsRegistry();

export const keyDownHandler = function(event) {
  const key = event.key,
    isDisabled = this.classList.contains('disabled'),
    isInSelection = this.selectionStart !== this.selectionEnd;

  if (isDisabled && !isNavigationKey(key)) {
    event.preventDefault();
  }

  switch (key) {
    case 'Escape':
      escapeAction.apply(this);
      break;
    case 'i':
      if (isDisabled) {
        insertAction.apply(this);
        return;
      }
      break;
    case 'd':
      if (!isDisabled) {
        return;
      }
      if (!keyBuffer.has('d')) {
        keyBuffer.push('d');
        return;
      }
      ddAction.apply(this, [copyBuffer]);
      actionsRegistry.record(this, ddAction, [copyBuffer]);
      keyBuffer.clear();
      break;
    case 'y':
      if (!isDisabled) {
        return;
      }
      if (isInSelection) {
        yAction.apply(this, [copyBuffer]);
        return;
      }
      if (!keyBuffer.has('y')) {
        keyBuffer.push('y');
        return;
      }
      yyAction.apply(this, [copyBuffer]);
      actionsRegistry.record(this, yyAction, [copyBuffer]);
      keyBuffer.clear();
      break;
    case 'g':
      if (!isDisabled) {
        return;
      }
      if (!keyBuffer.has('g')) {
        keyBuffer.push('g');
        return;
      }
      ggAction.apply(this);
      keyBuffer.clear();
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
    case 'o':
      if (isDisabled) {
        newLineWithEditAction.apply(this);
      }
      break;
    case 'p':
      if (isDisabled) {
        pasteAction.apply(this, [copyBuffer]);
        actionsRegistry.record(this, pasteAction, [copyBuffer]);
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
    case 'V':
      if (isDisabled) {
        lineSelectAction.apply(this);
      }
      break;
    case '.':
      if (isDisabled) {
        actionsRegistry.replyLast();
      }
      break;
    default:
      return;
  }
};

/**
 * @param {String} key
 * @returns {Boolean}
 */
function isNavigationKey(key) {
  const navigationKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
  return navigationKeys.indexOf(key) !== -1;
}
