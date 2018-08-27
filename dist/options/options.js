function saveOptions(event) {
  event.preventDefault();
  browser.storage.local.set({
    bar: document.getElementById('status-bar').checked,
    position: document.getElementById('bar-position').value,
  });
}

function restoreOptions() {
  browser.storage.local.get('bar').then(function(result) {
    document.getElementById('status-bar').checked = result.bar;
  });
  browser.storage.local.get('position').then(function(result) {
    document.getElementById('bar-position').value = result.position;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('settings').addEventListener('submit', saveOptions);
