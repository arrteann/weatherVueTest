"use strict";

var _interopRequireDefault = require("/opt/vueprojects/weather/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

_vue.default.config.productionTip = false;
new _vue.default({
  render: function render(h) {
    return h(_App.default);
  }
}).$mount('#app');