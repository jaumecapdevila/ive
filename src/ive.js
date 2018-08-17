import { focusHandler } from './handler/focus';
import { keyDownHandler } from './handler/keyDown';
import { modeBar, getOption } from './util';

const textAreas = Array.from(document.getElementsByTagName('textarea'));

if (textAreas.length > 0) {
  textAreas.forEach(function(target) {
    target.addEventListener('focus', focusHandler);
    target.addEventListener('keydown', keyDownHandler);
  });
  getOption('bar').then(result => {
    if (result.bar) {
      document.body.insertAdjacentHTML('afterbegin', modeBar);
    }
  });
}
