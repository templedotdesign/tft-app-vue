<template>
    <div>
      <input v-model='supplierName' type='text' placeholder="Name:"/>
      <input v-model='address'type='text' placeholder="URL:"/>
      <input v-model='contactsName' type='text' placeholder="Contact's Name:"/>
      <input v-model='contactsDetails' type='text' placeholder="Contact's Details:"/>
      <input v-model='loginID' type='text' placeholder="Login ID:"/>
      <input v-model='loginPassword' type='text' placeholder="Login Password:"/>
      <input v-model='tags' type='text' placeholder="Tags:"/>
      <input v-model='consortiumString' type='text' placeholder="Consortium y/n:"/>
      <textarea v-model='description' type='text' placeholder="Description:"/>
      <button @click='addSupplierToDatabase()'>Submit</button>
    </div>
</template>

<script>
  import { writeData } from '../../utils/firebaseUtility'

  export default {
    name: 'newSupplierForm',
    data() {
      return {
        supplierName: '',
        address: '',
        contactsName: '',
        contactsDetails: '',
        loginID: '',
        loginPassword: '',
        tags: '',
        description: '',
        consortiumString: ''
      }
    },
    methods: {
      addSupplierToDatabase() {
        const tagsArray = this.tags.split(',')
        const trimmedArray = tagsArray.map((tag) => {
          return tag.trim().toLowerCase()
        })
        this.handleNewSupplier(trimmedArray)
        this.resetForm()
      },
      handleNewSupplier(arr) {
        let supplier = {}
        supplier.consortium = this.consortiumString == 'y'
        supplier.name = this.supplierName
        supplier.address = this.address
        supplier.contactsName = this.contactsName
        supplier.contactsDetails = this.contactsDetails
        supplier.loginID = this.loginID
        supplier.loginPassword = this.loginPassword
        supplier.tags = arr
        supplier.description = this.description
        writeData('suppliers/', Date.now(), '', '', supplier)
      },
      resetForm() {
        this.$data.supplierName = ''
        this.$data.address = ''
        this.$data.contactsName = ''
        this.$data.contactsDetails = ''
        this.$data.loginID = ''
        this.$data.loginPassword = ''
        this.$data.tags = ''
        this.$data.description = ''
        this.$data.consortiumString = ''
      }
    }
  }
</script>

<style><style>
