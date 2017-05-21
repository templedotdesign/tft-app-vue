<template>
  <div>
    <h1>Welcome {{ name }}!</h1>
    <img :src='avatarSrc' alt='avatar'/>
  </div>
</template>

<script>
  export default {
    name: 'welcomeBanner',
    computed: {
      name() {
        return this.$store.getters.username
      },
      avatarSrc() {
        return this.$store.getters.avatarSrc
      }
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
    padding-right: 25px;
  }

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
</style>
