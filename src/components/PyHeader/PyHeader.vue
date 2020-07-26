<template src="./PyHeader.html"></template>
<style src="./PyHeader.css" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PyHeader extends Vue {
  public readonly rootI18nKey = 'COMMONS.HEADER';
}
</script>
