export default {
  changeHeading(state, heading) {
    state.currentHeading = heading
  },
  changeLoggedIn(state) {
    state.loggedIn = !state.loggedIn
  },
  changeRegistrationView(state, visibility) {
    state.registrationView = visibility
  },
  changeLandingView(state, visibility) {
    state.landingView = visibility
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
  changeDetailsView(state, visibility) {
    state.detailsView = visibility
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
  changeUserID(state, id) {
    state.userID = id
  },
  changeFavorites(state, favorites) {
    state.favorites = favorites
  },
  addFavorite(state, favorite) {
    state.favorites.push(favorite)
  },
  changeResources(state, resources) {
    state.resources = resources
  },
  changeFilteredResources(state, resources) {
    state.filteredResources = resources
  },
  changeLearningResources(state, resources) {
    state.learningResources = resources
  },
  changeSuppliers(state, suppliers) {
    state.suppliers = suppliers
  },
  changeVisibleSuppliers(state, suppliers) {
    state.visibleSuppliers = suppliers
  },
  changeUsers(state, users) {
    state.users = users
  },
  changeTags(state, tags) {
    state.tags = tags
  },
  changeAdminMode(state, isActive) {
    state.adminMode = isActive;
  },
  changeUseFilter(state, isActive) {
    state.useFilter = isActive
  },
  changeAddMode(state, isActive) {
    state.addMode = isActive;
  },
  changeToolsVisible(state, visibility) {
    state.toolsVisible = visibility
  },
  changeSelectedSupplier(state, supplier) {
    state.selectedSupplier = supplier
  }
}
