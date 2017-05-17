<template>
  <footer>
    <p v-text='copyright'></p>
    <p><small v-text='signature'></small></p>
  </footer>
</template>

<script>
  export default {
      name: 'CustomFooter',
      data() {
        return {
        }
      },
      computed: {
        copyright() {
          return this.$store.getters.copyright
        },
        signature() {
          return this.$store.getters.signature
        }
      }
  }
</script>

<style scoped>
  footer {
    height: 1.5rem;
    width: 100%;

    position: fixed;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #CF5300;
    color: white;
  }

  p {
    margin: 0 20px;
  }
</style>
