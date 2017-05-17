<template>
  <header>
    <h1 v-text='heading'></h1>
    <h1 v-show='adminMode' @click='toggleToolsVisibility()'><i class="fa fa-wrench" aria-hidden="true"></i></h1>
  </header>
</template>

<script>
  export default {
    name: 'CustomHeader',
    data() {
      return {
      }
    },
    methods: {
      toggleToolsVisibility() {
        if(this.$store.getters.toolsVisible) {
          this.$store.dispatch('changeToolsVisible', false)
        } else {
          this.$store.dispatch('changeToolsVisible', true)
        }
        if(this.$store.getters.addMode) {
          this.$store.dispatch('changeAddMode', false)
        }
      }
    },
    computed: {
      heading() {
        return this.$store.getters.currentHeading
      },
      adminMode() {
        return this.$store.getters.adminMode
      }
    }
  }
</script>

<style scoped>
  header {
    height: 3rem;
    width: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #CF5300;
    color: white;
  }

  h1 {
    margin: 0 20px;
  }
</style>
