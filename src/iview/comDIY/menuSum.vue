<style lang="less" scoped>
  .menuSum {
    width: 130px;
    height: 30px;
    text-align: left;
  }
  .menuLeft {
    position: relative;
    cursor: pointer;
  }
  .menuArrowLeft {
    display: none;
    position: absolute;
    left: 150px;
  }

  .menuSum:hover .menuArrowLeft {
    display: inline;
  }
  .menu ul li {
    height: 30px;
    color: #657180;
  }
  .menu ul li:hover {
    color: goldenrod;
    cursor: pointer;
  }
  .menu ul:first-child {
    margin-top: 5px
  }

</style>
<template>
  <div>
    <Menu width="auto" active-name="1-2" :open-names="['1']" mode="vertical" theme="dark" v-for="item in menuList" :key="item.name">
      <Submenu  :name="item.name">
        <template slot="title">
          <Icon :type="item.icon"></Icon>
          {{item.title}}
        </template>
          <MenuItem v-if="items.children === undefined || items.children.length === 0" v-for="items in item.children"  :key="items.name" :name="items.name">{{items.title}}</MenuItem>
          <Submenu v-if="items.children !== undefined && items.children.length > 0" v-for="items in item.children"  :key="items.name" :name="items.name">
            <template slot="title">{{items.title}}</template>
            <MenuItem v-for="itemSub in items.children" :name="itemSub.name" :key="itemSub.name">{{itemSub.title}}</MenuItem>
          </Submenu>

      </Submenu>

    </Menu>
  </div>


</template>
<script>
  export default {
    components: {

    },
    props: {
      menuList: {
        type: Array,
        default: []
      },
      menuWidth: 'auto'
    },
    data () {
      return {

      }
    }

  }
</script>
