<template>
  <div id='suppliersVue'>
    <div v-show='toolsVisible'>
      <adminToolsVue></adminToolsVue>
      <div v-if='toolsVisible && addMode'>
        <input v-model='supplierName' type='text' placeholder="Name:"/>
        <input v-model='address'type='text' placeholder="URL:"/>
        <input v-model='contactsName' type='text' placeholder="Contact's Name:"/>
        <input v-model='contactsDetails' type='text' placeholder="Contact's Details:"/>
        <input v-model='loginID' type='text' placeholder="Login ID:"/>
        <input v-model='loginPassword' type='text' placeholder="Login Password:"/>
        <input v-model='tags' type='text' placeholder="Tags:"/>
        <input v-model='description' type='text' placeholder="Description:"/>
        <input v-model='consortiumString' type='text' placeholder="Consortium y/n:"/>
        <button @click='addNewSupplier()'>Submit</button>
      </div>
    </div>
    <ul>
      <li v-for='supplier in suppliers'>
        <p v-text='supplier.name'></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { writeSupplierData } from '../../utils/firebaseUtility'
  import adminToolsVue  from '../widgets/adminTools'

  export default {
    name: 'suppliersVue',
    components: {
      adminToolsVue
    },
    data() {
      return {
        supplierName: '',
        address: '',
        contactsName: '',
        contactsDetails: '',
        loginID: '',
        loginPassword: '',
        tags: '',
        description: '',
        consortiumString: ''
      }
    },
    methods: {
      addNewSupplier() {
        let supplier = {}
        supplier.consortium = this.consortiumString == 'y'
        supplier.name = this.supplierName
        supplier.address = this.address
        supplier.contactsName = this.contactsName
        supplier.contactsDetails = this.contactsDetails
        supplier.loginID = this.loginID
        supplier.loginPassword = this.loginPassword
        supplier.tags = this.tags
        supplier.description = this.description
        writeSupplierData(Date.now(), supplier)
        this.$data.supplierName = ''
        this.$data.address = ''
        this.$data.contactsName = ''
        this.$data.contactsDetails = ''
        this.$data.loginID = ''
        this.$data.loginPassword = ''
        this.tags = ''
        this.description = ''
        this.consortiumString = ''
      }
    },
    computed: {
      toolsVisible() {
        return this.$store.getters.toolsVisible
      },
      addMode() {
        return this.$store.getters.addMode
      },
      suppliers() {
        return this.$store.getters.suppliers
      },
    }
  }
</script>

<style scoped>
  #suppliersVue {
    width: 80%;
    padding-top: 3rem;
    color: #CF5300;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
