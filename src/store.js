import Vue from 'vue'
import Vuex from 'vuex'

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
    agencyKey: 0,
    username: '',
    avatarSrc: '',
    resources: [],
    learningResources: []
  },
  getters: {
    currentHeading(state) {
      return state.currentHeading
    },
    agentMessage(state) {
      return 'Hi ' + state.username + '!'
    },
    copyright(state) {
      return state.copyright
    },
    signature(state) {
      return state.signature
    },
    loggedIn(state) {
      return state.loggedIn
    },
    resourcesView(state) {
      return state.resourcesView
    },
    suppliersView(state) {
      return state.suppliersView
    },
    learningView(state) {
      return state.learningView
    },
    agencyKey(state) {
      return state.agencyKey
    },
    username(state) {
      return state.username
    },
    avatarSrc(state) {
      return state.avatarSrc
    },
    resources(state) {
      return state.resources
    },
    learningResources(state) {
      return state.learningResources
    }
  },
  mutations: {
    changeHeading(state, heading) {
      state.currentHeading = heading
    },
    changeLoggedIn(state) {
      state.loggedIn = !state.loggedIn
    },
    changeResourcesView(state, visability) {
      state.resourcesView = visability
    },
    changeSuppliersView(state, visability) {
      state.suppliersView = visability
    },
    changeLearningView(state, visability) {
      state.learningView = visability
    },
    changeAgencyKey(state, newKey) {
      state.agencyKey = newKey
    },
    changeUsername(state, newName) {
      state.username = newName
    },
    changeAvatarSrc(state, newUrl) {
      state.avatarSrc = newUrl
    },
    changeResources(state, resources) {
      state.resources = resources
    },
    changeLearningResources(state, resources) {
      state.learningResources = resources
    }
  },
  actions: {
    changeHeading(context, heading) {
      context.commit('changeHeading', heading)
    },
    changeLoggedIn(context) {
      context.commit('changeLoggedIn')
    },
    changeResourcesView(context, visability) {
      context.commit('changeResourcesView', visability)
    },
    changeSuppliersView(context, visability) {
      context.commit('changeSuppliersView', visability)
    },
    changeLearningView(context, visability) {
      context.commit('changeLearningView', visability)
    },
    changeAgencyKey(context, newKey) {
      context.commit('changeAgencyKey', newKey)
    },
    changeUsername(context, newName) {
      context.commit('changeUsername', newName)
    },
    changeAvatarSrc(context, newUrl) {
      context.commit('changeAvatarSrc', newUrl)
    },
    changeResources(context, resources) {
      context.commit('changeResources', resources)
    },
    changeLearningResources(context, resources) {
      context.commit('changeLearningResources', resources)
    }
  }
})
