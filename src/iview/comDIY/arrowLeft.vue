<style lang="less" scoped>
  .arrow {
    position: relative;
    /*left: 50px;*/
    width: 100px;
    border-radius: 8px;
    background-color: currentColor;
    color: #ffffff;
    bottom: 30px;
  }
  /*箭头向左*/
  .arrow-left {
    position:absolute;
    right:100%;
    top:15px;
    width:0;
    height:0;
    border-width:8px;
    border-style:solid;
    border-color:transparent;
    margin-bottom:8px;
    border-right-width:14px;
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
    <div class="arrow" :style="{left: menuLeft}">
      <i class="arrow-left"></i>
      <div class="position">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "arrowLeft",
      props: {
        menuLeft: {
          type: String,
          default: '50px',
        }
      },
      data () {
          return {
          }
      }
    }
</script>
