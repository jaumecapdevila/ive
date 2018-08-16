export const modeBar = `<div id="mode-bar">
  <p>Mode: NORMAL</p>
</div>`;

/**
 * @param {String} mode
 */
export function toMode(mode) {
  const modeBar = document.getElementById('mode-bar');

  if (!modeBar) {
    return;
  }

  modeBar.innerHTML = `<p>Mode: ${mode}</p>`;
}
