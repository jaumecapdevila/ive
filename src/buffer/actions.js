export function ActionsRegistry() {
  this.actions = [];
}

/**
 * @param {Object} context
 * @param {Function} action
 * @param {Array} params
 */
ActionsRegistry.prototype.record = function(context, action, params) {
  if (this.actions.length === 3) {
    this.actions = [];
  }
  this.actions.push({
    context,
    action,
    params,
  });
};

ActionsRegistry.prototype.replyLast = function() {
  const lastAction = this.actions[this.actions.length - 1];

  if (lastAction.params === undefined) {
    lastAction.action.apply(lastAction.context);
    return;
  }

  lastAction.action.apply(lastAction.context, lastAction.params);
};
