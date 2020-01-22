<template>
  <div id="app">
    <div
      v-if="$route.meta.showHeader"
      class="app-header"
    >
      <van-nav-bar
        :title="$route.meta.title"
        :right-text="$route.meta.rightText"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div
      class="wrap"
      :style="{top: $route.meta.showHeader ? '1.22667rem' : '0', bottom: $route.meta.showFoot ? '1.33333rem' : '0'}"
    >
      <div class="main">
        <router-view />
      </div>
    </div>
    <div
      class="app-foot"
      v-if="$route.meta.showFoot"
    >

      <van-tabbar
        v-model="active"
        :border="false"
      >
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()

    },
    onClickRight() {

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 28px;
  overflow: hidden;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.wrap {
  position: absolute;
  top: 0;
  width: 100%;
}
.main {
  width: 100%;
  height: 100%;
}
.foot {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  z-index: 5;
}
.app-header .van-nav-bar {
  @include border_1px(bottom);
}

.van-hairline--bottom::after {
  border-bottom-width: 0 !important;
}

.app-foot .van-tabbar {
  @include border_1px(top);
}

.van-overlay {
  z-index: 1000 !important;
}
</style>
