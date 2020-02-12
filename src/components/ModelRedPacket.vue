<template>
  <div class="model-red-packet" @touchmove.prevent>
     <div class="content">
       <img class="bg-img" src="shopDetails/bg@3x.png">
       <img class="rob-img" src="shopDetails/qq@3x.png" @click="action">
       <img class="close-img" src="shopDetails/gb@3x.png" @click="close">

     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('close')

    },
    action() {
      this.$emit('action')
    }
  }
}
</script>
<style lang="scss" scoped>
.model-red-packet {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 530px;
    height: 638px;
    position: relative;
    .bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

    }
    .rob-img {
      width: 210px;
      height: 210px;
      position: relative;
      z-index: 2;
      margin-top: 350px;
      margin-left: 160px;

     

    }
    .close-img {
      width: 46px;
      height: 46px;
      position: absolute;
      z-index: 2;
      right: 26px;
      top: 26px;

    }

  }
}
</style>