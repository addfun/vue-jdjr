<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick" class="swiperList">
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="{name: item.href}" :class="routerName">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    props: {
      routerName: {
        type: String,
        default: ''
      },
      cname: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default(){
          return {
            autoplay: true,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
            },
            notNextTick: false,
            autoplay: {
              disableOnInteraction: false
            }
          }
        }
      },
      items: {
        type: Array,
        default(){
          return [{href:'',src:''}]
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "swiper/dist/css/swiper.css";
  @import "../../assets/css/px2rem.scss";
  .swiper-pagination-bullet{
    width: px2rem(8px);
    height: px2rem(8px);
    border-radius: px2rem(4px);
  }
  .swiper-pagination-bullet-active{
    background-color: #f5f5f5;
  }
  .Mslider{
    .swiper-pagination-bullets{
      bottom: px2rem(30px);
    }
    .swiper-pagination-bullet-active{
      width: px2rem(16px)
    }
  }
  
</style>