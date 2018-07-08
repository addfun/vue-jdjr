<template>
  <Panel title="精彩活动" :class="$style.panel">
    <div :class="$style.imgWrap">
      <div :class="$style.imgLeft">
        <router-link to="/" :class="$style.link">
          <img src="../../assets/images/jd-ycyq1.png" alt="">
        </router-link>
      </div>
      <div :class="$style.imgRight">
        <router-link to="/" :class="$style.link">
          <img src="../../assets/images/jd-ycyq2.jpg" alt="">
        </router-link>
      </div>
    </div>
    <div :class="$style.bottomImg">
      <img src="../../assets/images/jd-zq-ad1.png" alt="">
    </div>
  </Panel>
</template>

<script>
  import Panel from "../core/panel";
  export default {
    components: {
      Panel,
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .panel{
    padding-bottom: px2rem(20px);
    >h4{
      font-weight: 700;
      text-align: left !important;
    }
    .imgWrap{
      display: flex;
      width: 100%;
      .imgLeft{
        width: 50%;
      }
      .imgRight{
        width: 50%;
      }
      .link{
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        img{
          width: 100%;
          vertical-align: middle;
        }
      }
    }
    .bottomImg{
      img{
        width: 100%;
      }
    }
  }
</style>