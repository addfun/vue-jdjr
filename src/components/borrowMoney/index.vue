<template>
  <div class="borrowMoney">
    <Heador></Heador>
    <TopBanner></TopBanner>
    <HaveCar></HaveCar>
    <Ious></Ious>
    <Activity></Activity>
    <Footor></Footor>
    <NavBar></NavBar>
  </div>
</template>

<script>
  import Heador from "./header"
  import TopBanner from "./topBanner"
  import HaveCar from "./havecar"
  import Ious from "./ious"
  import Activity from "./activity"
  
  import Footor from "./bottom"
  import NavBar from "../public/navbar"
  export default {
    components: {
      Heador,
      TopBanner,
      HaveCar,
      Ious,
      Activity,
      Footor,
      NavBar,
    }
  }
</script>

<style >

</style>