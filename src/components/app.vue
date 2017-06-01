<template>
  <div id="app">
    <registrationVue v-if='registrationView'></registrationVue>
    <landingVue v-if='landingView'></landingVue>
    <resourcesVue v-if='resourcesView'></resourcesVue>
    <suppliersVue v-if='suppliersView'></suppliersVue>
    <learningVue v-if='learningView'></learningVue>
    <usersVue v-if='usersView'></usersVue>
    <supplierDetails v-if='detailsView'></supplierDetails>
  </div>
</template>

<script>
import landingVue from './views/landing'
import resourcesVue from './views/resources'
import suppliersVue from './views/suppliers'
import learningVue from './views/learning'
import registrationVue from './views/registration'
import usersVue from './views/users'
import supplierDetails from './views/supplierDetails'

import * as firebaseUtility from '../utils/firebaseUtility'

export default {
  name: 'app',
  components: {
    landingVue,
    resourcesVue,
    suppliersVue,
    learningVue,
    registrationVue,
    usersVue,
    supplierDetails
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
      const values = data.val()
      const keys = Object.keys(values)
      const resources = keys.map((key) => {
        return {
          name: values[key].name,
          address: values[key].address
        }
      })
      this.$store.dispatch('changeResources', resources)
    })
    firebaseUtility.learningResourcesRef.on('value', data => {
      const values = data.val()
      const keys = Object.keys(values)
      const resources = keys.map((key) => {
        return {
          name: values[key].name,
          address: values[key].address
        }
      })
      this.$store.dispatch('changeLearningResources', resources)
    })
    firebaseUtility.suppliersRef.on('value', data => {
      const values = data.val()
      const keys = Object.keys(values)
      const suppliers = keys.map((key) => {
        return {
          name: values[key].name,
          address: values[key].address,
          contactsName: values[key].contactsName,
          contactsDetails: values[key].contactsDetails,
          loginID: values[key].loginID,
          loginPassword: values[key].loginPassword,
          tags: values[key].tags,
          description: values[key].description,
          consortium: values[key].consortium,
          supplierID: key
        }
      })
      this.$store.dispatch('changeSuppliers', suppliers)
      this.$store.dispatch('changeVisibleSuppliers', suppliers)
    })
    firebaseUtility.usersRef.on('value', data => {
      const values = data.val()
      const keys = Object.keys(values)
      const users = keys.map((key) => {
        return {
          name: values[key].name,
          username: values[key].username,
          userID: key,
          favorites: values[key].favorites
        }
      }) 
      this.$store.dispatch('changeUsers', users)
    })
  },
  computed: {
    registrationView() {
      return this.$store.getters.registrationView
    },
    landingView() {
      return this.$store.state.landingView
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
    },
    detailsView() {
      return this.$store.getters.detailsView
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
    /*height: 100vh;*/
    width: 100vw;
  }
</style>
