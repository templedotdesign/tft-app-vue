<template>
  <div>
    <input v-model='query' type='text' placeholder='enter a name or tag...'/>
    <i @click='search()' class="fa fa-search" aria-hidden="true"></i>
    <i @click='turnOffFilter()' class="fa fa-ban" aria-hidden="true"></i>
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

<style scoped>
  div {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  input {
    outline: none;
    border: none;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    font-size: .8rem;
    color: white;
    background-color: transparent;
    border-bottom: 1px solid white;
  }
  input::placeholder {
    color: white;
  }

  i {
    transition: .33s;
  }

  i:hover {
    color: #CF5300;
  }
</style>
