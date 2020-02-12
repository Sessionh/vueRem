<template>
  <div class="home">
   
      <div class="demo border-bottom">about</div>
      <van-button type="primary">可视对讲</van-button>
  </div>
</template>

<script>
// import BScroll from '@/components/BScroll'
export default {
  components: {
    // BScroll
  },
  data() {
    return {
      data: ''

    }
  }


}
</script>
<style lang="scss"  scoped>
.home {
  height: 100%;
  width: 100%;
}
.demo {
  font-size: 28px;
  font-weight: bold;
  height: 80px;
  width: 100%;
  
}
.add {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;

}
</style>
