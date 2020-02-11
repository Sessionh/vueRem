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
          赠送好友新人拿红包

        </div>

      </div>

      <div class="user-red-packet">
        <img
          class="bg-img"
          src="taskRedPacket/rwhb_bg1@3x.png"
        >
        <div class="content-but">
          <div class="item">
            <img src="taskRedPacket/rwhb_bt1@3x.png">
            <p>关注喜欢的创作者</p>
            <div class="but">去关注</div>
          </div>
          <div class="item">
            <img src="taskRedPacket/rwhb_bt2@3x.png">
            <p>刷短视频</p>
            <div class="but refresh">去刷视频</div>

          </div>
        </div>
        <div class="content-progress">
          <div class="img-list">
            <div class="item">
              <img src="taskRedPacket/rwhb_tb1@3x.png">
            </div>
            <div class="item">
              <img src="taskRedPacket/rwhb_tb2@3x.png">
            </div>
            <div class="last-item">
              <img src="taskRedPacket/rwhb_tb3@3x.png">
            </div>

          </div>

          <progress
            max="100"
            value="50"
          ></progress>

          <div class="msg-list">
            <div class="item">
              <div class="content">
                <img src="taskRedPacket/rwhb_xl@3x.png">
                <p>1名创作者</p>
              </div>
            </div>

            <div class="item">
              <div class="content">
                <img src="taskRedPacket/rwhb_xl@3x.png">
                <p>1名创作者</p>
              </div>
            </div>

            <div class="last-item">
              <div class="content">
                <img src="taskRedPacket/rwhb_xl@3x.png">
                <p>1名创作者</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

  </div>
</template>
<script>
// import BScroll from 'components/BScroll.vue';
export default {
  components: {
    // BScroll

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

  .user-red-packet {
    width: 692px;
    height: 752px;
    position: relative;
    margin: 50px auto 0;
    .bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .content-but {
      position: relative;
      z-index: 2;
      padding-top: 130px;
      display: flex;
      justify-content: center;
      margin: 0 auto;
      .item {
        width: 300px;
        text-align: center;
        img {
          width: 98px;
          height: 98px;
        }
        p {
          padding: 24px 0;
        }
        .but {
          width: 164px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          background: linear-gradient(to top, #4379ed, #06f6fe);
          color: #fff;
          border-radius: 27px;
        }
        .refresh {
          background: linear-gradient(to top, #ff5a6c, #ffa866);
        }
      }
    }
    .content-progress {
      position: relative;
      z-index: 2;
      padding: 140px 35px 0 35px;
      .img-list {
        display: flex;
        img {
          width: 70px;
          height: 42px;
        }
        .item {
          flex: 1;
        }
      }


      progress {
        width: 100%;
        height: 20px;

        background-color: #ffe0e4;
        border-radius: 10px;
        margin: 10px 0;
      }
      progress::-moz-progress-bar {
        background: #ff2f4d;
       
      }
      progress::-webkit-progress-bar {
        background: #e6e6e6;
         border-radius: 10px;
       
      }
      progress::-webkit-progress-value {
        background: #ff2f4d;
         border-radius: 10px;
      }

      .msg-list {
        display: flex;
        font-size: 20px;
        img {
          width: 20px;
          height: 14px;
        }
        .item {
          flex: 1;
        }
        .content {
          width: 100px;
          text-align: center;
        }
      }
    }
  }
}
</style>