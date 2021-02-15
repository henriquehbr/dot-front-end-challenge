import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js'
import App from './build/App.js'

const $ = document.querySelector.bind(document)

export default new Vue({
  el: $('main'),
  components: {
    hello: App
  }
})
