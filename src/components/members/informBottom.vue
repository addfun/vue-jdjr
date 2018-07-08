<template>
  <div :class="$style.informBottom">
    <div :class="$style.bottomItem">
      <router-link to="/" :class="$style.linkItem">
        <span :class="$style.iconWrap" >
          <img src="../../assets/images/jd-hy-icon9.png" alt="">
          <p>实名认证</p>
        </span>
        <div :class="$style.imgRight">
          <img src="../../assets/images/jd-mem-arrow1.png" alt="">
        </div>
      </router-link>
    </div>
    <div :class="$style.bottomItem">
      <router-link to="/" :class="$style.linkItem">
        <span :class="$style.iconWrap" >
          <img src="../../assets/images/jd-hy-icon10.png" alt="">
          <p>帮助中心</p>
        </span>
        <div :class="$style.imgRight">
          <img src="../../assets/images/jd-mem-arrow1.png" alt="">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .informBottom{
      margin-bottom: px2rem(120px);
      .bottomItem{
        width: 100%;
        height: px2rem(112px);
        margin-top: px2rem(20px);
        background-color: #fff;
        .linkItem{
          display: flex;
          width: 100%;
          height: 100%;
          line-height: px2rem(112px);
          justify-content: space-between;
          padding: 0 px2rem(30px);
          box-sizing: border-box;
          font-size: px2rem(32px);
          color: #333;
          .iconWrap{
            display: inline-block;
            line-height: px2rem(112px);
            vertical-align: middle;
            img{
              width: px2rem(48px);
              height: px2rem(48px);
              vertical-align: middle;
            }
            p{
              text-indent: px2rem(30px);
              vertical-align: middle;
              display: inline-block;
            }
          }
          .imgRight{
            img{
              width: px2rem(14px);
              height: px2rem(24px);
            }
          }
        }
      }
    }
</style>