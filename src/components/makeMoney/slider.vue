<template>
  <article>
    <Slider :items="items" :class="$style.slider" :cname="'Mslider'"></Slider>
    <section :class="$style.noteWrapper">
      <div :class="$style.note">
        <div :class="$style.members">会员等级</div>
        <div :class="$style.login">立即登录 马上赚钱！</div>
        <div :class="$style.sign">签到</div>
      </div>
    </section>
  </article>
</template>

<script>
  import Slider from "../core/slider"
  export default {
    components: {
      Slider,
    },
    data(){
      return {
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd01.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd02.jpg")
          },
          {
            href: "home",
            src: require("../../assets/images/jd03.png")
          },
          {
            href: "home",
            src: require("../../assets/images/jd04.jpg")
          }
        ],
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .slider{
    margin-top: px2rem(90px);
    font-size: 0;
    width: 100%;
    height: 100%;
    img{
      height: px2rem(380px);
      object-fit: cover;
      // vertical-align: -4px;
    }
  }
  .noteWrapper{
      width: 100%;
      margin-top:  px2rem(-12px);
      background-color: #fff;
      .note{
        position: relative;
        display: flex;
        justify-content: space-around;
        height:  px2rem(130px);
        margin: 0 1rem;
        align-items: center;
        text-align: center;
        background-color: #fff;
        z-index: 3;
        border-radius:  px2rem(4px);
        box-shadow: 0 0 0 px2rem(4px) rgba(0,0,0,.1);
        font-size: px2rem(24px);
        .members{
          display: inline-block;
          height: px2rem(66px);
          width: px2rem(116px);
          line-height: px2rem(66px);
          background: #bb9f6b;
          background-image: linear-gradient(135deg, #f9dd9c 0,#b59868 100%);
          border-radius:  px2rem(4px);
          color: #fffefe;
        }
        .login{
          font-size:  px2rem(28px);
          color: #b59868;
        }
        .sign{
          display: inline-block;
          height: px2rem(66px);
          width: px2rem(140px);
          line-height: px2rem(66px);
          background: #bb9f6b;
          background-image: linear-gradient(130deg,#f9dd9c 0,#b59868 100%);
          border-radius:  px2rem(33px);
          color: #fffefe;
        }
      }
    }
    
</style>