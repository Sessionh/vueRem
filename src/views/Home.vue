<template>
  <div class="home">
    <BScroll :isLoad="false">
      <div class="ul">
        <div
          class="item"
          @click="detail('/vip')"
        >
          VIP
        </div>
        <div
          class="item"
          @click="detail('/joinPartar')"
        >
          加盟合作
        </div>
        <div
          class="item"
          @click="detail('/shopDetails')"
        >
          商品详情
        </div>
        <div
          class="item"
          @click="detail('/shareCode')"
        >
          分享码
        </div>
        <div
          class="item"
          @click="detail('/ganeralize')"
        >
          推广
        </div>

        <div
          class="item"
          @click="detail('/hotRedPacket')"
        >
          刺激红包
        </div>
        <div
          class="item"
          @click="detail('/taskRedPacket')"
        >
          任务红包
        </div>

        <div
          class="item"
          @click="detail('/inviteFriends')"
        >
          邀请有奖
        </div>

        <div
          class="item"
          @click="detail('/appDownload')"
        >
          APP下载页
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
      this.$router.push({
        path: val
      })

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
