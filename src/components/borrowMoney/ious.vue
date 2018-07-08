<template>
  <Panel title="白条服务" :class="$style.panel">
    <div :class="$style.imgWrap">
      <div :class="$style.imgLeft">
        <router-link to="/" :class="$style.link">
          <img src="../../assets/images/jd-jq-bt1.png" alt="">
        </router-link>
      </div>
      <div :class="$style.imgRight">
        <router-link to="/" :class="$style.link">
          <img src="../../assets/images/jd-jq-bt2.png" alt="">
          <p :class="$style.text">小白信用</p>
          <p :class="$style.btn">登录查看</p>
        </router-link>
      </div>
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
      vertical-align: middle;
      &::before{
        content: '';
        display: inline-block;
        width: px2rem(6px);
        height: px2rem(32px);
        vertical-align: px2rem(-5px);
        margin-right: px2rem(14px);
        background-image: linear-gradient(top,#b08038,#d8ac55);
      }
    }
    .imgWrap{
      display: flex;
      width: 100%;
      .link{
        position: relative;
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        >p{
          position: absolute;
          font-size: px2rem(24px);
          width: 100%;
        }
      }
      .imgLeft{
        width: 63.5%;
        padding-left: 14px;
      }
      .imgRight{
        width: 36%;
        padding-right: 14px;
        .text{
          top: 36%;
          color: #fff;
        }
        .btn{
          top: 66.5%;
          color: #b08038;
        }
      }
      img{
        display: block;
        width: 100%;
      }
    }
  }
</style>