<style lang="less" scoped>
  .arrow {
    position: absolute;
    left: 50px;
    top: -5px;
    width: 100px;
    border-radius: 8px;
    background-color: currentColor;
    color: #ffffff;
  }
  /*箭头向左*/
  .arrow-left {
    position:absolute;
    right:100%;
    top:10px;
    width:0;
    height:0;
    border-width:8px;
    border-style:solid;
    border-color:transparent;
    margin-bottom:8px;
    border-right-width:16px;
    border-right-color:currentColor;
    color:#ffffff;
  }
  .position {
    text-align: center;
    color: black;
  }
</style>
<template>
  <div>
    <div class="arrow">
      <i class="arrow-left"></i>
      <div class="position">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "arrowLeft"
    }
</script>
