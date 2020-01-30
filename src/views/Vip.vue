<template>
  <div class="home">

    <BScroll
      :isTop="true"
      :bounce="false"
    >
      <div class="bscroll-content">
        <div class="head_bg">
          <img src="vip/VIP_bg@3x.png">
        </div>

        <div class="bottom-content">
          <div class="user-card">
            <img
              class="bg-img"
              src="vip/vip_bg1@3x.png"
            >
            <div class="content">
              <span class="left-text">
                <p class="text-student">学习VIP会员</p>
                <p class="serve">享受课池提供的精准分析服务</p>
                <p class="money"><span class="num">￥398</span>/6月</p>
                <div class="but">立即开通</div>

              </span>
              <span class="right-img">
                <img src="vip/vip_tb1@3x.png">
              </span>

            </div>

          </div>

          <div class="vip-card">
            <img
              class="title-img"
              :src="vipOne.title"
            >
            <div class="icon-cont">
              <div
                class="item"
                v-for="(item, index) in vipOne.children"
                :key="index"
              >
                <img :src="item.icon">
                <span>
                  <p>{{item.name}}</p>
                  <p>{{item.text}}</p>
                </span>
              </div>
            </div>
          </div>

          <div class="student-list">
            <img
              class="title-img"
              :src="vipTwo.title"
            >
            <div class="li-item" v-for="(item, index) in vipTwo.children" :key="index">
              <img :src="item.icon">
              <span>
                <p>{{item.name}}</p>
                <p>{{item.text}}</p>
              </span>

            </div>

          

          </div>

          <div class="quan-list">
            <img
              class="title-img"
              :src="vipThree.title"
            >
            <div class="quan-content">

              <div class="quan-item" v-for="(item, index) in vipThree.children" :key="index">
                <img :src="item.icon">
                <p class="name">{{item.name}}</p>
                <p class="msg">{{item.text}}</p>
              </div>
              

            </div>

          </div>

        </div>

      </div>

    </BScroll>

  </div>
</template>

<script>
import BScroll from 'components/BScroll.vue';


export default {
  components: {
    BScroll,


  },
  data() {
    return {
      app: '',
      vipList: [
        {
          name: '开始',
          msg: '快速打开',
          icon: 'vip_bt1'
        }
      ],
      vipOne: {
        title: 'vip/title1.png',
        children: [
          {
            icon: 'vip/vip_bt1@3x.png',
            name: '红名',
            text: '名字红名'
          },
          {
            icon: 'vip/vip_bt2@3x.png',
            name: '红名',
            text: '名字红名'
          },
          {
            icon: 'vip/vip_bt3@3x.png',
            name: '红名',
            text: '名字红名'
          },
          {
            icon: 'vip/vip_bt4@3x.png',
            name: '红名',
            text: '名字红名'
          },
          {
            icon: 'vip/vip_bt5@3x.png',
            name: '红名',
            text: '名字红名'
          },
          {
            icon: 'vip/vip_bt6@3x.png',
            name: '红名',
            text: '名字红名'
          }
        ]
      },
      vipTwo: {
        title: 'vip/title2.png',
        children: [
          {
            icon: 'vip/vip_b8@3x.png',
            name: '学习周报告',
            text: '每周根据学习情况出针对你的学习情况出学习报告'
          },
          {
            icon: 'vip/vip_bt7@3x.png',
            name: '学习月报告',
            text: '每月根据学洗情况储可是看到'
          },
          {
            icon: 'vip/vip_bt9@3x.png',
            name: '学习周报告',
            text: '每周根据学习情况出针对你的学习情况出学习报告'
          }
        ]
      },
      vipThree: {
        title: 'vip/title3.png',
        children: [
          {
            icon: 'vip/vip_bt10@3x.png',
            name: '智能解析',
            text: '学习享受解析服务'
          },
          {
            icon: 'vip/vip_bt10@3x.png',
            name: '智能解析',
            text: '学习享受解析服务'
          },
          {
            icon: 'vip/vip_bt10@3x.png',
            name: '智能解析',
            text: '学习享受解析服务'
          },
          {
            icon: 'vip/vip_bt10@3x.png',
            name: '智能解析',
            text: '学习享受解析服务'
          }
        ]
      },


    }

  },


  methods: {



  },
  created() {
    // this.$api.login('', '').then(ret => {
    //     console.log(ret)
    // })

  },
  destroyed() {
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #f7f7f7;
  .bscroll-content {
    padding: 0 0;
  }
  .bottom-content {
    padding: 0 32px;
    background-color: #f7f7f7;
  }
  .head_bg {
    position: relative;
    z-index: 0;

    width: 100%;
    height: 342px;
    overflow: hidden;
    img {
      height: 342px;
      width: 100%;
    }
  }
  .user-card {
    position: relative;
    height: 340px;
    width: auto;
    margin-top: -160px;
    border-radius: 16px;
    overflow: hidden;
    z-index: 1;

    .bg-img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      height: 100%;
      width: 100%;
    }
    .content {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 10;
      padding: 40px 0;
      display: flex;
      // align-items: center;
      .left-text {
        flex: 1;
        padding: 0 0 0 60px;
        color: #664630;
        .text-student {
          font-size: 38px;
          font-weight: bold;
        }
        .serve {
          font-size: 22px;
          padding-top: 16px;
        }
        .money {
          font-size: 24px;
          padding-top: 32px;
          .num {
            font-size: 30px;
          }
        }
        .but {
          height: 66px;
          width: 212px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          font-size: 28px;
          background: #c29251;
          border-radius: 36px;
          margin-top: 28px;
        }
      }
      .right-img {
        padding: 0 26px;
        img {
          height: 250px;
          width: 200px;
        }
      }
    }
  }

  .vip-card {
    padding: 30px;
    background: #fff;
    border-radius: 12px;
    margin-top: 30px;
    position: relative;
    z-index: 1;
    text-align: center;
    .title-img {
      margin: 30px 0;
      width: 350px;
      height: 50px;
    }
    .icon-cont {
      display: flex;
      text-align: left;
      flex-flow: row wrap;
      .item {
        display: flex;
        align-items: center;
        height: 110px;
        width: 50%;
        @include border_1px(bottom);
        img {
          width: 70px;
          height: 70px;
          margin-right: 20px;
        }
        span {
          flex: 1;

          p:first-child {
            color: #333333;
            font-size: 26px;
            font-weight: bold;
          }
          p:last-child {
            color: #999999;
            font-size: 20px;
          }
        }
      }
      .item:nth-child(1),
      .item:nth-child(2) {
        height: 90px;
        align-items: flex-start;
      }

      .item:nth-child(2n) {
        @include border_1px(left);
        padding: 0 0 0 30px;
      }

      .item:nth-last-child(1) {
        border-bottom: none;
      }
      .item:nth-last-child(2) {
        border-bottom: none;
      }
    }
  }

  .student-list {
    overflow: hidden;
    text-align: center;
    .title-img {
      margin: 30px 0;
      width: 350px;
      height: 50px;
    }

    .li-item {
      height: 110px;
      text-align: left;

      width: auto;
      background: #fff !important;
      display: flex;
      align-items: center;
      padding: 0 30px;

      img {
        width: 70px;
        height: 70px;
        margin-right: 20px;
      }

      span {
        flex: 1;
        overflow: hidden;
        p:first-child {
          color: #333333;
          font-size: 26px;
          font-weight: bold;
        }
        p:last-child {
          color: #999999;
          font-size: 20px;
          padding-top: 14px;
        }
      }
    }
  }

  .quan-list {
    text-align: center;
    .title-img {
      margin: 30px 0;
      width: 350px;
      height: 50px;
    }
    .quan-content {
      background: #fff;
      border-radius: 16px;
      display: flex;
      flex-flow: row wrap;
      .quan-item {
        width: 33.3%;
        text-align: center;
        padding: 20px;
        img {
          height: 72px;
          width: 72px;
        }
        .name {
          font-size: 26px;
        }
        .msg {
          font-size: 20px;
          color: #999999;
        }
      }
    }
  }
}
</style>

