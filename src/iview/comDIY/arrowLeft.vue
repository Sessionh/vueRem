<style lang="less" scoped>
  .arrow {
    display:inline-block;
    position:relative;
    background-color:#ffffff;
    padding: 10px 25px 10px 25px;
    color: #CCC;
    text-align:center;
    font-size:14px;
    font-family: 微软雅黑;
    border-radius:10px;
  }
  .arrowLeft {
    width:0;
    height:0;
    border-width:8px 10px 10px 0;
    border-style:solid;
    border-color:transparent #ffffff transparent transparent;/*透明 灰 透明 透明 */
    position: absolute;
    left: -10px;
    top: 9px;
  }
</style>
<template>
  <div>
    <div class="arrow">
      <i class="arrowLeft"></i>
      <div style="width: 80px">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "arrowLeft",
      props: {
      },
      data () {
          return {
          }
      }
    }
</script>
