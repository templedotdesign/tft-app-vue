<template>
  <div>
    <p v-text='name'></p>
  </div>
</template>

<script>
  export default {
    name: 'supplierDetails',
    computed: {
      name() {
        return this.$store.getters.selectedSupplier.name
      }
    }
  }
</script>

<style scoped>
  div {
    margin-top: 5rem;
  }
</style>
