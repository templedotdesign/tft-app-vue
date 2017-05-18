<template>
  <div>
    <i class="fa fa-heart" aria-hidden="true"></i>
    <i class="fa fa-heart-o" aria-hidden="true"></i>
    <i @click='toggleToolsVisible()' class="fa fa-pencil" aria-hidden="true"></i>
    <i @click='closeDetailsView()' class="fa fa-times" aria-hidden="true"></i>

    <editSupplierForm v-if='toolsVisible'/>
    <div>
      <p>{{name}}</p>
      <p>{{contactsName}}</p>
      <p>{{contactsDetails}}</p>
      <p>{{loginID}}</p>
      <p>{{loginPassword}}</p>
      <p>{{description}}</p>
      <p>{{consortium}}</p>
      <ul>
        <li v-for='tag in tags'>{{tag}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import editSupplierForm from '../forms/editSupplier'
  export default {
    name: 'supplierDetails',
    components: {
      editSupplierForm
    },
    methods: {
      closeDetailsView() {
        this.$store.dispatch('changeSuppliersView', true)
        this.$store.dispatch('changeDetailsView', false)
      },
      toggleToolsVisible() {
        if(this.$store.getters.toolsVisible) {
          this.$store.dispatch('changeToolsVisible', false)
        } else {
          this.$store.dispatch('changeToolsVisible', true)
        }
      }
    },
    computed: {
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      name() {
        return this.$store.getters.selectedSupplier.name
      },
      contactsName() {
        return this.$store.getters.selectedSupplier.contactsName
      },
      contactsDetails() {
        return this.$store.getters.selectedSupplier.contactsDetails
      },
      loginID() {
        return this.$store.getters.selectedSupplier.loginID
      },
      loginPassword() {
        return this.$store.getters.selectedSupplier.loginPassword
      },
      description() {
        return this.$store.getters.selectedSupplier.description
      },
      tags() {
        return this.$store.getters.selectedSupplier.tags
      },
      tagsString() {
        return this.$store.getters.selectedSupplier.tags.join(',')
      },
      consortium() {
        return this.$store.getters.selectedSupplier.consortium
      },
    }
  }
</script>

<style scoped>
  div {
    margin-top: 5rem;
  }
</style>
