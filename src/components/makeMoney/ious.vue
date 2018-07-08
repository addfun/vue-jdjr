<template>
  <div class="ious">
    <Panel title="白条" :class="$style.panel">
      <router-link to="/">
        <div :class="$style.fixTitle">
          年轻不留白 >
        </div>
      </router-link>
      <div :class="$style.bottomWrap">
        <div :class="$style.left">
          <div :class="$style.leftWrap">
            <canvas id="drawing" ref="draw" height="184" width="184"></canvas>
            <p :class="$style.text">小白信用分</p>
            <router-link to="/" :class="$style.btnWrap">
              <div :class="$style.btn">登录查看</div>
            </router-link>
          </div>
        </div>
        <div :class="$style.right">
          <div :class="$style.rightWrap">
            <router-link :class="$style.list" v-for="item in items" :to="{name: item.href}" :key="item.title">
              <img :src="item.src" alt="">
              <p>{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </div>
    </Panel>
    <panel title="股票" :class="$style.panelGP">
      <div :class="$style.strokeWrap">
        <div :class="$style.strokeLeft">
          <div :class="$style.strokeCont">
            <img src="../../assets/images/jd-zq-gp-03.jpg" alt="">
            <div :class="$style.textWrap">
              <p :class="$style.percent">578.58</p>
              <p :class="$style.title">累计收益排行榜</p>
              <router-link to="/">
                <p :class="$style.name">zangyn</p>
              </router-link>
            </div>
          </div>
        </div>
        <div :class="$style.strokeRight">
          <div :class="$style.strokeCont">
            <p :class="$style.title">猜大盘涨跌</p>
            <p :class="$style.sub">领5元话费券+500钢镚</p>
            <router-link to="/">
              <div :class="$style.go">立即前往</div>
            </router-link>
          </div>
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
  import Panel from "../core/panel.vue";
  export default {
    components: {
      Panel,
    },
    data(){
      return {
        items: [
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "白条"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "还款"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "一元抢券"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "小白卡"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "金条"
          },
          {
            href: "home",
            src: require("../../assets/images/jd-zq-bt.png"),
            title: "校园"
          },
        ],
      }
    },
    methods: {
      drawArc(dom){
        let ctx = dom.getContext("2d")
        ctx.beginPath()
        ctx.strokeStyle="#eee"
        ctx.lineWidth= 20
        ctx.lineCap="round"
        ctx.arc(92,100,80,Math.PI*30/180,Math.PI*150/180,1)
        ctx.stroke()
      }
    },
    mounted(){
      let oCan = this.$refs.draw
      this.drawArc(oCan)
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/px2rem.scss";
  .panel{
    position: relative;
    padding-bottom:  px2rem(20px);
    >h4{
      text-align: left;
      font-size:  px2rem(36px);
      font-weight: 700;
    }
    .fixTitle{
      position: absolute;
      right: 0;
      top: 0;
      height: px2rem(112px);
      line-height: px2rem(112px);
      margin-right:  px2rem(30px);
      font-size:  px2rem(24px);
      color: #999;
    }
    .bottomWrap{
      display: flex;
      width: 100%;
      margin-bottom:  px2rem(16px);
      .left{
        height:  px2rem(260px);
        width:  px2rem(216px);
        padding: 0  px2rem(16px) 0  px2rem(30px);
        .leftWrap{
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          font-size:  px2rem(24px);
          box-shadow: 0 0 px2rem(30px) px2rem(4px) rgba(101,118,155,.15);
          canvas{
            display: inline-block;
            width:  px2rem(184px);
            height:  px2rem(184px);
            margin-top:  px2rem(16px);
          }
          .text{
            position: absolute;
            top:  px2rem(100px);
            left: 50%;
            width: 100%;
            color: #d4b575;
            transform: translate(-50%,-50%);
          }
          .btnWrap{
            display: inline-block;
            position: relative;
            top:  px2rem(-20px);
          }
          .btn{
            display: inline-block;
            width:  px2rem(140px);
            height:  px2rem(50px);
            line-height:  px2rem(50px);
            background-color: #d4b575;
            color: #fff;
            border-radius:  px2rem(25px);
            letter-spacing:  px2rem(2px);
          }
        }
      }
      .right{
        flex: 1;
        padding-right:  px2rem(30px);
        .rightWrap{
          display: flex;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
          box-shadow: 0 0 px2rem(30px) px2rem(4px) rgba(101,118,155,.15);
          .list{
            display: inline-block;
            width: 33.3%;
            height:  px2rem(130px);
            text-align: center;
            img{
              width:  px2rem(56px);
              height:  px2rem(56px);
              margin-top:  px2rem(20px);
            }
            p{
              font-size:  px2rem(24px);    
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              padding: 0  px2rem(12px);
              color: #333;
            }
          }
        }
      }
    }
  }
  .panelGP{
    margin-top:  px2rem(-20px);
    padding-bottom: px2rem(50px);
    >h4{
      text-align: left;
      font-size:  px2rem(36px);
      font-weight: 700;
    }
    .strokeWrap{
      display: flex;
      width: 100%;
      .strokeLeft{
        width: 50%;
        height:  px2rem(200px);
        padding: 0  px2rem(8px) 0  px2rem(30px);
        .strokeCont{
          position: relative;
          width: 100%;
          height: 100%;
          background: url("../../assets/images/jd-zq-gp01.jpg") no-repeat;
          background-size: cover;
          img{
            position: absolute;
            top: px2rem(30px);
            left: px2rem(20px);
            width: px2rem(80px);
            height: px2rem(80px);
            border-radius: px2rem(40px);
            z-index: 10;
          }
          .textWrap{
            position: absolute;
            top: px2rem(26px);
            right: px2rem(4px);
            width: 55%;
            color: #fff;
            .percent{
              height: px2rem(48px);
              line-height: px2rem(48px);
              font-size: px2rem(36px);
              &::after{
                content: '%';
                font-size: px2rem(24px);
              }
            }
            .title{
              display: inline-block;
              height: px2rem(34px);
              line-height: px2rem(34px);
              font-size: px2rem(24px);
            }
            .name{
              position: relative;
              height: px2rem(30px);
              line-height: px2rem(28px);
              font-size: px2rem(24px);
              color: #fff;
              &::before{
                position: absolute;
                content: "牛人";
                height: px2rem(30px);
                width: px2rem(60px);
                left: px2rem(-66px);
                line-height: px2rem(30px);
                text-align: center;
                font-size: px2rem(24px);
                background-image: linear-gradient(-90deg,#fd5737,#ec3038);
              }
              &::after{
                position: absolute;
                content: "";
                width: px2rem(50px);
                height: px2rem(50px);
                top: px2rem(-10px);
                right: px2rem(10px);
                background: url("../../assets/images/jd-zq-gp-go_btn.png") center no-repeat;
                background-size: cover;
              }
            }
          }
        }
      }
      .strokeRight{
        width: 50%;
        height:  px2rem(200px);
        padding: 0  px2rem(30px) 0  px2rem(8px);
        .strokeCont{
          position: relative;
          width: 100%;
          height: 100%;
          background: url("../../assets/images/jd-zq-gp02.jpg") no-repeat;
          background-size: cover;
          padding: 0 px2rem(10px) 0 px2rem(19px);
          box-sizing: border-box;
          overflow: hidden;
          color: #fff;
          .title{
            margin-top: px2rem(26px);
            font-size: px2rem(36px);
            height: px2rem(52px);
            line-height: px2rem(52px);
          }
          .sub{
            height: px2rem(34px);
            line-height: px2rem(34px);
            font-size: px2rem(24px);
          }
          .go{
            position: absolute;
            bottom: px2rem(35px);
            right: px2rem(100px);
            font-size: px2rem(24px);
            color: #fff;
            &::after{
              content: "";
              position: absolute;
              transform: translate(40%,-25%);
              width: px2rem(50px);
              height: px2rem(50px);
              background: url("../../assets/images/jd-zq-gp-go_btn.png") center no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
</style>