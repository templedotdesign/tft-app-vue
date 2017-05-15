<template>
  <div id='users'>
    <div v-show='toolsVisible'>
      <adminToolsVue></adminToolsVue>
    </div>
    <ul>
      <li v-for='user in users'>
        <p v-text='user.name'></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import adminToolsVue from '../widgets/adminTools'

  export default {
    name: 'usersVue',
    components: {
      adminToolsVue
    },
    computed: {
      users() {
        return this.$store.getters.users
      },
      toolsVisible() {
        return this.$store.getters.toolsVisible
      }
    }
  }
</script>

<style scoped>
#users {
  padding-top: 3.5rem;
  color: #CF5300;
  height: calc(100vh - 4.5rem);
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style-type: none;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

li {
  border: 1px solid #CF5300;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50px;
  padding: 0 5px;
}
</style>
