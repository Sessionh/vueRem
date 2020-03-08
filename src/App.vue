<template>
  <div id="app">
    <div
      v-if="$route.meta.showHeader"
      class="app-header"
    >
      <van-nav-bar
        :style="{background: $route.meta.hdColor, border:  $route.meta.borderHide ? 'none' : ''}"
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
        <van-tabbar-item
          v-for="(item, index) in menus"
          :key="index"
          :icon="item.icon"
        >{{item.name}}</van-tabbar-item>

      </van-tabbar>

    </div>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      menus: [
        {
          icon: 'home-o',
          name: '首页'
        },
        {
          icon: 'search',
          name: '分类'
        },
        {
          icon: 'friends-o',
          name: '我的'
        },
        {
          icon: 'setting-o',
          name: '主页'
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()

    },
    onClickRight() {

    }
  }, 
  created() {
    localStorage.setItem('token', '9f553b8f6772d415ae4b80a14e08e1bf')
  }
}
</script>

<style lang="scss">
html {
  background: #f6f6f6;
}
progress {
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  background: #ffe0e4 !important;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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
  z-index: 100;
 .van-nav-bar .van-icon   {
    color: #333333;
  }
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
  z-index: 100;
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
