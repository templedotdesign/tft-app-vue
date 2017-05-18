<template>
    <div>
      <input v-model='newName' type='text' :value='name'/>
      <input v-model='newAddress'type='text' :value='address'/>
      <input v-model='newContactsName' type='text' :value='contactsName'/>
      <input v-model='newContactsDetails' type='text' :value='contactsDetails'/>
      <input v-model='newLoginID' type='text' :value='loginID'/>
      <input v-model='newLoginPassword' type='text' :value='loginPassword'/>
      <input v-model='newTags' type='text' :value='tagsString'/>
      <input v-model='newDescription' type='text' :value='description'/>
      <input v-model='newConsortiumString' type='text' :value='consortiumString'/>
      <button @click='addSupplierToDatabase()'>Submit</button>
    </div>
</template>

<script>
  import { writeData } from '../../utils/firebaseUtility'

  export default {
    name: 'editSupplierForm',
    data() {
      return {
        newName: '',
        newAddress: '',
        newContactsName: '',
        newContactsDetails: '',
        newLoginID: '',
        newLoginPassword: '',
        newTags: '',
        newDescription: '',
        newConsortiumString: ''
      }
    },
    methods: {
      addSupplierToDatabase() {
        this.handleNewSupplier()
        this.resetForm()
        this.$store.dispatch('changeToolsVisible', false)
        this.$store.dispatch('changeDetailsView', false)
        this.$store.dispatch('changeSuppliersView', true)
      },
      handleNewSupplier() {
        let supplier = {}
        const tagsArray = this.newTags.split(',')
        supplier.consortium = this.newConsortiumString == 'y'
        supplier.name = this.newName
        supplier.address = this.newAddress
        supplier.contactsName = this.newContactsName
        supplier.contactsDetails = this.newContactsDetails
        supplier.loginID = this.newLoginID
        supplier.loginPassword = this.loginPassword
        supplier.tags = this.tagsArray
        supplier.description = this.description
        writeData('suppliers/', this.$store.getters.selectedSupplier.supplierID, supplier)
      },
      resetForm() {
        this.$data.newName = ''
        this.$data.newAddress = ''
        this.$data.newContactsName = ''
        this.$data.newContactsDetails = ''
        this.$data.newLoginID = ''
        this.$data.newLoginPassword = ''
        this.$data.newTags = ''
        this.$data.newDescription = ''
        this.$data.newConsortiumString = ''
      }
    },
    computed: {
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      name() {
        return this.$store.getters.selectedSupplier.name
      },
      address() {
        return this.$store.getters.selectedSupplier.address
      },
      contactsName() {
        return this.$store.getters.selectedSupplier.contactsName
      },
      contactsDetails() {
        return this.$store.getters.selectedSupplier.contactsDetails
      },
      loginID() {
        return this.$store.getters.selectedSupplier.loginID
      },
      loginPassword() {
        return this.$store.getters.selectedSupplier.loginPassword
      },
      description() {
        return this.$store.getters.selectedSupplier.description
      },
      tags() {
        return this.$store.getters.selectedSupplier.tags
      },
      tagsString() {
        return this.$store.getters.selectedSupplier.tags.join(',')
      },
      consortium() {
        return this.$store.getters.selectedSupplier.consortium
      },
      consortiumString() {
        if(this.$store.getters.selectedSupplier.consortium) {
          return 'y'
        } else {
          return 'n'
        }
      },
    }
  }
</script>

<style><style>
