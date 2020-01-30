<template>
  <div class="share-code">
    <BScroll
      :isTop="true"
      :bounce="false"
    >
      <div class="card">
        <div class="title">
          <img src="codeShare/组 82.png">
          <span>
            <p class="name">如人饮水暖</p>
            <p class="msg">快去分享给你的小伙伴吧</p>
          </span>
        </div>
        <div class="line-hr">
          <span class="left-circle"></span>
          <span class="right-circle"></span>
        </div>

        <div class="code">
          <img src="codeShare/EWM1.png">
        </div>

      </div>

      <div class="more-type">
        <div class="name">更多方式分享</div>
        <div class="tabs">
          <span class="item">
            <img src="codeShare/WX.png">
            <p>微信</p>
          </span>
          <span class="item">
            <img src="codeShare/PYQ.png">
            <p>朋友圈</p>
          </span>
          <span class="item">
            <img src="codeShare/QQ.png">
            <p>QQ</p>
          </span>
           <span class="item">
            <img src="codeShare/wb.png">
            <p>微博</p>
          </span>

        </div>

      </div>
    </BScroll>

  </div>
</template>
<script>
import BScroll from 'components/BScroll.vue';
export default {
  components: {
    BScroll
  }

}
</script>
<style lang="scss" scoped>
.share-code {
  height: 100%;
  width: 100%;
  background: #ffd917;
  .card {
    height: 750px;
    width: 634px;
    background: #fff;
    border-radius: 20px;
    margin: 90px auto 0 auto;
    padding: 40px 0;

    .title {
      display: flex;
      align-items: center;
      padding:0 40px;
      img {
        width: 90px;
        height: 90px;
      }
      span {
        padding-left: 10px;
        .name {
          font-weight: bold;
        }
        .msg {
          font-size: 24px;
          color: #999999;
          padding-top: 10px;
        }
      }
    }
    .code {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 70px;
      margin: 30px 80px 0 80px;
      @include border_1px("", #f8f8f8);
      img {
        width: 340px;
        height: 340px;
      }
    }
    .line-hr {
      position: relative;
      height: 36px;
      width: 100%;
      overflow: hidden;
      .left-circle {
        position: absolute;
        height: 36px;
        width: 36px;
        left: -22px;
        background: #ffd917;
        border-radius: 36px;

      }

       .right-circle {
        position: absolute;
        height: 36px;
        width: 36px;
        right: -22px;
        background: #ffd917;
        border-radius: 36px;

      }
    }
  }

  .more-type {
    margin-top: 70px;
    text-align: center;

    .name {
      color: #ffeda7;
    }
    .tabs {
      display: flex;
      color: #fff;
      font-weight: bold;
      align-items: center;
      justify-content: center;
      padding-top: 50px;
      .item {
        padding: 0 40px;
        p {
          margin-top: 10px;
        }
      }
    }
  }
}

.van-nav-bar {
  background: #ffd917;
}
</style>