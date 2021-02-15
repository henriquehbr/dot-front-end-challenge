//
//
//
//

import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js';

var __script__ = Vue.component('hello', {
  data() {
    return {
      greeting: 'Hello'
    };
  }
});

var render = function () {
  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;
  return _c('h1', [_vm._v("Hello World!")]);
};
var staticRenderFns = [];
var __template__ = { render: render, staticRenderFns: staticRenderFns };

export default Object.assign({}, __script__, __template__);