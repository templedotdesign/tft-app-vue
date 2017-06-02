<template>
  <div>
    <i v-if='showingFavorites' class="fa fa-heart" aria-hidden="true" @click='toggleFavorites()'></i>
    <i v-else class="fa fa-heart-o" aria-hidden="true" @click='toggleFavorites()'></i>
  </div>
</template>

<script>
  export default {
    name:'favoritesTool',
    data() {
      return {
        showingFavorites: false
      }
    },
    methods: {
      toggleFavorites() {
        let favorites = []
        this.showingFavorites = !this.showingFavorites
        if(this.showingFavorites) {
          const ids = this.$store.getters.favorites
          if(ids.length > 0) {
            const suppliers = this.$store.getters.suppliers
            favorites = suppliers.filter((supplier) => {
              return ids.includes(supplier.supplierID)
            })
            console.log(favorites)

            this.$store.dispatch('changeVisibleSuppliers', favorites)
          }
        } else {
          this.$store.dispatch('changeVisibleSuppliers', this.$store.getters.suppliers)
        }
      }
    }
  }
</script>
<style scoped>
  div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  i {
    font-size: 2.5rem;
    transition: .33s;
  }
  i:hover {
    color: #CF5300;
  }
</style>
