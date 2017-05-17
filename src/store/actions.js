export default {
  changeHeading(context, heading) {
    context.commit('changeHeading', heading)
  },
  changeLoggedIn(context) {
    context.commit('changeLoggedIn')
  },
  changeRegistrationView(context, visibility) {
    context.commit('changeRegistrationView', visibility)
  },
  changeLandingView(context, visibility) {
    context.commit('changeLandingView', visibility)
  },
  changeResourcesView(context, visibility) {
    context.commit('changeResourcesView', visibility)
  },
  changeSuppliersView(context, visibility) {
    context.commit('changeSuppliersView', visibility)
  },
  changeUsersView(context, visibility) {
    context.commit('changeUsersView', visibility)
  },
  changeLearningView(context, visibility) {
    context.commit('changeLearningView', visibility)
  },
  changeDetailsView(context, visibility) {
    context.commit('changeDetailsView', visibility)
  },
  changeEditMode(context, isActive) {
    context.commit('changeEditMode', isActive)
  },
  changeAddMode(context, isActive) {
    context.commit('changeAddMode', isActive)
  },
  changeAdminMode(context, isActive) {
    context.commit('changeAdminMode', isActive)
  },
  changeAgencyKey(context, newKey) {
    context.commit('changeAgencyKey', newKey)
  },
  changeAdminKey(context, newKey) {
    context.commit('changeAdminKey', newKey)
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
  },
  changeSuppliers(context, suppliers) {
    context.commit('changeSuppliers', suppliers)
  },
  changeUsers(context, users) {
    context.commit('changeUsers', users)
  },
  changeToolsVisible(context, visibility) {
    context.commit('changeToolsVisible', visibility)
  },
  changeSelectedSupplier(context, supplier) {
    context.commit('changeSelectedSupplier', supplier)
  }
}
