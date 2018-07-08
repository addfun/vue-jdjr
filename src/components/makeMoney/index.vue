<template>
  <div class="makeMoney_page">
    <Heador></Heador>
    <FixTop></FixTop>
    <Hslider></Hslider>
    <Menu></Menu>
    <Fund></Fund>
    <Zhongc></Zhongc>
    <Ious></Ious>
    <Features></Features>
    <Bottom></Bottom>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Heador from "./header.vue";
  import FixTop from "./fixTop.vue";
  import Hslider from "./slider.vue";
  import Menu from "./menu.vue";
  import Fund from "./fund.vue";
  import Zhongc from "./zhongc.vue";
  import Ious from "./ious.vue";
  import Features from "./features.vue";
  import Bottom from "./bottom.vue";
  import Navbar from "../public/navbar.vue";
  
  export default {
    components: {
      Heador,
      FixTop,
      Hslider,
      Menu,
      Fund,
      Zhongc,
      Ious,
      Features,
      Bottom,
      Navbar,
    }
  }
</script>

<style lang="scss">
  
</style>
