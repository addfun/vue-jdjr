<template>
  <Panel title="-众筹新品-" :class="$style.panelZC">
    <router-link to="/" :class="$style.arrow">更多尖货 ></router-link>
    <Slider :options="options" :items="items" cname="product-slider">

    </Slider>
  </Panel>
</template>

<script>
  import Panel from "../core/panel"
  import Slider from "../core/slider"
  export default {
    components: {
      Panel,
      Slider,
    },
    data(){
      return {
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd-xp1.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-xp2.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-xp3.jpg")
          },
        ],
        options: {
          slidesPerView: 2.3,
          spaceBetween: 30,
          freeMode: true,
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/css/px2rem.scss";
  .product-slider{
    .swiper-container{
      box-sizing: border-box;
      padding: 0 px2rem(24px);
      .swiper-slide{
        img{
          height: px2rem(314px);
        }
      }
    }
  }
</style>
<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .panelZC{
    position: relative;
    h4{
      font-weight: 700;
    }
    .arrow{
      position: absolute;
      top: px2rem(42px);
      right: px2rem(40px);
      font-size: px2rem(28px);
      color: #999;
    }
  }
</style>

