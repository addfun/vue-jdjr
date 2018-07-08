<template>
  <div class="home_page">
    <Heador></Heador>
    <Hslider></Hslider>
    <Money></Money>
    <Product></Product>
    <Insurance></Insurance>
    <Havecar></Havecar>
    <Footor></Footor>
    <Navbar></Navbar>
  </div>
</template>

<script>
  import Heador from "./header.vue";
  import Footor from "../public/footer.vue";
  import Hslider from "./hslider.vue";
  import Money from "./money.vue";
  import Product from "./product.vue";
  import Insurance from "./insurance.vue";
  import Havecar from "./havecar.vue";
  import Navbar from "../public/navbar.vue";
  export default {
    components: {
      Heador,
      Hslider,
      Money,
      Product,
      Insurance,
      Havecar,
      Footor,
      Navbar
    }
  }
</script>

<style >
  
</style>