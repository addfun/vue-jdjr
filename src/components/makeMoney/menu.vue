<template>
  <section :class="$style.menu">
    <div :class="$style.menuList">
      <router-link :class="$style.item" v-for="item in items" :to="{name: item.href}" :key="item.title">
        <div :class="$style.imgContent">
          <img :src="item.src" :alt="item.title">
          <span v-if="item.note">{{item.note}}</span>
        </div>
        <p>{{item.title}}</p>
      </router-link>
    </div>
    <div :class="$style.menu_bottom">
      <div :class="$style.left">
        <div :class="$style.leftWrap">
          <p>16.43<span>%</span></p>
          <p>历史年化收益率sfasf</p>
          <p>立即购买</p>
        </div>
      </div>
      <div :class="$style.right">
        <swiper :class="$style.rightWrap" :options="options">
          <swiper-slide class="swiper-no-swiping" :class="$style.content" v-for="item in enters" :key="item.title">
            <img :src="item.src" alt="">
            <p>{{item.title}}</p>
          </swiper-slide>
        </swiper>
        <div :class="$style.fixed">
          <span :class="$style.desc">为您推荐</span>
          <img :class="$style.btnImg" src="../../assets/images/jd-zq-btnimg.png" alt="">
        </div>
      </div>
    </div>
    <div :class="$style.kqImg">
      <router-link to="/">
        <img src="../../assets/images/jd-zq-kq.jpg" alt="">
      </router-link>
    </div>
  </section>
</template>

<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  export default {
    components: {
      swiper,
      swiperSlide,
    },
    data(){
      return {
        options: {
          autoplay: true,
          loop: true,
          direction: 'vertical',
        },
        items: [
          {
            src: require('../../assets/images/jd-ycyq-ly.png'),
            href: 'home',
            title: '领红包'
          },
          {
            src: require('../../assets/images/jd-ycyq-ym.png'),
            href: 'home',
            title: '领福利'
          },
          {
            src: require('../../assets/images/jd-ycyq-fdd.png'),
            href: 'home',
            note: '领现金',
            title: '领券'
          },
          {
            src: require('../../assets/images/jd-ycyq-jx.png'),
            href: 'home',
            title: '支付抽奖'
          },
          {
            src: require('../../assets/images/jd-ycyq-fqy.png'),
            href: 'home',
            title: '全部'
          },
        ],
        enters: [
          {
            src: require("../../assets/images/jd-zq-tj-1.jpg"),
            title: "3折首发 家用口腔冲牙器",
            href: "home"
          },
          {
            src: require("../../assets/images/jd-zq-tj-2.jpg"),
            title: "限量首发 智能折叠电动车世界杯版",
            href: "home"
          },
          {
            src: require("../../assets/images/jd-zq-tj-3.jpg"),
            title: "79元抢 苹果安卓通用无线快充",
            href: "home"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .menu{
    padding-top: px2rem(50px);
    padding-bottom: px2rem(20px);
    background-color: #fff;
    .menuList{
      display: flex;
      .item{
        width: 20%;
        font-size: px2rem(24px);
        text-align: center;
        color: #666;
        .imgContent{
          position: relative;
          img{
            width: px2rem(90px);
            height: px2rem(90px);
          }
          span{
            position: absolute;
            top: px2rem(-10px);
            right: px2rem(-10px);
            padding: px2rem(4px);
            background-color: #f88;
            border-radius: px2rem(20px);
            color: #fff;
          }
        }
        p{
          line-height: 2;
        }
      }
    }
    .menu_bottom{
      display: flex;
      margin-top: px2rem(40px);
      padding-bottom: px2rem(40px);

      .left{
        width: 36%;
        padding-left: px2rem(34px);
        box-sizing: border-box;
        .leftWrap{
          height: px2rem(200px);
          background-color: #ff501a;
          background-image: linear-gradient(to right,#ff7013 0,#ff4d1b 100%);
          padding: 0 px2rem(38px) 0 px2rem(24px);
          font-size: px2rem(24px);
          color: #fff;
          box-sizing: border-box;
          overflow: hidden;
          p:nth-child(1){
            margin-top: px2rem(16px);
            font-size: px2rem(50px);
            font-weight: 700;
            span{
              font-size: px2rem(24px);
              font-weight: 400;
            }
          }
          p:nth-child(2){
            display: inline-block;
            width: 100%;
            line-height: 2.5;
            word-break: keep-all;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: px2rem(24px);
            border-bottom: 1px hsla(0,0%,100%,.3) solid;
          }
          p:nth-child(3){
            width: 100%;
            font-size: px2rem(24px);
            padding: px2rem(14px) 0;
            &::after{
              float: right;
              content: '';
              border: px2rem(12px) transparent solid;
              vertical-align: px2rem(-4px);
              border-left-color: #fff;
            }
          }
        }
      }
      .right{
        position: relative;
        height: px2rem(200px);
        flex: 1;
        padding-right: px2rem(34px);
        padding-left: px2rem(20px);
        .rightWrap{
          width: 100%;
          height: 100%;
          background-color: #4363f5;
          background-image: linear-gradient(to right,#6590ff 0,#3854f2 100%);
          .content{
            display: flex;
            justify-content: space-around;
            padding: px2rem(20px) 0;
            box-sizing: border-box;
            img{
              width: px2rem(160px);
              height: px2rem(160px);
              padding-left: px2rem(10px);
            }
            p{
              width: px2rem(160px);
              padding-right: px2rem(10px);
              height: 2em;
              font-size: px2rem(26px);
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #fff;
            }
          }
        }
        .fixed{
          position: absolute;
          width: 50%;
          bottom: 0;
          right: px2rem(15px);
          margin-right: px2rem(10px);
          z-index: 10;
          color: #fff;
          .desc{
            position: absolute;
            bottom: px2rem(20px);
            left: px2rem(20px);
            font-size: px2rem(24px);
          }
          .btnImg{
            float: right;
            width: px2rem(114px);
            height: px2rem(114px);
          }
        }
      }
    }
    .kqImg{
      img{
        width: 100%;
      }
    }
  }
</style>