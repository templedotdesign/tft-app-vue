<template>
  <div>
    <div id='editor-tools'>
      <h1 @click='toggleAddMode()'><i class="fa fa-plus" aria-hidden="true"></i></h1>
      <h1 @click='toggleEditMode()'><i class="fa fa-pencil" aria-hidden="true"></i></h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adminToolsVue',
    methods: {
      toggleAddMode() {
        if(this.$store.getters.addMode) {
          this.$store.dispatch('changeAddMode', false)
        } else {
          this.$store.dispatch('changeAddMode', true)
          this.$store.dispatch('changeEditMode', false)
        }
      },
      toggleEditMode() {
        if(this.$store.getters.editMode) {
          this.$store.dispatch('changeEditMode', false)
        } else {
          this.$store.dispatch('changeEditMode', true)
          this.$store.dispatch('changeAddMode', false)
        }
      }
    }
  }
</script>

<style>
  #editor-tools {
    display: flex;
  }
</style>
