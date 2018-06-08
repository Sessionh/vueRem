<style scoped>
  .layout {

  }
  .layout-header {
    color: #fff;
  }
</style>
<template>
  <div class="layout">

    <Layout class="layout-main">
      <Sider hide-trigger>
        <Menu theme="dark"  active-name="1-2" :open-names="['1']">
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing"></Icon>
              1级菜单-1
            </template>
            <MenuItem name="2-1">2级-子菜单1</MenuItem>
            <MenuItem name="2-2">2级-子菜单2</MenuItem>
            <Submenu name="3">
              <template slot="title">3级-子菜单</template>
              <MenuItem name="3-1">3级-子菜单-2</MenuItem>
              <MenuItem name="3-2">3级-子菜单-3</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-gear"></Icon>
              1级菜单-2
            </template>
            <MenuItem name="4-1">2级菜单-01</MenuItem>
            <MenuItem name="4-2">2级菜单-02</MenuItem>
          </Submenu>
        </Menu>
      </Sider>

      <Layout>
        <Header>
          <div class="layout-header">hello heder</div>
        </Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </div>


</template>
<script>
  export default {

  }
</script>
