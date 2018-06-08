<template>
  <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">

    <Submenu v-for="items in menuList"  :name="items.name" :key="items.name">
      <template slot="title">
        <Icon :type="items.icon"></Icon>
        {{items.title}}
      </template>

      <MenuItem  v-if="itemRen.children.length  < 1" v-for="itemRen in items.children" :name="itemRen.name" :key="itemRen.name">{{itemRen.title}}</MenuItem>

      <Submenu v-if="itemSubs.children.length >= 1" v-for="itemSubs in items.children" :name="items.name" :key="items.name" >
        <template slot="title">
          <Icon type="ios-navigate"></Icon>{{itemSubs.name}}
        </template>
        <MenuItem v-for="itemSub in itemSubs.children" :name="itemSub.name" :key="itemSub.name" >{{itemSub.name}}</MenuItem>
      </Submenu>
    </Submenu>

  </Menu>
</template>

<script>
    export default {
      components: {
      },
      name: "menuSum",
      props: {
        menuList: {
          type: Array,
          default: []
        }
      }


    }
</script>

<style scoped>

</style>
