<style lang="less" scoped>
  .headerDiv {
    /*display: inline;*/
  }
  .arrowLeft {
    /*display: inline;*/
    display: none;
    margin-top: 20px;
  }
  .icon {
    cursor:pointer;
  }
  .father:hover  .arrowLeft{
    display: inline;
  }
</style>
<template>
  <div>
    <div class="father" style="width: 40px;height:40px; background-color: #47cb89">
      <Icon class="icon" type="funnel" size="22"></Icon>
      <div class="arrowLeft">
        <arrow-left>
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
    }

  }
</script>
