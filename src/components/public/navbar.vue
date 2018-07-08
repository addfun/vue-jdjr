<template>
  <ul class="navbar">
    <li class="navlist" v-for="item in items" :key="item.title">
      <router-link :to="{name:item.href}">
        <span class="img"></span>
        <p>{{item.title}}</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        items: [
          {
            title: '首页',
            href: 'home'
          },
          {
            title: '赚钱',
            href: 'makemoney'
          },
          {
            title: '借钱',
            href: 'borrowmoney'
          },
          {
            title: '省钱',
            href: 'savemoney'
          },
          {
            title: '金融会员',
            href: 'members'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/px2rem.scss";
  .navbar{
    position: fixed;
    display: flex;
    width: 16rem;
    bottom: px2rem(-1px);
    height: px2rem(101px);
    margin: 0 auto;
    padding-top: px2rem(10px);
    justify-content: space-around;
    text-align: center;
    box-sizing: border-box;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 -5px 10px rgba(0,0,0,.1);
    .navlist{
      width: 20%;
      .img{
        display: inline-block;
        width: px2rem(44px);
        height: px2rem(44px);
        background: #fff center center no-repeat;
        background-size: cover;
      }
      &:nth-of-type(1) .img{
        background-image: url("../../assets/images/jd-sy-m.png");
      }
      &:nth-of-type(1) .router-link-exact-active .img{
        background-image: url("../../assets/images/jd-sy-active.png");
      }
      &:nth-of-type(2) .img{
        background-image: url("../../assets/images/jd-zq-m.png");
      }
      &:nth-of-type(2) .router-link-exact-active .img{
        background-image: url("../../assets/images/jd-zq-active.png");
      }
      &:nth-of-type(3) .img{
        background-image: url("../../assets/images/jd-jq-m.png");
      }
      &:nth-of-type(3) .router-link-exact-active .img{
        background-image: url("../../assets/images/jd-jq-active.png");
      }
      &:nth-of-type(4) .img{
        background-image: url("../../assets/images/jd-sq-m.png");
      }
      &:nth-of-type(4) .router-link-exact-active .img{
        background-image: url("../../assets/images/jd-sq-active.png");
      }
      &:nth-of-type(5) .img{
        background-image: url("../../assets/images/jd-jrhy-m.png");
      }
      &:nth-of-type(5) .router-link-exact-active .img{
        background-image: url("../../assets/images/jd-jrhy-active.png");
      }
      
      p{
        font-size: px2rem(24px);
        line-height: 1.6;
        color: #666;
      }
      .router-link-exact-active{
        p{
          color: #4668ff;
        }
      }
    }
  }
  
</style>