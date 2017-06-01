<template>
  <div>
    <input type='text' placeholder='Username: ' v-model='username'/>
    <input type='text' placeholder='Name: ' v-model='name'/>
    <input type='text' placeholder='Path to avatar: ' v-model='avatarPath'/>
    <button @click='addUserToDatabase()'>Submit</button>
  </div>
</template>

<script>
  import { writeData } from '../../utils/firebaseUtility'

  export default {
    name: 'newUserForm',
    data() {
      return {
        username: '',
        name: '',
        avatarPath: ''
      }
    },
    methods: {
      addUserToDatabase() {
        this.handleNewUser()
        this.resetForm()
      },
      handleNewUser() {
        let user = {}
        user.username = this.username
        user.name = this.name
        user.avatarPath = this.avatarPath
        writeData('users/', Date.now(), '', '', user)
      },
      resetForm() {
        this.$data.username=''
        this.$data.name=''
        this.$data.avatarPath=''
      }
    }
  }
</script>

<style></style>
