<template>
  <Panel title="-有车有钱-" :class="$style.panel">
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
            title: '旅游'
          },
          {
            src: require('../../assets/images/jd-ycyq-ym.png'),
            href: 'home',
            title: '医美'
          },
          {
            src: require('../../assets/images/jd-ycyq-fdd.png'),
            href: 'home',
            title: '房抵贷'
          },
          {
            src: require('../../assets/images/jd-ycyq-jx.png'),
            href: 'home',
            title: '驾校'
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
    h4{
      font-weight: 700;
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
          h4{
            text-align: center;
            font-weight: normal;
            font-size: px2rem(26px);
            color: #666;
            line-height: 1.4;
          }
        }
      }
    }
  }
</style>