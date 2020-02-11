<template>
  <div class="invite-friends">
    <img
      class="container-bg-img"
      src="inivteFriends/yqyj@3x.png"
    >

    <div class="money-content">
      <div class="content">
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

    </div>

  </div>
</template>
<script>
export default {

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

.money-content {
  position: absolute;
  z-index: 2;
  width: 684px;
  height: 190px;
  top: 750px;
  left: 33px;
 

  .content {
    position: relative;
    width: 100%;
    height: 100%;
     margin: 0 auto;
    

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
}
</style>