<template>
  <div>
    <input v-model='query' type='text' placeholder='enter a name or tag...'/>
    <i @click='search()' class="fa fa-search" aria-hidden="true"></i>
    <i class="fa fa-ban" aria-hidden="true"></i>
    <p v-text='query'></p>
  </div>
</template>

<script>
  export default {
    name:'searchTool',
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        const currentView = this.$store.getters.currentHeading
        switch(currentView) {
          case 'Resources':
            const resources = this.$store.getters.resources
            const filteredResources = resources.filter((resource) => {
              return resource.name.toLowerCase().includes(this.query)
            })
            console.log(filteredResources)
            break;
          case 'Suppliers':
          const suppliers = this.$store.getters.suppliers
          const filteredSuppliers = suppliers.filter((supplier) => {
            return supplier.name.toLowerCase().includes(this.query)
          })
          console.log(filteredSuppliers)
          break;
          case 'Learning':
          const learningResources = this.$store.getters.learningResources
          const filteredLearningResources = learningResources.filter((resource) => {
            return resource.name.toLowerCase().includes(this.query)
          })
          console.log(filteredLearningResources)
          break;
          case 'Users':
          const users = this.$store.getters.users
          const filteredUsers = users.filter((user) => {
            return user.name.toLowerCase().includes(this.query)
          })
          console.log(filteredUsers)
          break;
          default:
          break;
        }
      }
    }
  }
</script>

<style>

</style>
