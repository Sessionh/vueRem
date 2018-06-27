<style lang="less" scoped>
  .menuTagHide {
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
  .menuTagHide:hover .uls{
    display: inline;
  }

  .spanTag {
    cursor: pointer;
    padding: 8px 0 8px 0;
    margin-top: 5px;

  }
  .spanTag1 {
    cursor: pointer;
    padding: 8px 0 8px 0;

  }
  .spanTag:hover {
    padding: 8px 0 8px 0;
    background-color: #f8f8f9;
  }
  .spanTag1:hover {
    padding: 8px 0 8px 0;
    background-color: #f8f8f9;
  }


</style>
<template>
  <div style="position: relative;">
    <div>
      <tag-menu ref="tags"></tag-menu>
    </div>
    <div class="menuTagHide" @mouseleave="butMouseOut">
      <Button @mouseenter.native="butMouseOver"   type="primary" size="small">
        标签选项
        <Icon type="arrow-down-b"></Icon>
      </Button>
      <div style="background: #ffffff;">
        <ul ref="uls"  class="uls" @mouseleave.native="butMouseOut" style="list-style-type: none;display: none;">
          <li class="spanTag" @click="spanTagClick(1)">关闭其他</li>
          <li class="spanTag1" @click="spanTagClick(2)">关闭所有</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import TagMenu from './tagMenu';
  export default {
    components: {
      TagMenu
    },
    data () {
      return {
        button: 'button',
        transfer: false,
      }
    },
    methods: {
      butMouseOver () {
        this.$refs.uls.style.display = 'inline'
      },
      butMouseOut () {
        this.$refs.uls.style.display = 'none'
      },
      spanTagClick (val) {
        if (val === 1) {
         this.$store.commit('closeCurrentTag');
        } else {
          this.$store.commit('closeAllTagList', this);
          this.$store.commit('initMenuPath');
        }
        this.$refs.tags.setTagBodyLeft();
      }
    }
  }
</script>
