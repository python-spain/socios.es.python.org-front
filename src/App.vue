<template src="./App.html"></template>
<style src="./App.css"></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import PyHeader from '@/components/PyHeader/PyHeader.vue'

@Component({
  components: {
    PyHeader
  }
})
export default class App extends Vue {}
</script>
