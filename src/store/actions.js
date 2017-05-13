export default {
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
  changeEditMode(context, isActive) {
    context.commit('changeEditMode', isActive)
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
