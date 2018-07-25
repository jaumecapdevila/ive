export const focusHandler = function() {
  this.setAttribute('readonly', true);
};

export const keydownHandler = function(event) {
  const key = event.key;
  switch (key) {
    case 'Escape':
      this.setAttribute('readonly', true);
      break;
    case 'i':
      if (this.hasAttribute('readonly')) {
        this.removeAttribute('readonly');
        event.preventDefault();
        return;
      }
      break;
    default:
      return;
  }
};
