export default {
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
  editMode(state) {
    console.log(state.editMode)
    return state.editMode
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
}
