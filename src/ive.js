import { focusHandler } from './handler/focus';
import { keyDownHandler } from './handler/keyDown';

const textAreas = Array.from(document.getElementsByTagName('textarea'));

if (textAreas.length > 0) {
  textAreas.forEach(function(target) {
    target.addEventListener('focus', focusHandler);
  });
  textAreas.forEach(function(target) {
    target.addEventListener('keydown', keyDownHandler);
  });
}
