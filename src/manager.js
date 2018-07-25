import targets from './util';

const init = function () {
  targets.forEach(target => {
    target.addEventListener('focus', function(){
      this.value = "Focused";
    });
  });
};

export default { init };
