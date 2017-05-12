<template>
  <div id="app">
    <headerVue v-if='loggedIn'></headerVue>
    <sidebarVue v-if='loggedIn'></sidebarVue>
    <footerVue v-if='loggedIn'></footerVue>
    <registrationVue v-else></registrationVue>
    <resourcesVue v-show='loggedIn && resourcesView'></resourcesVue>
    <suppliersVue v-show='loggedIn && suppliersView'></suppliersVue>
    <learningVue v-show='loggedIn && learningView'></learningVue>
  </div>
</template>

<script>
import headerVue from './header'
import footerVue from './footer'
import sidebarVue from './sidebar'
import resourcesVue from './resources'
import suppliersVue from './suppliers'
import learningVue from './learning'
import registrationVue from './registration'

import { agencyKeyRef, resourcesRef, learningResourcesRef } from '../utils/firebaseUtility'

export default {
  name: 'app',
  components: {
    headerVue,
    footerVue,
    sidebarVue,
    resourcesVue,
    suppliersVue,
    learningVue,
    registrationVue
  },
  beforeCreate() {
    agencyKeyRef.on('value', data => {
      const agencyKey = data.val()
      this.$store.dispatch('changeAgencyKey', agencyKey)
    })
    resourcesRef.on('value', data => {
      const resources = data.val()
      this.$store.dispatch('changeResources', resources)
    }),
    learningResourcesRef.on('value', data => {
      const resources = data.val()
      this.$store.dispatch('changeLearningResources', resources)
    })
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    },
    resourcesView() {
      return this.$store.getters.resourcesView
    },
    suppliersView() {
      return this.$store.getters.suppliersView
    },
    learningView() {
      return this.$store.getters.learningView
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  html{
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    height: 100vh;
    width: 100vw;
  }

  #test {
    margin-top: 5rem;
  }
</style>
