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
          filteredSuppliers = allSuppliers.map((supplier) => {
            if(supplier.name.search(this.query) > - 1) {
              return supplier
            }
            supplier.tags.map((tag) => {
              if(tag.search(this.query) > -1) {
                return supplier
              }
            })
          })
          this.filteredSuppliers = filteredSuppliers.map((supplier) => {
            return supplier !== undefined
          })
          console.log(filteredSuppliers)
          if(filteredSuppliers.length > 0) {
              this.$store.dispatch('changeVisibleSuppliers', this.filteredSuppliers)
          }
        }
      },
      turnOffFilter() {
        this.query = ''
      }
    }
  }
</script>

<style>

</style>
