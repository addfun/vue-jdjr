<template>
  <div :class="$style.headerIform">
    <div :class="$style.wrapper">
      <div :class="$style.left">
        <img src="../../assets/images/jd-touxiang.png" alt="">
      </div>
      <div :class="$style.middle">
        <p :class="$style.name">{{this.user.name}}</p>
        <p :class="$style.text" :title="this.user.text">{{this.user.text}}</p>
      </div>
      <div :class="$style.right">
        <router-link to="/">
          <p>会员福利</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        user: {
          name: "addfun™",
          text: "纵有疾风起，人生不言弃！",
        }
      }
    },
    created(){
      console.log('ok')
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
        .name{
          height: px2rem(46px);
          line-height: px2rem(46px);
          margin-top: px2rem(14px);
          color: #333;
          font-size: px2rem(34px);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
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
        p{
          height: px2rem(100px);
          line-height: px2rem(100px);
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
  }
</style>