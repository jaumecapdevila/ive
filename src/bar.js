export const modeBar = `<div id="mode-bar">
  <p>Mode: NORMAL</p>
</div>`;

/**
 * @param {String} mode
 */
export function toMode(mode) {
  const bar = document.getElementById('mode-bar');
  if (!bar) {
    return;
  }
  bar.innerHTML = `<p>Mode: ${mode}</p>`;
}

export function show() {
  const bar = document.getElementById('mode-bar');
  if (!bar) {
    return;
  }
  bar.classList.remove('is-hidden');
}

export function hide() {
  const bar = document.getElementById('mode-bar');
  if (!bar) {
    return;
  }
  bar.classList.add('is-hidden');
}
