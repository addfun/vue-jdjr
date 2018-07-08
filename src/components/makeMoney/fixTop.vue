<template>
  <div :class="$style.adTop">
    <img src="../../assets/images/jd-fix-top.png" alt="">
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .adTop{
    position: fixed;
    display: block;
    top: px2rem(88px);
    width: px2rem(640px);
    height: px2rem(120px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    font-size: 0;
    img{
      width: 100%;
    }
  }
</style>