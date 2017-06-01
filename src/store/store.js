import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    currentHeading: '',
    copyright: 'Copyright TonsofFunTravel, 2017',
    signature: 'created by temple.design',
    loggedIn: false,
    registrationView: true,
    landingView: false,
    resourcesView: false,
    suppliersView: false,
    learningView: false,
    usersView: false,
    detailsView: false,
    editMode: false,
    addMode: false,
    toolsVisible: false,
    adminMode: false,
    useFilter: false,
    agencyKey: 0,
    adminKey: 0,
    username: '',
    avatarSrc: '',
    userID: '',
    favorites: [],
    resources: [],
    filteredResources: [],
    learningResources: [],
    suppliers: [],
    visibleSuppliers: [],
    users: [],
    selectedSupplier: {}
  },
  getters,
  mutations,
  actions
})
