<template>
  <div class="shop-details">
    <!-- <BScroll
      :isTop="true"
      :bounce="false"
    > -->
      <van-swipe
        class="van-swipe"
        @change="onChange"
      >
        <van-swipe-item
          v-for="(item, index) in imgList"
          :key="index"
        >
          <img
            class="img"
            :src="item.url"
          >
        </van-swipe-item>

        <div
          class="custom-indicator"
          slot="indicator"
        >
          {{ current + 1 }}/{{imgList.length}}
        </div>
      </van-swipe>

      <div class="head-content">
        <div class="shop-title">
          送女友.新年礼物.INS.时尚欧美小重防水石英女士腕表平价学生上课打瞌睡看到
        </div>
        <div class="shop-price">
          <div class="price-before">
            <p class="left-text">
              <span class="name">券后价</span>
              <span class="unit">￥</span>
              <span class="money">78.88</span>
            </p>

            <span class="right-text">KB兑换 0.1333KB</span>

          </div>
          <div class="price-after">
            <div class="after-left">
              原价￥ <span class="num">108.00</span>
            </div>
            <span>销售56.6万</span>

          </div>

          <div class="message">
            <span class="tit">温馨提示：</span>
            <span class="text">下单购买成功，最高可领取100元红包</span>
            <span class="border_up"></span>

          </div>

          <div class="share-msg">
            <div class="share-but">分享</div>
            <span class="content">VIP分享赚 14.44元</span>
            <img src="shopDetails/spxq_share.png">

          </div>

        </div>

      </div>

      <div class="quan">
        <div class="name">免费领取优惠券</div>
        <div class="quan-li">

          <span class="left-text">
            <p class="count">
              ￥<span>60</span>
            </p>
            <p>有效期：2019.12.19-2020.02.02</p>
          </span>

          <span class="line-hr">
            <div class="circle-top"></div>
            <div class="circle-bottom"></div>
            <div class="line"></div>
          </span>

          <span class="but">
            立即领取
          </span>

        </div>

      </div>

      <div class="go-shop">
        <img
          class="logo"
          src="shopDetails/spxq_tx.png"
        >
        <span class="name">
          <p>Olivia burton旗舰店</p>
          <p>在线销售120件</p>
        </span>
        <span class="but">
          进店
        </span>
        <img
          class="right-icon"
          src="shopDetails/spxq_right.png"
        >

      </div>

      <div class="detail-tabs">
        <span class="detail-but">商品详情</span>
        <span class="num-but">商品参数</span>
      </div>

      <div class="detail-content border-iphone">
        <p>详情</p>
        <img src="detail.png">

      </div>

    <!-- </BScroll> -->

    <div class="action-tabs border-iphone">
      <span class="left-text">VIP分享赚12.23元</span>
      <span class="but">
        <div>
          <p>领券购买</p>
          <p>￥78.39</p>

        </div>

      </span>

      <span class="but">
        <div>
          <p>KB兑换</p>
          <p>0.15kb</p>

        </div>

      </span>

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
      current: 0,
      imgList: [
        {
          url: 'shopDetails/spxq_banner.png'
        },
        {
          url: 'shopDetails/spxq_banner.png'
        }
      ]

    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }

  }

}
</script>
<style lang="scss" scoped>
/*向上*/
.border_up {
  width: 0;
  height: 0px;
  border-width: 24px;
  border-style: solid;
  border-color: transparent transparent #f6f6f6; /*透明 透明  灰*/
  position: absolute;

  left: 50px;
  top: -47px;
}

.shop-details {
  width: 100%;
  height: 100%;
}
.van-swipe {
  height: 620px;
  position: relative;
  .custom-indicator {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.3);
    padding: 0px 14px;
    border-radius: 30px;
    color: #fff;
  }
  .img {
    width: 100%;
    height: 100%;
  }
}
.head-content {
  padding: 30px 25px;
  background: #fff;
  .shop-title {
    font-size: 32px;
    font-weight: bold;
  }

  .shop-price {
    margin-top: 26px;
    .price-before {
      color: #ff494d;
      display: flex;
      align-items: flex-end;

      .left-text {
        flex: 1;
        .name {
          font-size: 22px;
        }
        .unit {
          font-size: 20px;
          padding: 0 4px 0 0;
        }
        .money {
          font-size: 30px;
          font-weight: bold;
        }
      }
      .right-text {
        background: #feeee8;
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 20px;
        color: #fd8d70;
      }
    }

    .price-after {
      display: flex;
      color: #999999;
      font-size: 20px;
      padding-top: 20px;
      .after-left {
        flex: 1;
        span {
          text-decoration: line-through;
        }
      }
    }

    .message {
      font-size: 20px;
      padding: 14px;
      background: #f6f6f6;
      border-radius: 12px;
      margin-top: 30px;
      display: flex;
      position: relative;

      .tit {
        color: #999999;
      }
      .text {
        flex: 1;
      }
    }

    .share-msg {
      color: #ff494d;
      display: flex;
      margin-top: 30px;
      .share-but {
        width: 70px;
        height: 35px;
        background: #fff1f1;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
      }
      .content {
        font-size: 26px;
        font-weight: bold;
        padding: 0 30px;
        flex: 1;
      }

      img {
        height: 44px;
        width: 44px;
      }
    }
  }
}

.quan {
  margin-top: 20px;
  background: #fff;
  padding: 25px 25px 20px 25px;
  .name {
    color: #999999;
  }
  .quan-li {
    display: flex;
    align-items: center;
    height: 160px;
    background: #fef1e6;
    margin-top: 30px;
    padding-left: 20px;
    border-radius: 12px;
    .left-text {
      flex: 1;
      color: #fc5e2b;
      font-size: 20px;
      .count {
        font-size: 24px;
        padding-bottom: 26px;

        span {
          font-size: 40px;
          font-weight: bold;
        }
      }
    }
    .line-hr {
      width: 20px;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      overflow: hidden;
      .circle-top {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #fff;
        position: absolute;
        top: -10px;
        left: 0;
        z-index: 1;
      }

      .circle-bottom {
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #fff;
        position: absolute;
        bottom: -10px;
        left: 0;
        z-index: 1;
      }

      .line {
        height: 100%;
        width: 2px;
        @include border_1px(left, #fc5e2b, dashed);
      }
    }

    .but {
      width: 146px;
      height: 58px;
      background: #fc5e2b;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      color: #fff;
      margin: 0 30px;
    }
  }
}

.go-shop {
  background: #fff;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 20px 25px;
  .logo {
    height: 90px;
    width: 90px;
    margin-right: 20px;
  }
  .name {
    flex: 1;
    font-size: 20px;
    p:nth-child(1) {
      font-weight: bold;
      font-size: 26px;
    }
    p:nth-child(2) {
      color: #999999;
      margin-top: 14px;
    }
  }
  .but {
    font-weight: bold;
    font-size: 24px;
    padding-right: 6px;
  }
  .right-icon {
    height: 28px;
    width: 28px;
  }
}

.detail-tabs {
  display: flex;
  height: 80px;
  width: 100%;
 
  .detail-but,
  .num-but {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff494d;
    color: #fff;
    font-weight: bold;
  }
  .num-but {
    background: #000000;
  }
}
.detail-content {
  width: 100%;
   padding-bottom: 90px;
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
}

.action-tabs {
  min-height: 90px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  background: #fff;
  font-weight: bold;
  .but {
    width: 256px;
    height: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff7d8c;
    color: #fff;
    font-size: 24px;
  }
  .but:last-child {
    background: #ff494d;
  }
  .left-text {
    flex: 1;
    font-size: 24px;
    text-align: center;
    color: #ff494d;
  }
}
</style>