<template>
  <div id='details'>
    <div id='buttons'>
      <a target='_blank' :href='address'><i class="fa fa-play" aria-hidden="true"></i></a>
      <i v-show='consortium' class="fa fa-star" aria-hidden="true"></i>
      <i v-if='inFavorites' class="fa fa-heart" aria-hidden="true"></i>
      <a href='#' v-else><i @click='addToFavorites()' class="fa fa-heart-o" aria-hidden="true"></i></a>
      <i v-show='adminMode' @click='toggleToolsVisible()' class="fa fa-pencil" aria-hidden="true"></i>
      <a href='#'><i @click='closeDetailsView()' class="fa fa-times" aria-hidden="true"></i></a>
    </div>
    <editSupplierForm v-if='toolsVisible'/>
    <div id='content'>
      <p>{{name}}</p>
      <p>{{contactsName}}</p>
      <p>{{contactsDetails}}</p>
      <p>{{loginID}}</p>
      <p>{{loginPassword}}</p>
      <p>{{description}}</p>
      <p>try searching for:</p>
      <ul>
        <li v-for='tag in tags'>{{tag}}</li>
      </ul>
      <p class='bottom'>IATA# 36666276</p>
    </div>
  </div>
</template>

<script>
  import editSupplierForm from '../forms/editSupplier'
  import { writeData } from '../../utils/firebaseUtility'

  export default {
    name: 'supplierDetails',
    components: {
      editSupplierForm
    },
    data() {
      return {
        inFavorites: false,
      }
    },
    beforeMount() {
      const favorites = this.$store.getters.favorites
      if(favorites.includes(this.$store.getters.selectedSupplier.supplierID)) {
        this.inFavorites = true
      }
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
      },
      addToFavorites() {
        this.inFavorites = !this.inFavorites
        const id = this.$store.getters.selectedSupplier.supplierID
        if(this.$store.getters.favorites.includes(id) == false) {
          this.$store.dispatch('addFavorite', id)
          writeData('users/', this.$store.getters.userID, '/favorites/', Date.now(), id)
        }
      }
    },
    computed: {
      adminMode() {
        return this.$store.getters.adminMode
      },
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      name() {
        return this.$store.getters.selectedSupplier.name
      },
      address() {
        return this.$store.getters.selectedSupplier.address
      },
      contactsName() {
        if(this.$store.getters.selectedSupplier.contactsName == '') {
          return ''
        } else {
          return "Contact's name: " + this.$store.getters.selectedSupplier.contactsName
        }

      },
      contactsDetails() {
        if(this.$store.getters.selectedSupplier.contactsDetails == '') {
          return ''
        } else {
          return "Contact's details: " + this.$store.getters.selectedSupplier.contactsDetails
        }
      },
      loginID() {
        if(this.$store.getters.selectedSupplier.loginID == '') {
          return ''
        } else {
          return "Login ID: " + this.$store.getters.selectedSupplier.loginID
        }
      },
      loginPassword() {
        if(this.$store.getters.selectedSupplier.loginPassword == '') {
          return ''
        } else {
          return "Login password: " + this.$store.getters.selectedSupplier.loginPassword
        }
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
  #details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #CF5300;
    font-size: 2rem;
    margin: 10px 10px 0 0;
  }
  i {
    padding: 0 5px;
  }

  #content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 80%;
  }

  p {
    font-size: 1.75rem;
    padding: 5px 0;
  }

  #content>p:first-child {
    color: #3378B8;
    font-size: 2.2rem;
    align-self: center;
  }
  a {
    color: #CF5300;
  }
  ul {
    list-style-type: none;
    padding-bottom: 50px;
  }
  .bottom {
    align-self: center;
    color: #CF5300;
    font-size: 2rem;
    font-weight: 200;
  }
</style>
