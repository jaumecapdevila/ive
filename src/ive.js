import { focusHandler } from './handler/focus';
import { blurHandler } from './handler/blur';
import { keyDownHandler } from './handler/keyDown';
import { getOption } from './util';
import { modeBar } from './bar';

const textAreas = Array.from(document.getElementsByTagName('textarea'));

if (textAreas.length > 0) {
  textAreas.forEach(function(target) {
    target.addEventListener('focus', focusHandler);
    target.addEventListener('blur', blurHandler);
    target.addEventListener('keydown', keyDownHandler);
  });
  getOption('bar').then(result => {
    if (result.bar) {
      document.body.insertAdjacentHTML('afterbegin', modeBar);
    }
  });
  getOption('position').then(result => {
    document.getElementById('mode-bar').classList.add(`is-${result.position}`);
  });
}
