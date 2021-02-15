<template>
  <h1>Hello World!</h1>
</template>

<script>
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.min.js'

export default Vue.component('hello', {
  data() {
    return {
      greeting: 'Hello'
    }
  }
})
</script>
