<template>
  <div>
    <i @click='handleClick(true)' class="fa fa-pencil" aria-hidden="true"></i>
    <i @click='handleClick(false)' class="fa fa-eye" aria-hidden="true"></i>
    <p v-show='editMode'>Edit Mode</p>
  </div>
</template>

<script>
  export default {
    name: 'suppliersVue',
    methods: {
      handleClick(isActive) {
        this.$store.dispatch('changeEditMode', isActive)
      }
    },
    computed: {
      editMode() {
        return this.$store.getters.editMode
      }
    }
  }
</script>

<style scoped>
  div {
    width: 80%;
    padding-top: 5rem;
    color: #CF5300;
    display: flex;
    justify-content: center;
  }
  i {
    padding: 0 5px;
  }
</style>
