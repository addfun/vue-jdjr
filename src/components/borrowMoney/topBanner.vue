<template>
  <article :class="$style.topBanner">
    <section :class="$style.topAD">
      <div :class="$style.fix">金东金条</div>
      <p :class="$style.text">最高可借</p>
      <p :class="$style.price">300,000</p>
      <router-link to="/vip" :class="$style.linkBtn">
        <div :class="$style.btn">立即登录</div>
      </router-link>
    </section>
    <section :class="$style.banner">
      <swiper :options="options" :not-next-tick="options.notNextTick" class="BMTopBanner">
        <swiper-slide v-for="(item,index) in items" :key="item.index">
        <router-link :to="{name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination" v-if="options.pagination"></div>
      </swiper>

    </section>
  </article>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  // import Slider from "../core/slider.vue"
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    data(){
      return {
        options: {
          loop: true,
          speed: 3000,
          pagination: {
            el: ".swiper-pagination",
          },
          notNextTick: false,
          autoplay: {
            disableOnInteraction: false,
            delay: 500,
          }
        },
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd-jq-topB1.png"),
          },
          {
            href: "home",
            src: require("../../assets/images/jd-jq-topB2.png"),
          },
          {
            href: "home",
            src: require("../../assets/images/jd-jq-topB1.png"),
          },
          {
            href: "home",
            src: require("../../assets/images/jd-jq-topB2.png"),
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
@import "../../assets/css/px2rem.scss";
.topBanner{
  margin-top: px2rem(89px);
  height: px2rem(530px);
  background: url("../../assets/images/jd-jq-bj.png") top no-repeat;
  background-size: cover;
  overflow: hidden;
  .topAD{
    position: relative;
    width: px2rem(588px);
    height: px2rem(312px);
    margin: px2rem(48px) auto px2rem(5px);
    border-radius: px2rem(8px);
    background-image: linear-gradient(45deg,#b08038,#f3d496);
    box-shadow: 0 px2rem(30px) px2rem(50px) px2rem(-30px) #b08038;
    color: #fff;
    .fix{
      position: absolute;
      top: px2rem(30px);
      right: px2rem(30px);
      font-size: px2rem(26px);
      font-weight: 700;
      color: #d1a96d;
    }
    .text{
      position: absolute;
      top: 18%;
      left: 10%;
      font-size: px2rem(28px);
    }
    .price{
      position: absolute;
      top: 30%;
      left: 10%;
      font-size: px2rem(75px);
      text-shadow: 0 px2rem(5px) px2rem(5px) rgba(0, 0, 0, .2);
      &::before{
        content: "￥";
        font-size: px2rem(52px);
      }
    }
    .linkBtn{
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #fff;
    }
    .btn{
      position: absolute;
      top: 58%;
      left: 10%;
      width: px2rem(180px);
      height: px2rem(56px);
      line-height: px2rem(56px);
      text-align: center;
      font-weight: 500;
      background-image: linear-gradient(90deg,#fb2e0a,#ffbe16);
      border-radius: px2rem(28px);
      box-shadow: 0 4px 0 #e42b0a;
      font-size: px2rem(25px);
    }
  }
  .banner{
    margin-top: px2rem(40px);
    
  }
}
</style>

<style lang="scss">
  @import "swiper/dist/css/swiper.css";
  @import "../../assets/css/px2rem.scss";
  .BMTopBanner{
    .swiper-slide{
      padding: 0 px2rem(30px);
      box-sizing: border-box;
      img{
        width: 100%;
      }
    }
  }
  .swiper-pagination{
    bottom: px2rem(20px) !important;
    >.swiper-pagination-bullet{
      width: px2rem(10px);
      height: px2rem(10px);
      margin: 0 px2rem(10px) !important;
      border-radius: px2rem(5px);
    }
    >.swiper-pagination-bullet-active{
      background-color: #fff;
    }
  }
 
  
  
</style>
