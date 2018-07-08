<template>
  <div class="zhongc">
    <Panel title="京东众筹" :class="$style.panel">
      <div :class="$style.subcont">
        <router-link to="/" :class="$style.link">
          好生活 享品质 >
        </router-link>
      </div>
      <div :class="$style.content">
        <div :class="$style.left">
          <div :class="$style.leftWrap">
            <p :class="$style.label">今日推荐</p>
            <p :class="$style.title">0.01元</p>
            <p :class="$style.subtitle">抢好物</p>
            <router-link to="/">
              <div :class="$style.btn">立即抢购</div>
            </router-link>
          </div>
        </div>
        <div :class="$style.right">
          <div :class="$style.rightWrap">
            <router-link :to="{name:item.href}" :class="$style.list" v-for="item in items" :key="item.title">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div :class="$style.adBanner">
        <router-link to="/" :class="$style.imgWrap">
          <img src="../../assets/images/jd-zq-ad1.png" alt="">
        </router-link>
      </div>
      <div :class="$style.rxBanner">
        <h4>热销保险</h4>
        <Slider :options="options" :items="rebxItems" :cname="'rxbxW'">
          
        </Slider>
      </div>
      <div :class="$style.adBannerKQ">
        <router-link to="/" :class="$style.imgWrap">
          <img src="../../assets/images/jd-zq-kq.jpg" alt="">
        </router-link>
      </div>
    </Panel>
  </div>
</template>

<script>
  import Panel from "../core/panel.vue";
  import Slider from "../core/slider.vue";
  export default {
    components: {
      Panel,
      Slider
    },
    data(){
      return {
        rebxItems: [
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
          slidesPerView: 2.7,
          spaceBetween: 30,
          freeMode: true,
        },
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item1.png"),
            title: "京东出众"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item2.png"),
            title: "手机优惠"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item3.png"),
            title: "领神券"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item4.png"),
            title: "智能首发"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item5.png"),
            title: "舌尖美味"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-zz-item6.png"),
            title: "轻时尚"
          },
        ],
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .panel{
    position: relative;
    >h4{
      text-align: left;
      font-weight: 700;
      font-size: px2rem(36px);
      color: #333;
    }
    .subcont{
      position: absolute;
      top: px2rem(44px);
      right: px2rem(40px);
      font-size: px2rem(26px);
      z-index: 10;
      .link{
        color: #999;
      }
    }
    .content{
      display: flex;
      width: 100%;
      height: px2rem(260px);
      margin-bottom: px2rem(20px);
      .left{
        width: px2rem(256px);
        height: 100%;
        box-sizing: border-box;
        padding: 0 px2rem(16px) 0 px2rem(30px);
        .leftWrap{
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          text-align: center;
          box-shadow: 0 0 px2rem(30px) px2rem(4px) rgba(101,118,155,.15);
          .label{
            position: absolute;
            top: 0;
            left: 0;
            height: px2rem(32px);
            line-height: px2rem(32px);
            padding: 0 px2rem(12px);
            color: #fff;
            font-size: px2rem(24px);
            background-color: #000;
          }
          .title{
            margin: px2rem(60px) auto px2rem(2px);
            height: px2rem(62px);
            line-height: px2rem(62px);
            font-size: px2rem(50px);
            color: #1bd5c7;
          }
          .subtitle{
            margin-bottom: px2rem(24px);
            height: px2rem(34px);
            line-height: px2rem(34px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: px2rem(24px);
            font-weight: 600;
          }
          .btn{
            width: px2rem(152px);
            height: px2rem(50px);
            margin: 0 auto;
            background-color: #1bd5c7;
            border-radius: px2rem(25px);
            font-size: px2rem(24px);
            line-height: px2rem(50px);
            color: #fff;
            font-weight: 600;
            // word-spacing:8px;
            letter-spacing: 2px;
          }
        }
        
      }
      .right{
        flex: 1;
        padding-right: px2rem(30px);
        .rightWrap{
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          height: 100%;
          box-shadow: 0 0 px2rem(30px) px2rem(4px) rgba(101,118,155,.15);
          .list{
            display: inline-block;
            width: 33.33%;
            height: px2rem(130px);
            padding-top: px2rem(20px);
            box-sizing: border-box;
            text-align: center;
            color: #333;
            img{
              height: px2rem(56px);
              width: px2rem(56px);
            }
            p{
              font-size: px2rem(24px);
              padding: 0 px2rem(12px);
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
      }
    }
    .adBanner{
      .imgWrap{
        width: 100%;
        display: inline-block;
        img{
          width: 100%;
        }
      }
    }
    .rxBanner{
      padding-bottom: px2rem(30px);
      >h4{
        height: px2rem(100px);
        margin: 0 px2rem(30px);
        line-height: px2rem(100px);
        font-size: px2rem(28px);
        font-weight: 500;
        color: #333;
      }
      .swiper-wrapper{
        padding: 0 px2rem(30px);
      }
    }
    .adBannerKQ{
      padding-bottom: px2rem(30px);
      img{
        width: 100%;
      }
    }
  }
</style>
<style lang="scss">
  @import "../../assets/css/px2rem.scss";
  .rxbxW{
    padding-bottom: px2rem(20px);
    .swiper-container{
      box-sizing: border-box;
      padding: 0 px2rem(24px);
      .swiper-slide{
        img{
          height: px2rem(260px);
        }
      }
    }
  }
</style>
