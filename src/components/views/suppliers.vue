<template>
  <div id='suppliers'>
    <Frame/>
    <div v-show='toolsVisible'>
      <adminToolsVue></adminToolsVue>
      <newSupplierForm v-show='addMode'></newSupplierForm>
    </div>
    <ul>
      <li v-for='(supplier, index) in suppliers'>
        <supplierCard :name='supplier.name' :index='index'></supplierCard>
      </li>
    </ul>
    <ul v-show='adminMode'>
      <li v-for='tag in tags'>
        {{tag}}
      </li>

    </ul>
  </div>
</template>

<script>
  import Frame from '../widgets/frame'
  import adminToolsVue  from '../widgets/adminTools'
  import supplierCard from '../widgets/supplierCard'
  import newSupplierForm from '../forms/newSupplier'

  export default {
    name: 'suppliersVue',
    components: {
      Frame,
      adminToolsVue,
      supplierCard,
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
      visibleSuppliers() {
        return this.$store.getters.visibleSuppliers
      },
      tags() {
        return this.$store.getters.allTags
      },
      adminMode() {
        return this.$store.getters.adminMode
      }
    }
  }
</script>

<style scoped>
  #suppliers {
    padding: 3.5rem 0;
    color: #CF5300;
    /*height: calc(100vh - 4.5rem);*/
    width: 80%;

    display: flex;
    flex-direction: column;
  }

  ul {
    list-style-type: none;
    width: 100%;
    /*height: calc(100vh - 4.5rem);*/

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  li {
    display: flex;
    flex-basis: calc(20% - 10px);
    margin: 5px 0;
  }
</style>
