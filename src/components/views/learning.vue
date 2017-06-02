<template>
  <div id='learning'>
    <Frame/>
    <div v-show='toolsVisible'>
      <adminToolsVue></adminToolsVue>
      <newResourceForm v-show='addMode'></newResourceForm>
    </div>
    <ul>
      <li v-for='resource in resources'>
        <a target='_blank' :href='resource.address' class='resource-link'>{{resource.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Frame from '../widgets/frame'
  import adminToolsVue from '../widgets/adminTools'
  import newResourceForm from '../forms/newResource'

  export default {
    name: 'learningVue',
    components: {
      Frame,
      adminToolsVue,
      newResourceForm
    },
    computed: {
      resources() {
        return this.$store.getters.learningResources
      },
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      addMode() {
        return this.$store.getters.addMode
      }
    }
  }
</script>

<style scoped>
#learning {
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

a {
  text-decoration: none;
  color: #CF5300;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;
}

a:hover {
  background-color: #3378B8;
  color: white;
  box-shadow: 1px 1px 5px black;
}
</style>
