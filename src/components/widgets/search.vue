<template>
  <div>
    <input v-model='query' type='text' placeholder='enter a name or tag...'/>
    <i @click='search()' class="fa fa-search" aria-hidden="true"></i>
    <i @click='turnOffFilter()' class="fa fa-ban" aria-hidden="true"></i>
    <p v-text='query'></p>
  </div>
</template>

<script>
import _ from 'lodash'
  export default {
    name:'searchTool',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        const allSuppliers = this.$store.getters.suppliers
        let filteredSuppliers = []
        if(this.query == '') {
          this.$store.dispatch('changeVisibleSuppliers', this.$store.getters.suppliers)
        } else {
          filteredSuppliers = allSuppliers.filter((supplier) => {
            const tagsArray = Object.values(supplier.tags)
            if(supplier.name.toLowerCase().search(this.query.toLowerCase()) > - 1 || tagsArray.includes(this.query.toLowerCase())) {
              return supplier
            }
          })
          if(filteredSuppliers.length > 0) {
              this.$store.dispatch('changeVisibleSuppliers', filteredSuppliers)
          }
        }
      },
      turnOffFilter() {
        this.query = ''
        this.$store.dispatch('changeVisibleSuppliers', this.$store.getters.suppliers)
      }
    }
  }
</script>

<style>

</style>
