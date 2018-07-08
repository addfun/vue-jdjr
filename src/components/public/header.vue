<template>
  <div :class="$style.header">
    <div :class="$style.left" @click="lastLink"><i></i></div>
    <div :class="$style.middle">{{this.title}}</div>
    <div :class="$style.right"><i></i></div>
  </div>
</template>

<script>
  import Heador from "../home/header"
  export default {
    components: {
      Heador,
    },
    props: {
      title: {
        type: String,
        default: ""
      }
    },
    methods: {
      lastLink(){
        this.$router.push({name: "home"})
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .header{
    position: fixed;
    display: flex;
    top: 0;
    width: 16rem;
    min-height: px2rem(44px);
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    z-index: 100;
    .left{
      width: px2rem(88px);
      height: px2rem(88px);
      i{
        display: inline-block;
        position: relative;
        width: px2rem(50px);
        height: px2rem(50px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      i::before{
        position: absolute;
        content: '';
        width: px2rem(4px);
        height: px2rem(24px);
        left: 50%;
        top: 4px;
        transform: rotate(45deg);
        background-color: #666;
      }
      i::after{
        position: absolute;
        content: '';
        width: px2rem(4px);
        height: px2rem(24px);
        left: 50%;
        top: px2rem(20px);
        transform: rotate(-45deg);
        background-color: #666;
      }
    }
    .middle{
      font-size: px2rem(32px);
      line-height: px2rem(88px);
      color: #333;
    }
    .right{
      position: relative;
      width: px2rem(80px);
      height: px2rem(88px);
      i{
        position: absolute;
        width: px2rem(40px);
        height: px2rem(40px);
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        &:before{
          content: '';
          display: inline-block;
          width: px2rem(6px);
          height: px2rem(6px);
          margin-bottom: px2rem(10px);
          border-radius: px2rem(2px);
          box-shadow: px2rem(14px) 0 0 #666,
                      px2rem(28px) 0 0 #666;
          background-color: #666;
        }
      }
    }
  }
</style>