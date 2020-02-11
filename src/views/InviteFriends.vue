<template>
  <div class="invite-friends">
    <img
      class="container-bg-img"
      src="inivteFriends/yqyj@3x.png"
    >
    <div class="invite-container">
      <div class="money-content">

        <img
          class="bg-img"
          src="inivteFriends/yqyj_hb@3x.png"
        >
        <div class="msg">
          <span class="left-title">
            <div class="but">新人红包</div>
            <p>最高可以领取现金红包</p>
          </span>
          <span class="right-num">
            ￥888

          </span>

        </div>

      </div>

      <div class="inviter-friends-step">
        <img
          class="bg-img"
          src="inivteFriends/yqyj_bg2@3x.png"
        >
        <div class="content">
          <div class="item" v-for="(item, index) in stepList" :key="index">
            <img
              class="bg-step-img"
              src="inivteFriends/yqyj_hb_bg@3x.png"
            >
            <div class="content">
              <div class="left-name">
                第{{item.step}}步
              </div>
              <div class="right-msg">
                <div>邀请好友下载课池APP</div>
                <div>{{item.msg}}</div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="invite-but">
        立即邀请好友
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      stepList: [
        {
          step: '一',
          msg: '好友下载成功后即可获得现金红包'
        },
        {
          step: '二',
          msg: '好友下载成功后即可获得现金红包'
        },
        {
          step: '三',
          msg: '好友下载成功后即可获得现金红包'
        }
      ]

    }
  },


}
</script>
<style lang="scss" scoped>
.invite-friends {
  position: relative;
  width: 750px;
  height: 1828px;
}
.container-bg-img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.invite-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

.money-content {
  width: 684px;
  height: 190px;
  position: relative;
  margin: 750px auto 0 auto;
  .bg-img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .msg {
    height: 100%;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    .left-title {
      flex: 1;
      text-align: right;
      color: #ff740b;
      font-size: 28px;
      font-weight: bold;
      .but {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 30px;
        background: #ff8c35;
        color: #fbe1ad;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 12px;
      }
    }
    .right-num {
      flex: 1;
      text-align: center;
      font-size: 60px;
      font-weight: bold;
      color: #fe332a;
    }
  }
}

.inviter-friends-step {
  position: relative;
  z-index: 2;
  width: 700px;
  height: 684px;
  margin: 36px auto;

  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .content {
    position: relative;
    z-index: 2;
    padding: 80px 50px 0 50px;
    .item {
      width: 594px;
      height: 144px;
      position: relative;
      margin-top: 30px;
      .bg-step-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .content {
        position: relative;
        z-index: 2;
        padding: 0;
        display: flex;
        align-items: center;
        height: 100%;
        .left-name {
          width: 166px;
          padding: 0 22px;
          font-weight: bold;
          color: #fff;
        }
        .right-msg {
          flex: 1;
          padding: 0 22px;

          div:first-child {
            color: #fa6207;
            font-weight: bold;
            padding: 18px 0;
          }
          div:last-child {
            color: #999999;
            font-size: 20px;
          }
        }
      }
    }
  }
}

.invite-but {
  width: 614px;
  height: 100px;
  background: linear-gradient(to top, #ffbc31, #ffda27);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
}
</style>