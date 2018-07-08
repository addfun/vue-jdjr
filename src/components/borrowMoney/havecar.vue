<template>
  <Panel title="有车有钱" :class="$style.panel">
    <section :class="$style.content">
      <ul :class="$style.topContain">
        <li v-for="item in items" :key="item.src">
          <router-link :to="{name:item.href}" :class="$style.item">
            <img :src="item.src" alt="">
          </router-link>
        </li>
      </ul>
      <ul :class="$style.navList">
        <li v-for="item in enters">
          <router-link :to="{name:item.href}" :class="$style.itemList">
            <img :src="item.src" alt="">
            <h4>{{item.title}}</h4>
          </router-link>
        </li>
      </ul>
    </section>
  </Panel>
</template>

<script>
  import Panel from "../core/panel"
  export default {
    components: {
      Panel,
    },
    data(){
      return {
        items: [
          {
            href: 'home',
            src: require('../../assets/images/jd-ycyq1.png')
          },
          {
            href: 'home',
            src: require('../../assets/images/jd-ycyq2.jpg')
          }
        ],
        enters: [
          {
            src: require('../../assets/images/jd-ycyq-ly.png'),
            href: 'home',
            title: '机票'
          },
          {
            src: require('../../assets/images/jd-ycyq-ym.png'),
            href: 'home',
            title: '租房'
          },
          {
            src: require('../../assets/images/jd-ycyq-fdd.png'),
            href: 'home',
            title: '房抵贷'
          },
          {
            src: require('../../assets/images/jd-ycyq-jx.png'),
            href: 'home',
            title: '分期商场'
          },
          {
            src: require('../../assets/images/jd-ycyq-fqy.png'),
            href: 'home',
            title: '分期用'
          },
        ]
      }
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
      &::before{
        content: '';
        display: inline-block;
        width: px2rem(6px);
        height: px2rem(32px);
        vertical-align: -5px;
        margin-right: px2rem(14px);
        background-image: linear-gradient(top,#b08038,#d8ac55);
      }
    }
  }
  .content{
    padding-bottom: px2rem(8px);
    .topContain{
      display: flex;
      li{
        .item{
          display: inline-block;
          width: px2rem(320px);
          height: px2rem(200px);
          img{
            width: 100%;
          }
        }
      }
    }
    .navList{
      display: flex;
      justify-content: space-around;
      li{
        margin-top: px2rem(60px);
        width: 20%;
        text-align: center;
        .itemList{
          display: inline-block;
          height: 100%;
          >h4{
            text-align: center;
            font-weight: normal;
            font-size: px2rem(26px);
            color: #333;
            line-height: 1.4;
          }
          img{
            width: px2rem(90px);
          }
        }
      }
    }
  }
</style>