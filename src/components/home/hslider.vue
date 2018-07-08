<template>
  <article class="">
    <Slider :items="items" :cname="$style.slider"></Slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{name: item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
          <p v-if="item.note">{{item.note}}</p>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
  import Slider from "../core/slider";
  export default {
    components: {
      Slider,
    },
    data(){
      return {
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd01.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd02.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd03.png")
          },
          {
            href: "home",
            src: require("../../assets/images/jd04.jpg")
          }
        ],
        enters: [
          {
            href: "home",
            img: require("../../../src/assets/images/jd-yhj.png"),
            title: "优惠劵",
            note: "100-99券"
          },
          {
            href: "home",
            img: require("../../../src/assets/images/jd-lhb.png"),
            title: "领红包"
          },
          {
            href: "home",
            img: require("../../../src/assets/images/jd-qgb.png"),
            title: "抢钢镚"
          },
          {
            href: "home",
            img: require("../../../src/assets/images/jd-btte.png"),
            title: "白条提额"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";
  @import "../../assets/css/px2rem.scss";
  .slider{
    margin-top: px2rem(120px);
    img{
      width: 100%;
    }
  }
  .list{
    display: flex;
    height: px2rem(176px);
    justify-content: space-around;
    background-color: #fff;
    padding-top: px2rem(40px);
    padding-bottom: px2rem(20px);
    .item{
      text-align: center;
      font-size: px2rem(26px);
      img{
        width: px2rem(90px);
        height: px2rem(90px);
      }
      h4{
        margin-top: px2rem(12px);
        color: #666;
      }
      p{
        margin-top: px2rem(12px);
        color: #f00;
      }
    }
  }
</style>