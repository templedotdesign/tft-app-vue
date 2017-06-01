<template>
    <div>
      <input v-model='newName' type='text' placeholder='name'/>
      <input v-model='newUserName'type='text' placeholder='address'/>
      <input v-model='newAvatarPath' type='text' placeholder='contactsName'/>

      <button @click='editUserInDatabase()'>Submit</button>
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
        newUserName: '',
        newAvatarPath: '',
      }
    },
    methods: {
      editUserInDatabase() {
        this.handleEdit()
        this.resetForm()
        this.$store.dispatch('changeToolsVisible', false)
      },
      handleEdit() {
        let user = {}
        if(this.newName != '') {
          user.name = this.newName
        } else{
          user.name = this.name
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
        writeData('suppliers/', this.$store.getters.userID, '', '', user)
      },
      resetForm() {
        this.$data.newName = ''
        this.$data.newAddress = ''
        this.$data.newContactsName = ''

      }
    },
    computed: {
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      name() {
        const users = this.$store.users
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
