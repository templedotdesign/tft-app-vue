<template>
  <div>
    <welcomeBanner></welcomeBanner>
    <button @click="handleClick('Resources')">Resources</button>
    <button @click="handleClick('Suppliers')">Suppliers</button>
    <button @click="handleClick('Learning')">Learning</button>
    <button @click="handleClick('Users')" v-show='adminMode'>Users</button>
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

<style></style>
