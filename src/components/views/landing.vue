<template>
  <div id='landing'>
    <welcomeBanner></welcomeBanner>
    <h3>Everything you need to have tons of fun selling travel!</h3>
    <div id='buttons'>
      <button @click="handleClick('Resources')">Resources</button>
      <button @click="handleClick('Suppliers')">Suppliers</button>
      <button @click="handleClick('Learning')">Learning</button>
      <button @click="handleClick('Users')" v-show='adminMode'>Users</button>
    </div>
  </div>
</template>

<script>
  import welcomeBanner from '../widgets/welcomeBanner'
  export default {
    name: 'landingVue',
    components: {
      welcomeBanner
    },
    methods: {
      handleClick(newHeading) {
        switch(newHeading) {
          case 'Resources':
            this.$store.dispatch('changeResourcesView', true)
            this.$store.dispatch('changeSuppliersView', false)
            this.$store.dispatch('changeLearningView', false)
            this.$store.dispatch('changeUsersView', false)
            this.$store.dispatch('changeLandingView', false)
            break;
          case 'Suppliers':
            this.$store.dispatch('changeResourcesView', false)
            this.$store.dispatch('changeSuppliersView', true)
            this.$store.dispatch('changeLearningView', false)
            this.$store.dispatch('changeUsersView', false)
            this.$store.dispatch('changeLandingView', false)
            break;
          case 'Learning':
            this.$store.dispatch('changeResourcesView', false)
            this.$store.dispatch('changeSuppliersView', false)
            this.$store.dispatch('changeLearningView', true)
            this.$store.dispatch('changeUsersView', false)
            this.$store.dispatch('changeLandingView', false)
            break;
          case 'Users':
            this.$store.dispatch('changeResourcesView', false)
            this.$store.dispatch('changeSuppliersView', false)
            this.$store.dispatch('changeLearningView', false)
            this.$store.dispatch('changeUsersView', true)
            this.$store.dispatch('changeLandingView', false)
            break;
          default:
            break;
        }
        this.$store.dispatch('changeHeading', newHeading)
      }
    },
    computed: {
      adminMode() {
        return this.$store.getters.adminMode
      }
    }
  }
</script>

<style scoped>
  #landing {
    background-color: #3378B8;
    color: white;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    font-size: 1.7rem;
  }

  #buttons {
    display: flex;
  }

  button {
    padding: 50px;
    margin: 0 30px;
    border-radius: 5px;
    color: white;
    background-color: #3378B8;
    border: 1px solid white;
    font-size: 1.3rem;
    transition: .5s;
  }
  button:hover {
    background-color: white;
    color: #CF5300;
    box-shadow: 1px 1px 5px black;
  }
</style>
