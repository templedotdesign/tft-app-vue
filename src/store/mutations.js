export default {
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
  changeEditMode(state, isActive) {
    state.editMode = isActive
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
}
