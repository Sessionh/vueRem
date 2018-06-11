<style lang="less" scoped>

</style>
<template>
  <div>
    <ul>
      <li style="">
        <arrow-menu>
          <ul style="list-style-type: none;padding: 8px">
            <li><a href="">菜单- 1111</a></li>
            <li>菜单- 2222</li>
            <li>菜单- 3333</li>
            <li>菜单- 4444</li>
            <li>菜单- 5555</li>
            <li>
            </li>

          </ul>
        </arrow-menu>
      </li>
      <li style="">
        <arrow-menu>
          <ul style="list-style-type: none;padding: 8px">
            <li><a href="">菜单- 11112</a></li>
            <li>菜单- 22222</li>
            <li>菜单- 33332</li>
            <li>菜单- 44442</li>
            <li>菜单- 55552</li>
            <li>菜单- 6666</li>
          </ul>
        </arrow-menu>
      </li>
      <li style="">
        <menu-sum>
          <ul style="list-style-type: none;padding: 8px">
            <li><a href="">菜单- 1111</a></li>
            <li>菜单- 2222</li>
            <li>菜单- 3333</li>
            <li>菜单- 4444</li>
            <li>菜单- 5555</li>
            <li>菜单- 6666</li>
          </ul>
        </menu-sum>
      </li>
      <li style="">
        <menu-sum>
          <ul style="list-style-type: none;padding: 8px">
            <li><a href="">菜单- 11112</a></li>
            <li>菜单- 22222</li>
            <li>菜单- 33332</li>
            <li>菜单- 44442</li>
            <li>菜单- 55552</li>
            <li>菜单- 6666</li>
          </ul>
        </menu-sum>
      </li>
    </ul>

    <ul>

    </ul>

  </div>
</template>
<script>
  import arrowMenu from '../iview/comDIY/arrowMenu';
  import arrowLeft from '../iview/comDIY/arrowLeft';
  import menuSum from '../iview/comDIY/menuSum';
  export default {
    components: {
      arrowMenu,
      arrowLeft,
      menuSum
    }

  }
</script>
