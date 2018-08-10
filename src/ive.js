import {focusHandler} from './handler/focus';
import {keyDownHandler} from './handler/keyDown';

export const init = function() {
  const textAreas = Array.from(document.getElementsByTagName('textarea'));

  if (textAreas.length === 0) {
    return;
  }

  listeners(textAreas);
};

function listeners(targets) {
  targets.forEach(function(target) {
    target.addEventListener('focus', focusHandler);
  });
  targets.forEach(function(target) {
    target.addEventListener('keydown', keyDownHandler);
  });
}
