export default {
  changeHeading(state, heading) {
    state.currentHeading = heading
  },
  changeLoggedIn(state) {
    state.loggedIn = !state.loggedIn
  },
  changeResourcesView(state, visibility) {
    state.resourcesView = visibility
  },
  changeSuppliersView(state, visibility) {
    state.suppliersView = visibility
  },
  changeLearningView(state, visibility) {
    state.learningView = visibility
  },
  changeUsersView(state, visibility) {
    state.usersView = visibility
  },
  changeEditMode(state, isActive) {
    state.editMode = isActive
  },
  changeAgencyKey(state, newKey) {
    state.agencyKey = newKey
  },
  changeAdminKey(state, newKey) {
    state.adminKey = newKey
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
  },
  changeSuppliers(state, suppliers) {
    state.suppliers = suppliers
  },
  changeUsers(state, users) {
    state.users = users
  },
  changeAdminMode(state, isActive) {
    state.adminMode = isActive;
  },
  changeAddMode(state, isActive) {
    state.addMode = isActive;
  },
  changeToolsVisible(state, visibility) {
    state.toolsVisible = visibility
  }
}
