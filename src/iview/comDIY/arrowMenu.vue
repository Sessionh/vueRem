<style lang="less" scoped>
  .headerDiv {
  }
  .arrowLeft {
    display: none;
    position: absolute;
    left: 55px;
  }
  .icon {
    cursor:pointer;
    width: 50px;
  }
  .father:hover  .arrowLeft{
    display: inline;
  }
</style>
<template>
  <div>
    <div class="father" style="width: 50px;">
      <span class="icon">
        <Icon  type="funnel" size="22"></Icon>
      </span>
      <div class="arrowLeft">
        <arrow-left :menuLeft="menuLeft">
          <slot></slot>
        </arrow-left>
      </div>
    </div>
  </div>
</template>
<script>
  import arrowLeft from './arrowLeft';
  export default {
    components: {
      arrowLeft
    },
    props: {
      menuLeft: {
        type: String,
        default: '100px'
      }
    },
    data () {
      return {

      }
    }

  }
</script>
