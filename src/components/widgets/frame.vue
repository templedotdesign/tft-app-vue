<template>
  <div>
    <CustomHeader/>
    <Sidebar/>
    <CustomFooter/>
  </div>
</template>

<script>
  import CustomHeader from './frameParts/header'
  import Sidebar from './frameParts/sidebar'
  import CustomFooter from './frameParts/footer'
  export default {
    name: 'Frame',
    components: {
      CustomHeader,
      Sidebar,
      CustomFooter
    }
  }
</script>

<style></style>
