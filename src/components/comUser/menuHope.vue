<style scoped>
  .hoverArrow {
    color: #ffffff;
    /*left: -20px;*/
  }
  .arrowLeft {
    display: none;
    position: absolute;
    left: 70px;
    margin: 5px;
    z-index: 10;
  }
  .hovers {

  }
  .hovers:hover .spanMenu{
    background: #3080fe;
  }
  .hovers:hover .arrowLeft {
    display: inline;
  }
  .spanMenu {
    /*background: #dddee1;*/
    padding: 16px 16px 10px 16px;
    margin-left: 0;
    position: relative;
    left: -10px;
    cursor: pointer;
    border-radius: 10px;
  }
</style>
<template>
  <div class="hovers" style="width: 80px;padding: 10px 0 10px 0">
    <span class="spanMenu"><Icon  class="hoverArrow" size="22" :type="iconType"></Icon></span>
    <div class="arrowLeft">
      <arrow-left>
        <slot></slot>
      </arrow-left>
    </div>
  </div>
</template>

<script>
  import arrowLeft from './arrowLeft';
    export default {
      name: "menuHope",
      components: {
        arrowLeft
      },
      props: {
        menuLeft: {
          type: String,
          default: '100px'
        },
        iconType: {
          type: String,
          default: ''
        },
      },
      data () {
        return {

        }
      }

    }
</script>


