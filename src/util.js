/**
 * @param {String} option
 * @returns {Promise}
 */
export function getOption(option) {
  return browser.storage.local.get(option);
}
