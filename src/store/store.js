import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentHeading: 'Resources',
    copyright: 'Copyright TonsofFunTravel, 2017',
    signature: 'created by temple.design',
    loggedIn: false,
    resourcesView: false,
    suppliersView: false,
    learningView: false,
    usersView: false,
    editMode: false,
    addMode: false,
    toolsVisible: false,
    adminMode: false,
    agencyKey: 0,
    adminKey: 0,
    username: '',
    avatarSrc: '',
    resources: [],
    learningResources: [],
    suppliers: [],
    users: []
  },
  getters,
  mutations,
  actions
})
