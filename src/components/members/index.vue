<template>
  <div class="jinronghy">
    <Heador></Heador>
    <HeaderInform></HeaderInform>
    <Banner></Banner>
    <InformBody></InformBody>
    <InformBottom></InformBottom>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Heador from "./header"
  import HeaderInform from "./headerInform"
  import Banner from "./banner"
  import InformBody from "./informBody"
  import InformBottom from "./informBottom"

  import Navbar from "../public/navbar.vue";
  export default {
    components: {
      Heador,
      HeaderInform,
      Banner,
      InformBody,
      InformBottom,
      Navbar,
    }
  }
</script>

<style lang="scss" module>

</style>