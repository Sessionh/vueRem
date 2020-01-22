<template>
  <div class="home">
    <BScroll>
      <div class="demo">开始打开</div>
      
     

    </BScroll>
    <van-overlay :show="show" @click="show = false" />

  </div>
</template>

<script>
import BScroll from '@/components/BScroll'
export default {
  components: {
    BScroll
  },
  data() {
    return {
      show: false

    }
  },
  created() {
    this.$toast('通知内容');
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
