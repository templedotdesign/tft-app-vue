<template>
  <div id='suppliersVue'>
    <div v-show='toolsVisible'>
      <adminToolsVue></adminToolsVue>
      <newSupplierForm v-show='addMode'></newSupplierForm>
    </div>
    <ul>
      <li v-for='supplier in suppliers'>
        <p v-text='supplier.name'></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import adminToolsVue  from '../widgets/adminTools'
  import newSupplierForm from '../forms/newSupplier'

  export default {
    name: 'suppliersVue',
    components: {
      adminToolsVue,
      newSupplierForm
    },
    computed: {
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      addMode() {
        return this.$store.getters.addMode
      },
      suppliers() {
        return this.$store.getters.suppliers
      },
    }
  }
</script>

<style scoped>
  #suppliersVue {
    width: 80%;
    padding-top: 3rem;
    color: #CF5300;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
