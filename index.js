module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kibana-field-formatters',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      visTypes: [
        'plugins/kibana-field-formatters/dictionary-lookup',
      ]
    },
  });
};
