<template>
  <div id="app">
    <headerVue v-if='loggedIn'></headerVue>
    <sidebarVue v-if='loggedIn'></sidebarVue>
    <footerVue v-if='loggedIn'></footerVue>
    <registrationVue v-else></registrationVue>
    <resourcesVue v-show='loggedIn && resourcesView'></resourcesVue>
    <suppliersVue v-show='loggedIn && suppliersView'></suppliersVue>
    <learningVue v-show='loggedIn && learningView'></learningVue>
    <usersVue v-show='loggedIn && usersView'></usersVue>
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
import usersVue from './users'

import * as firebaseUtility from '../utils/firebaseUtility'

export default {
  name: 'app',
  components: {
    headerVue,
    footerVue,
    sidebarVue,
    resourcesVue,
    suppliersVue,
    learningVue,
    registrationVue,
    usersVue
  },
  beforeCreate() {
    firebaseUtility.adminKeyRef.on('value', data => {
      const adminKey = data.val()
      this.$store.dispatch('changeAdminKey', adminKey)
    })
    firebaseUtility.agencyKeyRef.on('value', data => {
      const agencyKey = data.val()
      this.$store.dispatch('changeAgencyKey', agencyKey)
    })
    firebaseUtility.resourcesRef.on('value', data => {
      const resources = data.val()
      this.$store.dispatch('changeResources', resources)
    })
    firebaseUtility.learningResourcesRef.on('value', data => {
      const resources = data.val()
      this.$store.dispatch('changeLearningResources', resources)
    })
    firebaseUtility.suppliersRef.on('value', data => {
      const suppliers = data.val()
      this.$store.dispatch('changeSuppliers', suppliers)
    })
    firebaseUtility.usersRef.on('value', data => {
      const users = data.val()
      this.$store.dispatch('changeUsers', users)
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
    },
    usersView() {
      return this.$store.getters.usersView
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
</style>
