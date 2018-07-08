<template>
  <div :class="$style.header">
    <div :class="$style.left">
      <a href="javascript:;" :class="$style.link">注册</a>
      <em>|</em>
      <a href="javascript:;" :class="$style.link">登录</a>
    </div>
      <btn :class="$style.btnDownLoad">APP下载</btn>
  </div>
</template>

<script>
  import btn from "../core/btn.vue";
  export default {
    components: {
      btn,
    },
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .header{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 16rem;
    margin: 0 auto;
    height: px2rem(100px);
    line-height: px2rem(100px);
    border-bottom: 1px solid #fff;
    background: #fff url("../../assets/images/jr-logo.png") center center no-repeat;
    background-size: px2rem(210px) px2rem(56px);
    z-index: 100;
    .left{
      float: left;
      height: px2rem(100px);
      line-height: px2rem(100px);
      margin: 0 0 0 px2rem(24px);
      font-size: px2rem(28px);
    }
    .btnDownLoad{
      float: right;
      margin: px2rem(20px) px2rem(24px) 0 0;
      height: px2rem(56px);
      line-height: px2rem(56px);
      min-width: px2rem(120px);
      padding: 0;
      font-size: px2rem(24px);
    }
  }
  .header .link{
    color: #666;
  }
</style>