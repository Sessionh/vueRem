<style lang="less" scoped>
  .headerDiv {
    /*display: inline;*/
  }
  .arrowLeft {
    /*display: inline;*/
    display: none;
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
    <div class="father" style="width: 40px;">
      <Icon class="icon" type="funnel" size="22"></Icon>
      <div class="arrowLeft">
        <arrow-left>
          <ul style="list-style-type: none;padding: 8px">
            <li><a href="">菜单- 1111</a></li>
            <li>菜单- 2222</li>
            <li>菜单- 3333</li>
            <li>菜单- 4444</li>
            <li>菜单- 5555</li>
            <li>菜单- 6666</li>
          </ul>
        </arrow-left>
      </div>
    </div>
  </div>
</template>
<script>
  import arrowLeft from '../iview/comDIY/arrowLeft';
  export default {
    components: {
      arrowLeft
    }

  }
</script>
