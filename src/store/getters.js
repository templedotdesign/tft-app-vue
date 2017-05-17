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
  registrationView(state) {
    return state.registrationView
  },
  landingView(state) {
    return state.landingView
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
  usersView(state) {
    return state.usersView
  },
  detailsView(state) {
    return state.detailsView
  },
  addMode(state) {
    return state.addMode
  },
  editMode(state) {
    return state.editMode
  },
  adminMode(state) {
    return state.adminMode
  },
  toolsVisible(state) {
    return state.toolsVisible
  },
  adminKey(state) {
    return state.adminKey
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
  },
  suppliers(state) {
    return state.suppliers
  },
  users(state) {
    return state.users
  },
  selectedSupplier(state) {
    return state.selectedSupplier
  }
}
