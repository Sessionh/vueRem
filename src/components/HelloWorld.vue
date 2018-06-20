<style lang="less" scoped>
  .mainMenu {
    position: relative;
    z-index: 30;
  }

</style>
<template>
  <div>
    <div class="mainMenu">
      <menu-sum :menuSumList="menuList"></menu-sum>
    </div>
    <div>
      <tag-main></tag-main>
    </div>
  </div>
</template>
<script>
  import arrowLeft from '../iview/comDIY/arrowLeft';
  import menuHope from '../iview/comDIY/menuHope';
  import menuSum from '../iview/comDIY/menuSum';
  import TagMenu from '../iview/comDIY/tagMenu';
  import TagMain from '../iview/comDIY/tagMain';
  export default {
    components: {
      arrowLeft,
      menuHope,
      menuSum,
      TagMenu,
      TagMain
    },
    data () {
      return {
        button: 'button',
        transfer: false,
        menuList: [
          {
            path: '/user',
            icon: 'gear-b',
            name: 'user',
            title: '系统管理',
            access: 0,
            component: 'Main',
            children: [
              {
                path: '/userName',
                icon: 'person-add',
                name: 'userName',
                title: '用户管理',
                access: 0,
                component: 'jax/user/user',
                children: [
                  {
                    path: '/userName',
                    icon: 'person-add',
                    name: 'userName',
                    title: '用户管理',
                    access: 0,
                    component: 'jax/user/user'
                  },
                  {
                    path: '/app',
                    icon: 'battery-full',
                    name: 'app',
                    title: '权限管理',
                    access: 0,
                    component: 'jax/app/app'
                  }
                ]
              },
              {
                path: '/app',
                icon: 'battery-full',
                name: 'app',
                title: '权限管理',
                access: 0,
                component: 'jax/app/app'
              },
              {
                path: '/appRoles',
                icon: 'person',
                name: 'appRoles',
                title: '角色管理',
                access: 0,
                component: 'jax/app/appRoles'
              },
              {
                path: '/hostHistory',
                icon: 'nuclear',
                name: 'hostHistory',
                title: '系统审计',
                access: 0,
                component: 'jax/user/hostHistory'
              }
            ]
          },
          {
            path: '/user',
            icon: 'gear-b',
            name: 'user',
            title: '系统管理',
            access: 0,
            component: 'Main',
            children: [
              {
                path: '/userName',
                icon: 'person-add',
                name: 'userName',
                title: '用户管理',
                access: 0,
                component: 'jax/user/user',
              },
              {
                path: '/app',
                icon: 'battery-full',
                name: 'app',
                title: '权限管理',
                access: 0,
                component: 'jax/app/app',
                children: [
                  {
                    path: '/userName',
                    icon: 'person-add',
                    name: 'userName',
                    title: '用户管理',
                    access: 0,
                    component: 'jax/user/user'
                  },
                  {
                    path: '/app',
                    icon: 'battery-full',
                    name: 'app',
                    title: '权限管理',
                    access: 0,
                    component: 'jax/app/app'
                  }
                ]
              },
              {
                path: '/appRoles',
                icon: 'person',
                name: 'appRoles',
                title: '角色管理',
                access: 0,
                component: 'jax/app/appRoles',
                children: [
                  {
                    path: '/userName',
                    icon: 'person-add',
                    name: 'userName',
                    title: '用户管理2',
                    access: 0,
                    component: 'jax/user/user'
                  },
                  {
                    path: '/app',
                    icon: 'battery-full',
                    name: 'app',
                    title: '权限管理2',
                    access: 0,
                    component: 'jax/app/app'
                  }
                ]
              },
              {
                path: '/hostHistory',
                icon: 'nuclear',
                name: 'hostHistory',
                title: '系统审计',
                access: 0,
                component: 'jax/user/hostHistory'
              }
            ]
          }
        ]
      }
    },
    methods: {

    }


  }
</script>
