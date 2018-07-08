<template>
  <Panel :title="title" :class="$style.panel">
    <section :class="$style.content">
    <dl :class="$style.item" v-for="item in items" :key="item.title">
      <dt>{{item.title}}<span v-if="item.sub">{{item.sub}}</span></dt>
      <dd>{{item.rate}}</dd>
      <dd>{{item.text}}</dd>
    </dl>
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
        title: "- 理财精选 -",
        items: [
          {
            title: '京渤随享盈',
            rate: '5.06%',
            text: '历史年化收益率'
          },
          {
            title: '年年盈',
            sub: '理财推荐',
            rate: '5.06%',
            text: '综合年化收益率'
          },
          {
            title: '建信养老飞益鑫',
            rate: '5.06%',
            text: '近7日年化收益'
          },
          {
            title: '小白基金',
            sub: '超短期',
            rate: '5.06%',
            text: '7日年化收益率'
          }
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
    display: flex;
    flex-wrap: wrap;
    .item{
      position: relative;
      padding: px2rem(34px) px2rem(32px);
      box-sizing: border-box;
      height: px2rem(218px);
      width: 50%;
      &:nth-child(1){
        border-bottom: 1px #ccc solid;
      }
      &:nth-child(2){
        border-bottom: 1px #ccc solid;
      }
      &:after{
        position: absolute;
        content: '';
        width: 1px;
        height: 130px;
        top: 40px;
        right: 0;
        background-color: #ccc;
      }
      &:nth-child(2n){
        &:after{
          display: none;
        }
      }
      dt{
        font-size: px2rem(30px);
        font-weight: bold;
        line-height: px2rem(42px);
        // vertical-align: top;
        color: #333;
        span{
          line-height: px2rem(32px);
          margin-left: px2rem(10px);
          vertical-align: px2rem(2px);
          color: #ff5155;
          padding: 0 px2rem(8px);
          font-size: px2rem(24px);
          border: 1px #ff5155 solid;
        }
      }
      dd:nth-child(2){
        line-height: px2rem(58px);
        font-weight: 700;
        font-size: px2rem(44px);
        color: #ff5155;
      }
      dd:nth-child(3){
        line-height: px2rem(34px);
        font-size: px2rem(24px);
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }

</style>