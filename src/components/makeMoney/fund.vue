<template>
  <div class="fund">
    <Panel title="小金库" :class="$style.panel">
      <div :class="$style.subcont">
        <router-link to="/" :class="$style.link">
          更多理财产品 >
        </router-link>
      </div>
      <div :class="$style.wrapper">
        <div :class="$style.content">
          <p :class="$style.benifit">4.0660</p>
          <p :class="$style.title">七日年化收益</p>
          <p :class="$style.desc">支付/缴费/优化理财/大额理财</p>
          <div :class="$style.btn">
            <span>开启送礼包</span>
          </div>
        </div>
      </div>
      <div :class="$style.row">
        <div :class="$style.product">
          <div :class="$style.groudTitle">
            稳健灵活 定期理财
          </div>
          <swiper :class="$style.xjkS1" :options="options">
            <swiperSlide :class="$style.xjkItem" v-for="item in xjkS1Items" :key="item.title">
              <router-link to="/" :class="$style.routerLink">
                <p :class="$style.title">{{item.title}}</p>
                <p :class="$style.sub">{{item.sub}}</p>
                <p :class="$style.percent">{{item.percent}}</p>
                <p :class="$style.text">{{item.text}}</p>
              </router-link>
            </swiperSlide>
          </swiper>
        </div>
        <div :class="$style.banner">
          <div :class="$style.groudTitle">
            银行+银行服务精选
          </div>
          <swiper :class="$style.xjkS1" :items="xjkS2Items" :options="options">
            <swiperSlide :class="$style.xjkItem" v-for="(item,index) in xjkS2Items" :key="item.index">
              <img :src="item.src" alt="">
            </swiperSlide>
          </swiper>
        </div>
      </div>
    </Panel>
  </div>
</template>
 
<script>
  import {swiper,swiperSlide} from "vue-awesome-swiper";
  import Panel from "../core/panel.vue";
  import Slider from "../core/slider.vue";
  export default {
    components: {
      Panel,
      Slider,
      swiper,
      swiperSlide
    },
    data(){
      return {
        options: {
          slidesPerView: 2.8,
          spaceBetween: 30,
          freeMode: true,
        },
        xjkS1Items: [
          {
            title: "月月盈",
            sub: "金融专家",
            percent: "4.70",
            text: "近七日年化收益率"
          },
          {
            title: "周期盈",
            sub: "理财优选",
            percent: "4.60",
            text: "近七日年化收益率"
          },
          {
            title: "五年盈",
            sub: "长期稳健",
            percent: "6.00",
            text: "历史年化投资回报率"
          },
          {
            title: "随享盈",
            sub: "质押贷款",
            percent: "5.50",
            text: "历史年化结算利率"
          }
        ],
        xjkS2Items: [
          {
            src: require("../../assets/images/jd-zq-jx.png"),
          },
          {
            src: require("../../assets/images/jd-zq-jx.png"),
          },
          {
            src: require("../../assets/images/jd-zq-jx.png"),
          },
          {
            src: require("../../assets/images/jd-zq-jx.png"),
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
    padding-bottom: px2rem(30px);
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
    .wrapper{
      position: relative;
      margin: 0 px2rem(30px);
      .content{
        min-height: px2rem(200px);
        padding-left: px2rem(28px);
        color: #fff;
        overflow: hidden;
        font-size: px2rem(24px);
        background: url("../../assets/images/jd-zq-xjk.png");
        background-size: cover;
        .benifit{
          width: px2rem(280px);
          height: px2rem(72px);
          line-height: px2rem(72px);
          font-size: px2rem(60px);
          margin-top: px2rem(24px);
          border-bottom: 1px #ccc solid;
          &::after{
            content: "%";
            color: #fff;
          }
        }
        .title{
          height: px2rem(34px);
          line-height: px2rem(34px);
          margin: px2rem(8px) 0 px2rem(4px);
        }
        .desc{
          height: px2rem(34px);
          line-height: px2rem(34px);
          opacity: .6;
        }
        .btn{
          position: absolute;
          top: 0;
          right: 0;
          width: px2rem(332px);
          height: px2rem(200px);
          line-height: px2rem(200px);
          span{
            position: absolute;
            width: px2rem(220px);
            height: px2rem(80px);
            left: 50%;
            top: 50%;
            margin-left: px2rem(-100px);
            margin-top: px2rem(-40px);
            font-size: px2rem(24px);
            border-radius: px2rem(40px);
            line-height: px2rem(80px);
            text-align: center;
            background-color: #ff7805;
            background-image: linear-gradient(to right, #ff5316 0, #ff980c 100%);
            box-shadow: px2rem(-5px) px2rem(4px) px2rem(50px) px2rem(4px) #ff4400;
          }
        }
      }
    }
    .row{
      .groudTitle{
        font-size: px2rem(28px);
        color: #333;
        height: px2rem(100px);
        line-height: px2rem(100px);
        font-weight: 400;
        padding: 0 px2rem(30px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .xjkS1{
        padding: px2rem(10px) px2rem(30px);
        box-sizing: border-box;
        .xjkItem{
          height: px2rem(260px);
          box-shadow: 0 0 px2rem(30px) px2rem(1px) rgba(101,118,155,.15);
          box-sizing: border-box;
          border-radius: px2rem(4px);
          .routerLink{
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 0 px2rem(20px);
            box-sizing: border-box;
          }
          .title{
            height: px2rem(46px);
            line-height: px2rem(46px);
            margin: px2rem(38px) auto 0;
            font-size: px2rem(32px);
            color: #333;
          }
          .sub{
            display: inline-block;
            min-width: px2rem(50px);
            height: px2rem(32px);
            line-height: px2rem(28px);
            background-image: linear-gradient(#5e8fff,#2f6fff);
            border-radius: px2rem(16px);
            padding: 0 px2rem(2px);
            color: #fff;
            font-size: px2rem(24px);
          }
          .percent{
            height: px2rem(66px);
            line-height: px2rem(66px);
            font-size: px2rem(50px);
            color: #ff281e;
            &::after{
              content: "%";
              font-size: px2rem(34px);
            }
          }
          .text{
            line-height: 1.1;
            font-size: px2rem(24px);
            color: #666;
          }
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>