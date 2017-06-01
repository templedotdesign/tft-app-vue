<template>
    <div>
      <input v-model='newName' type='text' placeholder='name'/>
      <input v-model='newAddress'type='text' placeholder='address'/>
      <input v-model='newContactsName' type='text' placeholder='contactsName'/>
      <input v-model='newContactsDetails' type='text' placeholder='contactsDetails'/>
      <input v-model='newLoginID' type='text' placeholder='loginID'/>
      <input v-model='newLoginPassword' type='text' placeholder='loginPassword'/>
      <input v-model='newTags' type='text' placeholder='tags'/>
      <input v-model='newDescription' type='text' placeholder='description'/>
      <input v-model='newConsortiumString' type='text' placeholder='consortium y/n'/>
      <button @click='addSupplierToDatabase()'>Submit</button>
    </div>
</template>

<script>
import _ from 'lodash'
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
        if(this.newConsortiumString != '') {
          supplier.consortium = this.newConsortiumString == 'y'
        } else{
          supplier.consortium = this.consortiumString == 'y'
        }
        if(this.newName != '') {
          supplier.name = this.newName
        } else{
          supplier.name = this.name
        }
        if(this.newAddress != '') {
          supplier.address = this.newAddress
        } else{
          supplier.address = this.address
        }
        if(this.newContactsName != '') {
          supplier.contactsName = this.newContactsName
        } else{
          supplier.contactsName = this.contactsName
        }
        if(this.newContactsDetails != '') {
          supplier.contactsDetails = this.newContactsDetails
        } else{
          supplier.contactsDetails = this.contactsDetails
        }
        if(this.newLoginID != '') {
          supplier.loginID = this.newLoginID
        } else{
          supplier.loginID = this.loginID
        }
        if(this.newLoginPassword != '') {
          supplier.loginPassword = this.newLoginPassword
        } else{
          supplier.loginPassword = this.loginPassword
        }
        if(this.newTags != '') {
          const newArray = this.newTags.split(',')
          supplier.tags = _.union(this.tags, newArray)
        } else{
          supplier.tags = this.tags
        }
        if(this.newDescription != '') {
          supplier.description = this.newDescription
        } else{
          supplier.description = this.description
        }
        writeData('suppliers/', this.$store.getters.selectedSupplier.supplierID, '', '', supplier)
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
