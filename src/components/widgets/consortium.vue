<template>
  <div>
    <i v-if='showingMembers' class="fa fa-star" aria-hidden="true" @click='toggleMembers()'></i>
    <i v-else class="fa fa-star-o" aria-hidden="true" @click='toggleMembers()'></i>
  </div>
</template>

<script>
  export default {
    name:'membersTool',
    data() {
      return {
        showingMembers: false
      }
    },
    methods: {
      toggleMembers() {
        let members = []
        this.showingMembers = !this.showingMembers
        if(this.showingMembers) {
            const suppliers = this.$store.getters.suppliers
            members = suppliers.filter((supplier) => {
              return supplier.consortium == true
            })
            this.$store.dispatch('changeVisibleSuppliers', members)
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
