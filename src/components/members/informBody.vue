<template>
  <div :class="$style.informBody">
    <div :class="$style.informItem" v-for="(item,index) in items" :key="index">
      <router-link :to="{name: item.href}" :class="$style.linkItem">
        <div :class="$style.informLeft">
         <div :class="$style.leftIcon"><img :src="item.icon"></div>
         <span :class="$style.title">{{item.title}}</span>
        </div>
        <div :class="$style.informRight">
          {{item.sub}}
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
  export default {
    data(){
      return {
        items: [
          {
            icon: require("../../assets/images/jd-hy-icon1.png"),
            title: "我的资产",
            sub: "查看全部资产",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon2.png"),
            title: "我的优惠劵",
            sub: "查看全部",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon3.png"),
            title: "我的金币",
            sub: "赚金币兑好物",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon4.png"),
            title: "我的金条",
            sub: "查看额度",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon5.png"),
            title: "我的借钱",
            sub: "查看全部产品",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon6.png"),
            title: "我的白条",
            sub: "去提额",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon7.png"),
            title: "我的众筹",
            sub: "查看订单/物流",
            href: "home"
          },
          {
            icon: require("../../assets/images/jd-hy-icon8.png"),
            title: "我的保障",
            sub: "全方位保障",
            href: "home"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .informBody{
    background-color: #fff;
    .informItem{
      width: 100%;
      padding: 0 px2rem(30px);
      box-sizing: border-box;
      .linkItem{
        display: block;
        width: 100%;
        height: px2rem(112px);
        border-bottom: 1px #ccc solid;
        &::after{
          content: '';
          display: block;
          clear: both;
        }
        .informLeft{
          float: left;
          position: relative;
          height: 100%;
          font-size: px2rem(32px);
          line-height: px2rem(112px);
          color: #333;
          .leftIcon{
            position: absolute;
            width: px2rem(80px);
            height: px2rem(114px);
            background: #fff;
            vertical-align: middle;
            img{
              position: absolute;
              top: 50%;
              margin-top: px2rem(-24px);
              height: px2rem(48px);
              width: px2rem(48px);
            }
          }
          .title{
            margin-left: px2rem(80px);
          }
        }
        .informRight{
          float: right;
          height: 100%;
          line-height: px2rem(112px);
          font-size: px2rem(28px);
          color: #999;
          &::after{
            content: '';
            display: inline-block;
            width: px2rem(14px);
            height: px2rem(24px);
            vertical-align: middle;
            background: url("../../assets/images/jd-mem-arrow1.png") center no-repeat;
            background-size: cover;
            margin-left: px2rem(20px);
          }
        }
      }
    }
  }
</style>