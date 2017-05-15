<template>
  <div id='resources'>
    <div id='resources-editor' v-show='toolsVisible'>
      <div>
        <i class="fa fa-plus" aria-hidden="true"></i>
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </div>
    </div>
    <ul>
      <li v-for='resource in resources'>
        <a target='_blank' :href='resource.url' class='resource-link'>{{resource.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'resourcesVue',
    computed: {
      resources() {
        return this.$store.getters.resources
      },
      toolsVisible() {
        return this.$store.getters.toolsVisible
      }
    }
  }
</script>

<style scoped>
  #resources {
    padding-top: 3.5rem;
    color: #CF5300;

    height: calc(100vh - 4.5rem);
    width: 80%;
    overflow: hidden;

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
  }
</style>
