<template>
  <div :class="$style.bottom">
    -京东金融出品-
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .bottom{
    height: px2rem(280px);
    width: 100%;
    margin-top: px2rem(-30px);
    font-size: px2rem(24px);
    color: #aaa;
    text-align: center;
    background-color: #eee;
  }
</style>