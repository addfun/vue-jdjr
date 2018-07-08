<template>
  <section :class="$style.footer">
    <div :class="$style.imgContain">
      <img src="../../assets/images/jd-kf.png" alt="">
    </div>
    <ul :class="$style.selectScreen">
      <li>
        <img src="../../assets/images/jd-sjd.png" alt="">
        <p>客户端</p>
      </li>
      <li>
        <img src="../../assets/images/jd-cpb.png" alt="">
        <p>触屏版</p>
      </li>
      <li>
        <img src="../../assets/images/jd-dnb.png" alt="">
        <p>电脑版</p>
      </li>
    </ul>
    <ul :class="$style.copyright">
      <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
      <li>投资有风险，购买需谨慎</li>
      <li>京东金融平台服务协议</li>
      <li>京东金融隐私政策</li>
    </ul>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .footer{
    margin: px2rem(20px) 0 px2rem(100px);
    background-color: #fff;
    .imgContain{
      font-size: 0;
      width: 100%;
      img{
        // vertical-align: -4px;
        width: 100%;
      }
      
    }
    .selectScreen{
      display: flex;
      justify-content: space-around;
      background-color: #f5f5f5;
      padding: px2rem(40px) 0 px2rem(30px);
      li{
        text-align: center;
        width: 33.33%;
        img{
          width: px2rem(90px);
        }
        p{
          font-size: px2rem(24px);
          color: #999;
        }
      }
    }
    .copyright{
      background-color: #f5f5f5;
      li{
        line-height: 1.6;
        padding: px2rem(24px) px2rem(32px);
        text-align: center;
        font-size: px2rem(24px);
        color: #999;
        border-top: 1px #ddd solid;
      }
    }
  }
</style>