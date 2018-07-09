<template>
  <div :class="$style.headerIform">
    <div :class="$style.wrapper">
      <div :class="$style.left">
        <img src="../../assets/images/jd-touxiang.png" alt="">
      </div>
      <div :class="$style.middle">
        <p :class="$style.name" v-if="this.userData.name">{{this.userData.name}}</p>
        <p :class="$style.namesub" v-if="!(this.userData.name)">未登录</p>
        <p :class="$style.text" :title="this.userData.tag">{{this.userData.tag}}</p>
      </div>
      <router-link to="/" :class="$style.right">
        会员福利
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      userData: {
        type: [Object,Array]
      }
    },
    data(){
      return {
        
      }
    },
    created(){
      console.log(this.userData.name)
    },

  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .headerIform{
    margin-top: px2rem(90px);
    background-color: #fff;
    .wrapper{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: px2rem(20px) px2rem(30px);
      box-sizing: border-box;
      .left{
        height: px2rem(100px);
        width: px2rem(100px);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .middle{
        width: 47%;
        text-align: left;
        .name,.namesub{
          height: px2rem(46px);
          line-height: px2rem(46px);
          margin-top: px2rem(14px);
          color: #333;
          font-size: px2rem(34px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .namesub{
          color: #666;
        }
        .text{
          height: px2rem(28px);
          line-height: px2rem(28px);
          font-size: px2rem(24px);
          color: #999;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .right{
        height: px2rem(60px);
        line-height: px2rem(60px);
        font-size: px2rem(28px);
        color: #aaa;
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
</style>