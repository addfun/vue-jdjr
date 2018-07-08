<template>
  <Panel title="-保险保障-" :class="$style.panel">
    <Slider :options="options" :items="items" cname="insurance-slider">

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
            src: require("../../assets/images/jd-bxbz1.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-bxbz2.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-bxbz3.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-bxbz4.png")
          },
          {
            href: "home",
            src: require("../../assets/images/jd-bxbz5.jpg")
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
  .insurance-slider{
    padding-bottom: px2rem(50px);
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
  .panel{
    position: relative;
    h4{
      font-weight: 700;
    }
    
  }
</style>

