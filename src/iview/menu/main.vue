<style lang="less"  scoped>
  .main-left {
    /*width: 40px;*/
    height: 100vh;
    /*float: left;*/
    position: fixed;
    background: #495060;
    z-index: 2;
    text-align: center;
    top: 0;
    bottom: 0;
  }
  .main-right {
    height: 100vh;
    /*margin-left: 40px;*/
    z-index: 1;

  }
  .content {
    padding: 10px;
    overflow: auto;
  }
  .menuPickUp {
    cursor: pointer;
  }
  .rotate {
    transition: transform .25s ease-in ;
    -moz-transition: transform .25s ease-in ; /* Firefox 4 */
    -webkit-transition: transform .25s ease-in ; /* Safari 和 Chrome */
    -o-transition: transform .25s ease-in ; /* Opera */
  }
  // 旋转
  .rotateIcon {
    transform:rotate(90deg);
    -ms-transform:rotate(90deg); 	/* IE 9 */
    -moz-transform:rotate(90deg); 	/* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg); 	/* Opera */
    transition: transform .25s ease-in ;
    -moz-transition: transform .25s ease-in ; /* Firefox 4 */
    -webkit-transition: transform .25s ease-in ; /* Safari 和 Chrome */
    -o-transition: transform .25s ease-in ; /* Opera */
  }
  .boxDiv {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, .1) inset,
      0 0 5px 2px rgba(0, 0, 0, .1);
  }

</style>
<template>
  <div class="main">
    <div class="main-left" :style="{width: (rotateIcon === 'rotateIcon' ? '60px': '180px')}">
      <menu-sum v-show="rotateIcon === 'rotate'" :menuList="menuList" style="margin-top: 40px;"></menu-sum>
      <menu-hide v-show="rotateIcon !== 'rotate'" :menuHideList="menuList"  style="margin-top: 40px;"></menu-hide>
    </div>
    <div class="main-right" :style="{marginLeft: (rotateIcon === 'rotateIcon' ? '60px': '180px')}">
      <div style="background: #FFFFFF;height: 60px">
        <div style="width: 320px;padding-top: 15px">
          <Row >
            <Col span="1">
              &nbsp;
            </Col>
            <Col span="3">
              <Icon class="menuPickUp" @click.native="showMenuIcon"  :class="rotateIcon" type="navicon-round" size="24"></Icon>
            </Col>
            <Col span="20">
              <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>

      </div>
      <div class="boxDiv" style="height: 40px;">
        <tag-main></tag-main>
      </div>
      <div class="content" :style="{height: heightContent}">
        <Card>
          <Table stripe :columns="columns1" :data="data1" :height="height"></Table>
        </Card>
      </div>

    </div>

  </div>
</template>

<script>
  import menuHide from '../comDIY/menuHide';
  import menuSum from '../comDIY/menuSum';
  import tagMain from '../comDIY/tagMain';
  export default {
    components: {
      menuHide,
      menuSum,
      tagMain
    },
    data () {
        return {
          heightContent: '500px',
          rotateIcon: 'rotate',
          shrink: '200px',
          menuList: [
            {
              path: '/user',
              icon: 'gear-b',
              name: 'user',
              title: '系统管理',
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
                      component: 'jax/user/user'
                    },
                    {
                      path: '/app',
                      icon: 'battery-full',
                      name: 'app',
                      title: '权限管理',
                      component: 'jax/app/app'
                    }
                  ]
                },
                {
                  path: '/app',
                  icon: 'battery-full',
                  name: 'app',
                  title: '权限管理',
                  component: 'jax/app/app'
                },
                {
                  path: '/appRoles',
                  icon: 'person',
                  name: 'appRoles',
                  title: '角色管理',
                  component: 'jax/app/appRoles'
                },
                {
                  path: '/hostHistory',
                  icon: 'nuclear',
                  name: 'hostHistory',
                  title: '系统审计',
                  component: 'jax/user/hostHistory'
                }
              ]
            },
            {
              path: '/user',
              icon: 'gear-b',
              name: 'user1',
              title: '系统管理',
              component: 'Main',
              children: [
                {
                  path: '/userName',
                  icon: 'person-add',
                  name: 'userName',
                  title: '用户管理',
                  component: 'jax/user/user',
                },
                {
                  path: '/app',
                  icon: 'battery-full',
                  name: 'app',
                  title: '权限管理',
                  component: 'jax/app/app',
                  children: [
                    {
                      path: '/userName',
                      icon: 'person-add',
                      name: 'userName',
                      title: '用户管理',
                      component: 'jax/user/user'
                    },
                    {
                      path: '/app',
                      icon: 'battery-full',
                      name: 'app',
                      title: '权限管理',
                      component: 'jax/app/app'
                    }
                  ]
                },
                {
                  path: '/appRoles',
                  icon: 'person',
                  name: 'appRoles',
                  title: '角色管理',
                  component: 'jax/app/appRoles',
                  children: [
                    {
                      path: '/userName',
                      icon: 'person-add',
                      name: 'userName',
                      title: '用户管理2',
                      component: 'jax/user/user'
                    },
                    {
                      path: '/app',
                      icon: 'battery-full',
                      name: 'app',
                      title: '权限管理2',
                      component: 'jax/app/app'
                    }
                  ]
                },
                {
                  path: '/hostHistory',
                  icon: 'nuclear',
                  name: 'hostHistory',
                  title: '系统审计',
                  component: 'jax/user/hostHistory'
                }
              ]
            }
          ],
          height: '200',
          columns1: [
            {
              title: 'Name',
              key: 'name'
            },
            {
              title: 'Age',
              key: 'age'
            },
            {
              title: 'Address',
              key: 'address'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ]
        }
      },
    computed: {

    },
    methods: {
      showMenuIcon () {
        this.rotateIcon = this.rotateIcon === 'rotateIcon' ? 'rotate' : 'rotateIcon';
      }
    },
    created(){
      let  docHei = document.documentElement.clientHeight -100 ;
      this.height = document.documentElement.clientHeight -160 ;
      this.heightContent = docHei + 'px';
    }


  }
</script>


