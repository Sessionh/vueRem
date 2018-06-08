<style lang="less" scoped>
  @import "../less/main.less";
</style>
<template>
  <div class="layout">
    <div class="layout-menu" :style="{width: (rotateIcon === 'rotateIcon' ? '40px': '180px')}">
      <menu-sum v-show="rotateIcon === 'rotate'" :menuList="menuList" style="margin-top: 40px;"></menu-sum>
      <menu-hide v-show="rotateIcon !== 'rotate'" :menuHideList="menuList"  style="margin-top: 40px"></menu-hide>
    </div>


    <div  id="mainContent" class="main-content" :style="{marginLeft: (rotateIcon === 'rotateIcon' ? '40px': '180px')}">
      <div style="height:60px;background: #ffffff">
        <div style="width: 320px;padding-top: 15px">
          <Row >
            <Col span="1">
              &nbsp;
            </Col>
            <Col span="3">
              <Icon @click.native="showMenuIcon"  :class="rotateIcon" type="navicon-round" size="24"></Icon>
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
      <div style="height:40px;border-bottom: 1px solid gold">

      </div>
      <div style=" padding: 10px;height: 100%;">

        <div>
          <Table stripe :columns="columns1" :data="data1" :height="height"></Table>
          <!--<card>-->
            <!--<Table stripe :columns="columns1" :data="data1" :height="height"></Table>-->
          <!--</card>-->
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import menuSum from '../comDIY/menuSum';
  import menuHide from '../comDIY/menuHide';
  export default {
    components: {
      menuSum,
      menuHide
    },
    data () {
      return {
        widthMenu: '200px',
        menuList: [
          {
            path: '/demo1',
            icon: 'android-warning',
            name: 'demo1',
            title: '菜单一级-1',
            children: [
              {
                path: '/demo1-1',
                icon: 'android-warning',
                name: 'demo1-1',
                title: '菜单1-1级',
                component: 'jax/resource/alarmManage',
                children: []
              },
              {
                path: '/demo1-2',
                icon: 'android-warning',
                name: 'demo1-2',
                title: '菜单1-2级',
                component: 'jax/resource/alarmManage',
                children: []
              },
              {
                path: '/demo1-3',
                icon: 'android-warning',
                name: 'demo1-3',
                title: '菜单1-3级',
                component: 'jax/resource/alarmManage',
                children: [
                  {
                    path: '/demo1-3-1',
                    name: 'demo1-3-1',
                    title: '菜单1-3-1级',
                    component: 'jax/resource/alarmManage'
                  },
                  {
                    path: '/demo1-3-2',
                    name: 'demo1-3-2',
                    title: '菜单1-3-2级',
                    component: 'jax/resource/alarmManage'
                  },
                  {
                    path: '/demo1-3-3',
                    name: 'demo1-3-3',
                    title: '菜单1-3-3级',
                    component: 'jax/resource/alarmManage'
                  }
                ]
              },

            ]
          },
          {
            path: '/demo2',
            icon: 'help-buoy',
            name: 'demo2',
            title: '菜单一级-2',
            children: [
              {
                path: '/demo2-1',
                icon: 'android-warning',
                name: 'demo2-1',
                title: '菜单2-1级',
                component: 'jax/resource/alarmManage',
                children: []
              }
            ]
          },
          {
            path: '/demo3',
            icon: 'lock-combination',
            name: 'demo-3',
            title: '菜单一级-3',
            children: [
              {
                path: '/demo3-1',
                icon: 'android-warning',
                name: 'demo3-1',
                title: '菜单3-1级',
                component: 'jax/resource/alarmManage',
                children: []
              },
            ]
          }
        ],
        rotateIcon: 'rotate',
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
    methods: {
      showMenuIcon () {
        if (this.rotateIcon === 'rotateIcon') {
          this.rotateIcon = 'rotate';
        } else {
          this.rotateIcon = 'rotateIcon';
        }


      }

    },
    created () {
      this.height = document.documentElement.clientHeight -180 ;
    }

  }
</script>
