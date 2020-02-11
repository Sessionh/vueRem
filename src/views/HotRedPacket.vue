<template>
  <div class="hot-red-packet">

    <img
      class="bg-img"
      src="hotRedPacket/bg@3x.png"
    >
    <div class="hot-container">
      <div class="withdraw-deposit">
        <img
          class="hb-img"
          src="hotRedPacket/hb@3x.png"
        >
        <div class="content">
          <p class="title">恭喜您获得现金红包</p>
          <p class="money">￥188</p>
          <div class="withdraw-but">
            <div class="but-con">
              <img
                class="but-bg-img"
                src="hotRedPacket/hb_bg@3x.png"
              >
              <span>立即提现</span>

            </div>
          </div>

        </div>

      </div>

      <div class="share-content">
        <div class="img-title">
          <img
            class="img"
            src="hotRedPacket/hb_quan@3x.png"
          >
          <div class="cont">
            <span class="left-name">
              <p>课池</p>
              <p>智能教育APP</p>
            </span>
            <span class="right-name">
              <p>快速提高学习成绩</p>
              <p>
                获得<span class="money-text">随机金额</span>现金红包
              </p>
            </span>

          </div>

        </div>

        <div class="share-but">
          立即邀请好友刺激红包

        </div>

      </div>

      <div class="table-log">
        <img
          class="bg-img"
          src="hotRedPacket/hb_bg1@3x.png"
        >
        <div class="ul">
          <div class="title">
            <img src="hotRedPacket/hb_title@3x.png">
            <span>刺激红包记录</span>
          </div>

          <BScroll class="bt-scroll">
            <div
              class="item-li"
              v-for="(item, index) in tableList"
              :key="index"
            >
              <img
                class="user-logo"
                src="hotRedPacket/hb_tx@3x.png"
              >
              <div class="user-name">
                <div class="name">{{item.name}}</div>
                <p class="time">{{item.time}}</p>

              </div>

              <div class="money">
                +{{item.count}}

              </div>

            </div>

          </BScroll>

        </div>

      </div>

    </div>

  </div>
</template>
<script>
import BScroll from 'components/BScroll.vue';
export default {
  components: {
    BScroll

  },
  data() {
    return {
      tableList: [
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '上课说的',
          time: '2020-02-14',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        },
        {
          name: '张三',
          time: '2019-09-20',
          count: '2993'
        }
      ]

    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.hot-red-packet {
  width: 100%;

  height: 1906px;
  position: relative;
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    
  }
  .hot-container {
    position: absolute;
    top: 80px;
    left: 0;
     z-index: 2;
  }
  .withdraw-deposit {
    position: relative;
    width: 100vw;
    height: 584px;
    .hb-img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 80px 0 0 0;
      .title {
        color: #d2985f;
        font-size: 28px;
        text-align: center;
        font-weight: bold;
      }
      .money {
        font-size: 60px;
        font-weight: bold;
        color: #ce2b26;
        margin: 30px 0 100px 0;
        padding-right: 20px;
      }
    }
    .withdraw-but {
      width: 542px;
      height: 122px;
      margin: 0 auto;

      .but-con {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 100%;
        .but-bg-img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
        }
        span {
          position: relative;
          z-index: 10;
          color: #ce2b26;
          font-size: 38px;
          font-weight: bold;
        }
      }
    }
  }

  .share-content {
    height: 400px;
    margin: 20px 30px 0;
    background: #fff;
    border-radius: 20px;
    padding: 40px;
    .img-title {
      height: 174px;
      width: 610px;
      position: relative;

      .img {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .cont {
        position: relative;
        z-index: 10;
        display: flex;
        .left-name {
          width: 200px;
          color: #fff;
          text-align: center;
          font-weight: bold;

          p:first-child {
            font-size: 40px;

            margin: 42px 0 8px 0;
          }
          p:last-child {
            font-size: 22px;
          }
        }
        .right-name {
          flex: 1;
          padding: 42px 0 42px 32px;
          color: #ff4d2b;

          p:first-child {
            padding-bottom: 18px;
          }
          .money-text {
            font-size: 32px;
            font-weight: bold;
          }
        }
      }
    }

    .share-but {
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ff3d03;
      font-weight: bold;
      font-size: 36px;
      color: #fff;
      margin-top: 48px;
      border-radius: 48px;
    }
  }

  .table-log {
    position: relative;
    margin: 30px auto 0;
    width: 700px;
    height: 770px;
    .bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .ul {
      position: relative;
      z-index: 10;
      padding: 30px;
      .title {
        width: 342px;
        height: 36px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 50px auto 40px;
        font-size: 36px;
        font-weight: bold;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        span {
          position: relative;
          z-index: 2;
        }
      }
      .bt-scroll {
        height: 584px;
        overflow: hidden;
      }
      .item-li {
        display: flex;
        padding: 0 60px;
        margin-top: 30px;
        align-items: center;
        .user-logo {
          width: 60px;
          height: 60px;
          border-radius: 30px;
        }
        .user-name {
          flex: 1;
          padding: 0 16px;
          .name {
            font-size: 24px;
            font-weight: bold;
          }
          .time {
            font-size: 22px;
            color: #adadad;
          }
        }
        .money {
          color: #ff4501;
          font-size: 28px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>