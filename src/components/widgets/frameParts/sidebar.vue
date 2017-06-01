<template>
  <div id='sidebar'>
    <div id='nameplate'>
      <p v-text='agentMessage'></p>
      <img :src='avatarSrc' alt='avatar'/>
    </div>
    <div id='buttons'>
      <button class='nav-button' @click="handleClick('Resources')">Resources</button>
      <button class='nav-button' @click="handleClick('Suppliers')">Suppliers</button>
      <button class='nav-button' @click="handleClick('Learning')">Learning</button>
      <button v-show='adminMode' class='nav-button' @click="handleClick('Users')">Users</button>
    </div>
    <div id='control-panel'>
      <searchTool/>
      <favoritesTool/>
      <membersTool/>
    </div>
  </div>
</template>

<script>
  import searchTool from '../search'
  import favoritesTool from '../favorites'
  import membersTool from '../consortium'
  export default {
      name: 'Sidebar',
      components: {
        searchTool,
        favoritesTool,
        membersTool
      },
      data() {
        return {
        }
      },
      methods: {
        handleClick(newHeading) {
          switch(newHeading) {
            case 'Resources':
              this.$store.dispatch('changeResourcesView', true)
              this.$store.dispatch('changeSuppliersView', false)
              this.$store.dispatch('changeLearningView', false)
              this.$store.dispatch('changeUsersView', false)
              break;
            case 'Suppliers':
              this.$store.dispatch('changeResourcesView', false)
              this.$store.dispatch('changeSuppliersView', true)
              this.$store.dispatch('changeLearningView', false)
              this.$store.dispatch('changeUsersView', false)
              break;
            case 'Learning':
              this.$store.dispatch('changeResourcesView', false)
              this.$store.dispatch('changeSuppliersView', false)
              this.$store.dispatch('changeLearningView', true)
              this.$store.dispatch('changeUsersView', false)
              break;
            case 'Users':
              this.$store.dispatch('changeResourcesView', false)
              this.$store.dispatch('changeSuppliersView', false)
              this.$store.dispatch('changeLearningView', false)
              this.$store.dispatch('changeUsersView', true)
              break;
            default:
              break;
          }
          this.$store.dispatch('changeHeading', newHeading)
          this.$store.dispatch('changeUseFilter', false)
        }
      },
      computed: {
        agentMessage() {
          return this.$store.getters.agentMessage
        },
        avatarSrc() {
          return this.$store.getters.avatarSrc
        },
        adminMode() {
          return this.$store.getters.adminMode
        }
      }
  }
</script>

<style scoped>
  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  #sidebar {
    height: calc(100vh - 4.5rem);
    width: 20%;

    position: fixed;
    top: 3rem;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #3378B8;
    color: white;
  }

  #nameplate {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;

    background-color: white;
    color: #3378B8;

    border-radius: 5px;
  }

  #buttons {
    width: 80%;
    flex-basis: calc(33.333% - 5%);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .nav-button {
    width: 100%;
    flex-basis: calc(33.333% - 10px);
    font-size: 1.2rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #control-panel {
    flex-basis: calc(33.333% - 5%);
    width: 80%;

    border: 1px solid white;
  }
</style>
