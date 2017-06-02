<template>
  <div @click='selectSupplier()'>
    <p v-text='name'></p>
  </div>
</template>

<script>
  export default {
    name:'supplierCard',
    props: [ 'name' ],
    methods: {
      selectSupplier() {
        const suppliers = this.$store.getters.suppliers
        const filteredSuppliers = suppliers.filter(obj => obj.name == this.name)
        const supplier = filteredSuppliers[0]
        this.$store.dispatch('changeSelectedSupplier', supplier)
        this.$store.dispatch('changeDetailsView', true)
        this.$store.dispatch('changeSuppliersView', false)
      }
    }
  }
</script>

<style scoped>
div {
  height: 80px;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #CF5300;
  border-radius: 5px;
  padding: 20px 0;
  transition: .5s;
  text-align: center;
}

div:hover {
  background-color: #3378B8;
  color: white;
  box-shadow: 1px 1px 5px black;
}

p {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
