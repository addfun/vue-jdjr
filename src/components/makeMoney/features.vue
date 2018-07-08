<template>
  <article class="features">
    <Panel title="特色推荐" :class="$style.panel">
      <div :class="$style.wrapper">
        <ul>
          <li :class="$style.list" v-for="(item,index) in items" :key="item.index">
            <router-link :to="item.href" :class="$style.link">
              <div :class="$style.imgWrap">
                <img :class="$style.imgLink" :src="item.src" :alt="item.title">
              </div>
              <p :class="$style.title">{{item.title}}</p>
              <p :class="$style.price">{{item.price}}</p>
              <div :class="$style.progressWrap">
                <div :class="$style.progress">
                  <div :class="$style.inner" :style="'width:'+(item.percent>100?100:item.percent)+'%'"></div>
                </div>
                <span :class="$style.percent">{{item.percent}}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </Panel>
  </article>
</template>

<script>
  import Panel from "../core/panel.vue";
  export default {
    components: {
      Panel,
    },
    data(){
      return {
        percent: 50,
        items: [
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 103
          },
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 51
          },
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 150
          },
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 199
          },
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 555
          },
          {
            href: "/",
            src: require("../../assets/images/jd-zq-tstj.jpg"),
            title: "茅台镇纯坤沙5年鲜竹酒",
            price: 59.00,
            percent: 103
          },
        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .panel{
    padding-top: px2rem(50px);
    >h4{
      font-size: px2rem(36px);
      font-weight: 700;
      height: px2rem(120px);
      line-height: px2rem(120px);
      text-align: left;
    }
    .wrapper{
      flex-wrap: wrap;
      background-color: #eee;
      padding-bottom: px2rem(60px);
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
      }
      .list{
        padding-bottom: px2rem(8px);
        width: px2rem(316px);
        height: px2rem(412px);
        text-align: center;
        .link{
          display: block;
          width: 100%;
          height: 100%;
          background-color: #fff;
          overflow: hidden;
          color: #333;
          .imgWrap{
            margin-top: px2rem(44px);
            height: px2rem(180px);
            .imgLink{
              height: 100%;
            }
          }
          .title{
            height: px2rem(42px);
            line-height: px2rem(54px);
            margin: px2rem(22px) 0;
            font-size: px2rem(30px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
            padding-left: px2rem(30px);
          }
          .price{
            margin-bottom: px2rem(14px);
            font-size: px2rem(32px);
            font-weight: 700;
            text-align: left;
            padding-left: px2rem(30px);
            color: #ff9a1c;
            &::before{
              content: "￥";
              font-size: px2rem(24px);
              font-weight: 400;
            }
            &::after{
              content: "起";
              margin-left: px2rem(10px);
              font-size: px2rem(24px);
              font-weight: 400;
              color: #999;
            }
          }
          .progressWrap{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            height: px2rem(30px);
            padding: 0 px2rem(30px);
            font-size: px2rem(24px);
            .progress{
              width: 70%;
              height: px2rem(10px);
              border-radius: px2rem(10px);
              background-color: #aaa;
              .inner{
                height: px2rem(10px);
                border-radius: px2rem(10px);
                background-image: linear-gradient(right,#f55 1%,#ff9c31);
              }
            }
            .percent{
              height: px2rem(24px);
              line-height: px2rem(24px);
              margin-left: px2rem(6px);
              color: #999;
              text-align: center;
              &::before{
                content: "≥";
              }
              &::after{
                content: "%";
              }
            }
          }
        }
      }
    }
  }
</style>