<template>
  <div>
    <input type='text' placeholder='Name: ' v-model='name'/>
    <input type = 'text' placeholder='URL: ' v-model='address'/>
    <button @click='addResourceToDatabase()'>Submit</button>
  </div>
</template>

<script>
  import { writeData } from '../../utils/firebaseUtility'

  export default {
    name:'newResourceForm',
    data() {
      return {
        name: '',
        address: ''
      }
    },
    methods: {
      addResourceToDatabase() {
        this.handleNewResorce()
        this.resetForm()
      },
      handleNewResorce() {
        let resource = {}
        resource.name = this.name
        resource.address = this.address
        if(this.$store.getters.resourcesView) {
          writeData('resources/', Date.now(), resource)
        } else if (this.$store.getters.learningView) {
          writeData('learningResources/', Date.now(), resource)
        }
      },
      resetForm() {
        this.$data.name = ''
        this.$data.address = ''
      }
    }
  }
</script>

<style></style>
