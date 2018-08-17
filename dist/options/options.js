function saveOptions(event) {
  event.preventDefault();
  browser.storage.local.set({
    bar: document.getElementById('status-bar').checked,
  });
}

function restoreOptions() {
  var getting = browser.storage.local.get('bar');
  getting.then(
    function(result) {
      document.getElementById('status-bar').checked = result.bar;
    },
    function() {
      // TODO notificate the error
    }
  );
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('settings').addEventListener('submit', saveOptions);
