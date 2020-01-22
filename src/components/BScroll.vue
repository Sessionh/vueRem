<template>

  <div class="btscroll">
    <div
      ref="bsWrap"
      class="bs-container"
      :class="scrollX ? 'bs-container-x' : ''"
    >

      <div class="content">
        <slot></slot>
        <div
          class="bottom-msg"
          v-if="isBottom"
        >
          <div
            v-if="!isLoad && data  && data.length >= noMoreNum"
            class="text"
          >{{isMore?  tip : noMoreText}}</div>

          <div
            v-if="!isLoad && (!data  || data.length === 0) && isNoData"
            class="text"
          >{{noDataText}}</div>
          <Button
            v-if="isLoad"
            :isLoad="true"
          ></Button>

        </div>

      </div>

    </div>

    <div
      class="to_top"
      v-if="isShowTop && isTop"
      @click="toTop"
    >
      <img src="to_top.png">
    </div>

  </div>

</template>
<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
import ScrollBar from '@better-scroll/scroll-bar'
import MouseWheel from '@better-scroll/mouse-wheel'
import Button from './mButton';

BScroll.use(Pullup);
BScroll.use(ScrollBar);
BScroll.use(MouseWheel)

export default {
  components: {
    Button
  },
  props: {
    /**
    * 列表的数据
    */
    data: {
      default: null
    },
    /**
    * 点击列表是否派发click事件
    */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },

    /**
    * 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
    */
    bounce: {
      type: Boolean,
      default: true
    },
    /**
    *  横向滚动
    */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     *  纵向滚动
     */
    scrollY: {
      type: Boolean,
      default: true
    },
    /**
     *  控制滚动条 显示
     */
    scrollbar: {
      type: Boolean,
      default: false
    },
    freeScroll: {
      type: Boolean,
      default: false
    },
    isOnScroll: {
      type: Boolean,
      default: true
    },
    /**
    *  配置上拉加载 距离底部 多远 触发上拉加载  false 关闭上拉刷新
    */
    pullUpLoad: {
      type: Object,
      default: () => {
        return {
          threshold: 50
        }
      }
    },
    /**
     *  上拉默认显示
     */
    tip: {
      type: String,
      default: "上拉加载更多"
    },
    /**
     *  没有更多数据显示
     */
    noMoreText: {
      type: String,
      default: '没有更多数据'
    },
    /**
    *  显示 没有更多数据 最小数组长度
    */
    noMoreNum: {
      type: String,
      default: '3'
    },
    /**
     *  显示 加载动画
     */
    isLoad: {
      type: Boolean,
      default: false,
    },
    /**
    *  控制上拉加载更多 和 无更多数据 状态
    */
    isMore: {
      type: Boolean,
      default: false,
    },
    /**
    *  控制显示返回顶部 图标
    */
    isTop: {
      type: Boolean,
      default: true
    },
    /**
    *  控制底部显示
    */
    isBottom: {
      type: Boolean,
      default: true,

    },
    /**
   *  是否显示 暂无数据
   */
    isNoData: {
      type: Boolean,
      default: false,

    },
    /**
    *   暂无数据
    */
    noDataText: {
      type: String,
      default: '暂无数据',
    },
    /**
    *  开启原生滚动   
    * 可选值：'vertical' 、 原生滚动： 'horizontal'
    */
    eventPassthrough: {
      type: String,
      default: ''
    },
    mouseWheel: {
      type: Object,
      default: () => {
        return {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      }
    }



  },
  data() {
    return {
      bscroll: '',
      isShowTop: false,
      height: 0
    }
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this.scrollInit();
    }, 20);
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    scrollInit() {
      if (!this.$refs.bsWrap) {
        return;
      }

      let bounce = this.bounce ? this.bounce : {
        top: false,
        bottom: false,
        left: false,
        right: false
      }

      this.bscroll = new BScroll(this.$refs.bsWrap, {
        scrollY: this.scrollY,
        pullUpLoad: this.pullUpLoad,
        bounce: bounce,
        scrollX: this.scrollX,
        scrollbar: this.scrollbar,
        click: this.click,
        freeScroll: this.freeScroll,
        eventPassthrough: this.eventPassthrough,
        mouseWheel: this.mouseWheel
      })


      if (this.pullUpLoad) {
        this.bscroll.on('pullingUp', this.pullingUpHandler)
      }

      if (this.isOnScroll) {
        this.bscroll.on('scroll', this.onScroll)
      }


    },
    pullingUpHandler() {


      this.$emit('pullingUp')
      this.finishPullUp()

    },
    onScroll(pos) {

      if (this.isTop) { // 显示返回顶部图标

        if (pos.y <= -50) {
          if (!this.height) {
            this.height = this.$refs.bsWrap.clientHeight
          }
        }

        if (this.height && pos.y <= -this.height) {
          if (!this.isShowTop) {
            this.isShowTop = true
          }

        } else {
          if (this.isShowTop) {
            this.isShowTop = false
          }

        }

      }



    },
    refresh() {

      // 代理better-scroll的refresh方法
      this.bscroll && this.bscroll.refresh();
    },
    destroy() {
      // 代理better-scroll的refresh方法
      this.bscroll && this.bscroll.destroy();
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp()
    },
    forceUpdate() {
      this.refresh();
    },
    toTop() {
      this.bscroll && this.bscroll.scrollTo(0, 0, 100)

    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.forceUpdate();
      }, this.refreshDelay);
    }
  }

}
</script>
<style lang="scss" scoped>
.btscroll {
  height: 100%;
  width: 100%;
  position: relative;
}

.bscroll-indicator {
  background: rgba(0, 0, 0, 0.2) !important;
}

.bs-container {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .content {
    .bottom-msg {
      min-height: 100px;
      position: relative;
      color: #999999;
      font-size: 28px;

      .text {
        line-height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.bs-container-x {
  white-space: nowrap;
  overflow: hidden;
  .content {
    display: inline-block;
  }
}

.to_top {
  height: 60px;
  width: 60px;

  position: absolute;
  bottom: 100px;
  right: 25px;
  z-index: 100;
  img {
    height: 60px;
    width: 60px;
  }
}
</style>