<style lang="less" scoped>
  .main{
    height: 40px;
    z-index: -1;
    overflow: hidden;
    background: #f0f0f0;
    .scrollBody{
      position: relative;
      box-sizing: border-box;
      /*padding-right: 120px;*/
      width: 100%;
      height: 100%;
      z-index: 1;
      .scrollDiv{
        position: absolute;
        padding: 2px 10px;
        overflow: visible;
        white-space: nowrap;
        transition: left .3s ease;
        z-index: 8;
      }
      .checkTag{
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        padding-top: 8px;
        text-align: center;
        width: 110px;
        height: 100%;
        background: white;
        box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
        z-index: 10;
      }
    }
  }
</style>
<template>
    <div class="main">
      <div ref="scrollCon" @DOMMouseScroll="handleScroll" @mousewheel="handleScroll" class="scrollBody">
        <div  ref = "scrollBody"  class="scrollDiv" :style="{left: tagBodyLeft + 'px'}">
          <Tag v-for="item in tagList" type="dot"
               :key="item.name"
               :name="item.path"
               :closable="item.name !== '首页'"
               :color="tagColor === item.name ? 'yellow': ''"
               @click.native="clickTag(item)"
               @on-close="closeTag(item)"

          >{{item.name}}</Tag>
        </div>
      </div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        transfer: true,
        tagBodyLeft: 0
      }
    },
    computed: {
      tagColor () {
        return this.$store.state.app.tagColor;
      },
      tagList () {
        return this.$store.state.app.tagList;
      }
    },
    methods: {
      handleScroll (e) {
        let type = e.type;
        let delta = 0;
        if (type === 'DOMMouseScroll' || type === 'mousewheel') {
          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40;
        }
        let left = 0;
        if (delta > 0) {
          left = Math.min(0, this.tagBodyLeft + delta);
        } else {
          if (this.$refs.scrollCon.offsetWidth - 100 < this.$refs.scrollBody.offsetWidth) {
            if (this.tagBodyLeft < -(this.$refs.scrollBody.offsetWidth - this.$refs.scrollCon.offsetWidth + 100)) {
              left = this.tagBodyLeft;
            } else {
              left = Math.max(this.tagBodyLeft + delta, this.$refs.scrollCon.offsetWidth - this.$refs.scrollBody.offsetWidth - 100);
            }
          } else {
            this.tagBodyLeft = 0;
          }
        }
        this.tagBodyLeft = left;
      },
      // 点击标签 事件
      clickTag (data) {
        this.$store.commit('setTagColor', data.name);
        this.$router.push({
          name:  data.path
        });
        this.$store.commit('setMenuPath', data.path);
      },
      // 关闭标签
      closeTag (val) {
        let name = val.name;
        if (this.tagBodyLeft < -100) {
          this.tagBodyLeft = this.tagBodyLeft + 100;
        } else if (this.tagBodyLeft < 0 && this.tagBodyLeft > -100) {
          this.tagBodyLeft = 0;
        }
        let colorName = this.$store.state.app.tagColor;
        let TagList = this.$store.state.app.tagList;
        let result = [];
        TagList.forEach((res, i) => {
          if (res.name !== name) {
            result.push(res);
          } else {
            if (colorName === res.name) {
              if (i > 0) {
                this.$store.commit('setTagColor', TagList[i-1].name);
                this.$router.push({
                  name:  TagList[i-1].path
                });
                this.$store.commit('setMenuPath', TagList[i-1].path);
              } else {
                this.$store.commit('setTagColor', TagList[i+1].name);
                this.$store.commit('setMenuPath', TagList[i+1].path);
                this.$router.push({
                  name:  TagList[i+1].path
                });
              }
            }
          }
        });
        this.$store.commit('closeTag', result)
      },
      // 初始化 标签 左边距
      setTagBodyLeft () {
        this.tagBodyLeft = 0;
      }
    },
    created () {

    }
  }
</script>
