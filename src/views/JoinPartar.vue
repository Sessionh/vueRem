<template>
  <div class="join-partar">
    <div class="bg-img">
      <img src="joinPartar/jm_bg1@3x.png" />
    </div>
    <div class="main">
      <BScroll
        :isTop="false"
        :bounce="false"
        class="bscroll"
      >
        <div class="contain">
          <div class="top-margin"></div>
          <div
            class="li-item"
            v-for="(item, index) in list"
            :key="index"
          >
            <div class="left-nav">
              <div class="cirle-padding">
                <div class="content">
                </div>
              </div>
              <div class="line-out">
              </div>
            </div>
            <div class="right-card">
              <div class="content">
                <div class="title">
                  <img
                    class="icon"
                    :src="item.icon"
                  >
                  <span class="name">{{item.name}}</span>
                  <span
                    class="join_but"
                    @click="joinItem(item, index)"
                  >立即加入</span>

                </div>
                <div class="msg">
                  {{item.msg}}

                </div>

              </div>

            </div>

          </div>

        </div>
      </BScroll>

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
      list: [
        {
          icon: 'joinPartar/jm_pic1@3x.png',
          name: '教育合作商',
          msg: '我是企业法人，我在当地拥有教育资源，培训资源我对教育行业市场前景看好'
        },
        {
          icon: 'joinPartar/jm_pic2@3x.png',
          name: '推广合作商',
          msg: '我是企业法人，我在当地拥有教育资源，培训资源我对教育行业市场前景看好'
        },
        {
          icon: 'joinPartar/jm_pic3@3x.png',
          name: '创作商',
          msg: '我是企业法人，我在当地拥有教育资源，培训资源我对教育行业市场前景看好'
        },
        {
          icon: 'joinPartar/jm_pic4@3x.png',
          name: '商品供货商',
          msg: '我是企业法人，我在当地拥有教育资源，培训资源我对教育行业市场前景看好'
        },
        {
          icon: 'joinPartar/jm_pic6@3x.png',
          name: '推广合作商',
          msg: '我是企业法人，我在当地拥有教育资源，培训资源我对教育行业市场前景看好'
        }
      ]

    }
  },
  methods: {
    joinItem(val, id) { // 立即加入
      console.log(val, id)

    }
  }
}
</script>
<style lang="scss" scoped>
.join-partar {
  height: 100vh;
  width: 100%;
  background: #fb4311;
}
.bscroll {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 100%;
  // background: #fb4311;
}
.bg-img {
  width: 100%;
  height: 80vh;
  position: relative;
  z-index: 1;
  img {
    height: 100%;
    width: 100%;
  }
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
}
.contain {
  color: #fff;

  position: relative;
  z-index: 10;
  padding: 0 40px;
  .top-margin {
    min-height: 400px;
  }
  .li-item {
    display: flex;
    overflow: hidden;

    .left-nav {
      position: relative;
      .cirle-padding {
        height: 24px;
        width: 24px;
        border: 2px solid #fff;
        border-radius: 12px;

        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 10;
        .content {
          width: 15px;
          height: 15px;
          background: #fff;
          border-radius: 11px;
        }
      }
      .line-out {
        width: 4px;
        height: 100%;
        // background: #fff;
        border-left: 2px dashed #fff;

        position: absolute;
        top: 0;
        left: 12px;
      }
    }
    .right-card {
      flex: 1;
      text-align: left;
      .content {
        width: 100%;
        min-height: 200px;
        background: #fff;
        color: black;
        border-radius: 50px 10px 10px 10px;
        overflow: hidden;
        padding: 30px 30px 30px 40px;
        margin-bottom: 40px;

        .title {
          display: flex;
          align-items: center;
          color: #333333;
          .icon {
            height: 50px;
            width: 44px;
          }
          .name {
            font-size: 28px;
            font-weight: bold;
            flex: 1;
            padding: 0 12px;
          }
          .join_but {
            height: 50px;
            width: 130px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffd916;
            border-radius: 12px;
            font-size: 22px;
          }
        }

        .msg {
          color: #b0b0b0;
          font-size: 20px;
          padding-top: 20px;
        }
      }
    }
  }
 

  .li-item:last-child {
    .left-nav .line-out {
      border: none;
    }
  }
}
</style>