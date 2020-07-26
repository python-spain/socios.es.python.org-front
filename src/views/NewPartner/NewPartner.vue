<template src="./NewPartner.html"></template>
<style src="./NewPartner.css" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { PartnerCreationData } from '@/types/partners'

import newPartnerStore from './NewPartner.store'

@Component
export default class NewPartner extends Vue {
  public readonly rootI18nKey = 'VIEWS.NEW_PARTNER';

  public data: PartnerCreationData = {
    name: '',
    email: '',
    nif: '',
    phone: '',
    banckAccount: '',
    comment: ''
  };

  get isLoading () {
    return newPartnerStore.isLoading
  }
}
</script>
