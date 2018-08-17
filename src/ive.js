import { focusHandler } from './handler/focus';
import { keyDownHandler } from './handler/keyDown';
import { modeBar } from './util';

const textAreas = Array.from(document.getElementsByTagName('textarea'));

if (textAreas.length > 0) {
  textAreas.forEach(function(target) {
    target.addEventListener('focus', focusHandler);
    target.addEventListener('keydown', keyDownHandler);
  });
  browser.storage.local.get('bar').then(
    function(result) {
      if (result.bar) {
        displayModeBar();
      }
    },
    function() {
      displayModeBar();
    }
  );
}

function displayModeBar() {
  document.body.insertAdjacentHTML('afterbegin', modeBar);
}
