<template>
  <div class="ganeralize">
    <BScroll
      class="bscroll"
      :isTop="true"
      :bounce="false"
    >

      <div class="header">
        <img
          class="user-logo"
          src="detail.png"
        >

        <span class="msg">
          <p>教你如何快速掌握摄影技巧的学习方法</p>
          <p class="use">
            <img src="https://img.fengchengtianxia.com/FqqKHdM0zIJ17rZcscDHhhnl0W__">
            <span>张三</span>
          </p>
        </span>

      </div>

      <div
        class="checked-item"
        @click="isCity = true"
      >
        <span class="name">选择投放城市</span>
        <span>全部</span>
        <van-icon
          class="icon"
          name="arrow"
        />
      </div>

      <div class="checked-item">
        <span class="name">选择投放板块</span>
        <span>全部</span>
        <van-icon
          class="icon"
          name="arrow"
        />
      </div>

      <div class="select-money">
        <div class="title">
          投放金额
        </div>
        <div class="money-cloumn">
          <div class="num-li action">
            <span>￥100</span>
          </div>
          <div class="num-li">
            <span>￥200</span>
          </div>
          <div class="num-li">
            <span>￥300</span>
          </div>
          <div class="num-li">
            <span>￥400</span>
          </div>
          <div class="num-li">
            <span>￥5000</span>
          </div>
           <div class="num-li">
            <span>￥5000</span>
          </div>
           <div class="num-li">
            <span>￥5000</span>
          </div>
           <div class="num-li">
            <span>￥5000</span>
          </div>
           <div class="num-li">
            <span>￥5000</span>
          </div>

        </div>
      </div>

      <div class="user-count-column">
        <span class="item">
          <span class="fwb">预计受众用户：</span>
          <span class="color-red">70万人</span>
        </span>
        <span class="item">

          <span class="fwb">预计浏览量：</span>
          <span class="color-red">100万人/次</span>
        </span>
        <span class="item">
          <span class="fwb">预计获得点赞量：</span>
          <span class="color-red">100万</span>
        </span>

      </div>

      <div class="item-hr border-top"></div>

      <div
        class="progress"
        @touchmove="touchmove"
      >

        <div class="progress-title fwb">调整KB抵扣数量</div>
        <div class="progress-num">
          <div
            class="now-num"
            :style="{left: `${progressNum}%`}"
          >
            <div class="content">
              <img src="generalize/1.png">
              <div
                class="num"
                :style="{left: progressNum <= 2 ? '0.2rem' : 0 }"
              >{{nowNum}}kb</div>

            </div>

          </div>

          <div class="start-num">0kb</div>
          <div class="end-num">{{countNum}}kb</div>
        </div>
      </div>

    
    </BScroll>

      <div class="pay-action border-top">
        <div class="left-msg">
          实付金额：￥80.00
        </div>
        <div class="pay-but">去支付</div>
      </div>

    <div
      class="city-f"
      v-show="isCity"
    >

      <van-area
        class="area"
        :area-list="areaList"
        :columns-placeholder="['请选择', '请选择']"
        :columns-num="2"
        @cancel="areaCancel"
        @confirm="areaConfirm"
        title="投放城市"
      />

    </div>

  </div>
</template>
<script>
import BScroll from 'components/BScroll.vue';
import areaList from '@/lib/city.js'

export default {
  components: {
    BScroll
  },
  data() {
    return {
      areaList,
      isCity: false,
      progressNum: 3,
      loop: '',
      startX: 0,
      windowWidth: '',
      windowSize: '',
      countNum: 0.05,
      nowNum: '0'

    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    let size = document.getElementsByTagName('html')[0].style.fontSize;
    size = size.replace(/px/, '')
    this.windowSize = size

  },
  methods: {
    areaCancel() {
      this.isCity = false

    },
    areaConfirm() {
      this.isCity = false


    },
   
    touchmove(ev) {

      let pageX = ev.changedTouches[0].pageX;
      let resultProNum = Number(pageX / this.windowWidth * 100).toFixed(0);
      // console.log(curNum)
      if (Number(resultProNum) < 0) {
        this.progressNum = 0
      } else if (Number(resultProNum) > 100) {
        this.progressNum = 100
      } else {
        this.progressNum = Number(resultProNum)
      }
       this.nowNum = Number(this.countNum * this.progressNum/100).toFixed(2)
    

     

    },
   
  }

}
</script>
<style lang="scss" scoped>
.color-red {
  color: #ff4c64;
}
.ganeralize {
  height: 100%;
  width: 100%;
  .bscroll {
    background: #ffffff;
  }
  .header {
    display: flex;
    background: #ffd91b;
    padding: 40px 50px;
    .user-logo {
      width: 142px;
      height: 142px;
      border-radius: 20px;
    }
    .msg {
      padding-left: 20px;
      font-size: 28px;
      font-weight: bold;
      .use {
        display: flex;
        align-items: center;
        font-size: 20px;
        padding-top: 50px;
        img {
          width: 50px;
          height: 50px;
          border-radius: 25px;
        }
        span {
          padding-left: 10px;
        }
      }
    }
  }

  .checked-item {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 25px;
    font-size: 24px;
    .name {
      flex: 1;
      font-size: 28px;
    }

    .icon {
      font-size: 28px;
    }
  }

  .select-money {
    .title {
      font-size: 24px;
      padding: 30px 25px 10px 25px;
    }
    .money-cloumn {
      display: flex;
      flex-flow: row wrap;
      padding: 0 30px;
      font-size: 24px;
      .num-li {
        width: 216px;
        height: 100px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        margin: 20px 20px 0 0;
        font-size: 28px;
      }
      .num-li:nth-child(3n) {
        margin: 20px 0 0 0;
      }
      .action {
        background: #ffd917;
      }
    }
  }

  .user-count-column {
    display: flex;
    flex-flow: row wrap;
    padding: 20px 30px 0;
    font-size: 24px;
    .item {
      padding: 18px 60px 0 0;
    }
    .item:nth-child(2n) {
      padding: 18px 0 0 0;
    }
  }

  .item-hr {
    height: 2px;
    width: calc(100% - 60px);
    margin: 48px 30px 0;
  }

  .progress {
    padding: 0 30px;
    border-bottom: 134px solid #fff;
    .progress-title {
      padding: 40px 0 70px 0;
    }
    .progress-num {
      height: 10px;
      width: 100%;
      border-radius: 10px;
      background: #eaeaea;
      position: relative;
      font-size: 20px;
      img {
        width: 44px;
        height: 44px;
      }
      .start-num {
        position: absolute;
        left: 0;
        top: 30px;
      }
      .end-num {
        position: absolute;
        right: 0;
        top: 30px;
      }
      .now-num {
        position: absolute;
        left: 0;
        top: -17px;
        width: 160px;
        text-align: center;
        transform: translateX(-80px);

        .num {
          position: absolute;
          left: 0;
          top: -32px;
          width: 160px;
          text-align: center;
        }
        .content {
          position: relative;
        }
      }
    }
  }
  .pay-action {
    height: 124px;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 30px;
    .left-msg {
      flex: 1;
    }
    .pay-but {
      width: 150px;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ff494d;
      color: #fff;
      border-radius: 10px;
      font-size: 32px;

    }
  }

  .city-f {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    .area {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
}
</style>