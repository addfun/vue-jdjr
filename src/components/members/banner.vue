<template>
  <div :class="$style.membersBanner">
    <router-link to="/" :class="$style.imgWrap">
      <img src="../../assets/images/jd-mem-banner.jpg" alt="">
    </router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .membersBanner{
    margin: px2rem(20px) 0;
    .imgWrap{
      display: block;
      img{
        width: 100%;
        vertical-align: top;
      }
    }
  }
</style>