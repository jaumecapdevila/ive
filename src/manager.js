import { focusHandler } from './handlers';

export const init = function () {
  const textAreas = targets();
  if (textAreas.length === 0) {
    return;
  }
  listeners(textAreas);
};

export const targets = () => Array.from(
  document.getElementsByTagName('textarea')
);


function listeners(targets) {
  targets.forEach(function(target){
    target.addEventListener('focus', focusHandler);
  });
}
