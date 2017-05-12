<template>
  <header>
    <h1 v-text='heading'></h1>
  </header>
</template>

<script>
  export default {
      name: 'headerVue',
      data() {
        return {
        }
      },
      computed: {
        heading() {
          return this.$store.getters.currentHeading
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
    align-items: center;

    background-color: #CF5300;
    color: white;
  }

  h1 {
    margin-left: 20px;
  }
</style>
