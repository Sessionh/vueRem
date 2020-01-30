<template>
  <div class="home">
    <BScroll :isLoad="false">
      <div class="ul">
        <div class="item" @click="detail('/vip')">
          VIP
        </div>
        <div class="item" @click="detail('/joinPartar')">
          加盟合作
        </div>
        <div class="item" @click="detail('/shopDetails')">
          商品详情
        </div>
        <div class="item" @click="detail('/shareCode')">
          分享码
        </div>
         <div class="item" @click="detail('/ganeralize')">
          推广
        </div>

      </div>

    </BScroll>
  </div>
</template>

<script>
import BScroll from '@/components/BScroll';

export default {
  components: {
    BScroll,

  },
  data() {
    return {
      show: false

    }
  },
  methods: {
    detail(val) {
      this.$router.push(val)

    }

  },
  created() {
    // this.$toast('通知内容');
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
.ul {
  display: flex;
  flex-flow: row wrap;
  padding: 20px;
}
.item {
  padding: 20px 30px;
  background: #dcdcdc;
  margin: 20px 20px 0 0;
  border-radius: 12px;
  
}
</style>
