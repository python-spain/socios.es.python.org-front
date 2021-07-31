<template src="./NewPartner.html"></template>
<style src="./NewPartner.css" scoped></style>

<script>
import api from '../../services/api'


export default {
  name: "NewPartner",
  data: () => ({
    form: {
      name: '',
      email: '',
      nif: '',
      identityDoc: null,
      phone: '',
      bankAccount: '',
      firstPaymentDoc: null,
      comment: ''
    },
    isLoading: false
  }),
  methods: {
    handleIdentityDoc(event) {
      this.form.identityDoc = event.target.files[0]
    },

    handleFirstPaymentDoc(event) {
      this.form.firstPaymentDoc = event.target.files[0]
    },

    async handleSubmit () {
      this.isLoading = true

      const formData = new FormData()
      formData.append("name", this.form.name)
      formData.append("email", this.form.email)
      formData.append("nif", this.form.nif)
      formData.append("identityDoc", this.form.identityDoc)
      formData.append("phone", this.form.phone)
      formData.append("bankAccount", this.form.bankAccount)
      formData.append("firstPaymentDoc", this.form.firstPaymentDoc)
      formData.append("comment", this.form.comment)

      await api.partners.create(formData)

      this.isLoading = false
    }
  }
}
</script>
