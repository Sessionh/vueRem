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
    overflow-x: hidden;

  }
  .menuPickUp {
    cursor: pointer;
    margin-left: 10px;
    /*margin-right: 10px;*/
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

  .user {
    position: absolute;
    z-index: 100;
    right: 30px;
  }
  .uls {
    display: none;
    list-style-type: none;
  }
  .spanTag {
    cursor: pointer;
    padding: 8px 0 8px 0;
    margin-top: 5px;
    /*border-bottom: 1px solid goldenrod;*/

  }
  .spanTag1 {
    cursor: pointer;
    padding: 6px 0 8px 0;
  }
  .spanTag:hover {
    background-color: #f8f8f9;
    border-bottom: 1px solid goldenrod;
  }
  .spanTag1:hover {
    background-color: #f8f8f9;
    border-bottom: 1px solid goldenrod;
  }
  .imgLogo {
    z-index: 110;
    position: absolute;
    width: 30px;
    height: 30px;
    right: 10px;
    bottom: -23px;
    border-radius: 50%;
    background-size: 100% 100%;
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
        <div style="padding-top: 15px">
          <Row >
            <Col span="10">
              <div style="width: 320px">
                <Row>
                  <Col span="4">
                    <Icon class="menuPickUp" @click.native="showMenuIcon"  :class="rotateIcon" type="navicon-round" size="24"></Icon>
                  </Col>
                  <Col span="20">
                    <Breadcrumb>
                      <BreadcrumbItem>Home1</BreadcrumbItem>
                      <BreadcrumbItem>Components</BreadcrumbItem>
                      <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span="14">
              <div class="imgLogo" :style="{backgroundImage:'url(' + imgUrl + ')'}">

              </div>
              <div class="user">
                <div  style="background: #ffffff;width: 80px;text-align: center" @mouseleave="butMouseOut">
                  <a href="javascript:void(0)" @mouseenter="butMouseOver">
                    admin
                    <Icon type="arrow-down-b"></Icon>
                  </a>
                  <ul ref="uls"  class="uls" @mouseleave="butMouseOut">
                    <li class="spanTag" @click="spanTagClick(1)">个人中心</li>
                    <li class="spanTag1" @click="spanTagClick(2)">退出登陆</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </div>
      <div class="boxDiv" style="height: 40px;">
        <tag-main></tag-main>
      </div>
      <div class="content" :style="{height: heightContent}">
        <keep-alive :include="keepMenuList">
          <router-view></router-view>
        </keep-alive>

      </div>

    </div>

  </div>
</template>

<script>
  import menuHide from './comUser/menuHide';
  import menuSum from './comUser/menuSum';
  import tagMain from './comUser/tagMain';
  import util from '../router/util';
  export default {
    components: {
      menuHide,
      menuSum,
      tagMain
    },
    data () {
        return {
          imgUrl: `/static/img/${util.getImgUrl}`,
          heightContent: '500px',
          rotateIcon: 'rotate',
          shrink: '200px',
        }
      },
    computed: {
      menuList () {
        return this.$store.state.app.menuList;
      },
      keepMenuList () {
        return this.$store.state.app.keepMenuList
      }
    },
    methods: {
      showMenuIcon () {
        this.rotateIcon = this.rotateIcon === 'rotateIcon' ? 'rotate' : 'rotateIcon';
      },
      butMouseOut () {
        this.$refs.uls.style.display = 'none';

      },
      spanTagClick (type) {
        if (type === 1) { // 1：个人信息  2：退出登陆

        } else {
          localStorage.removeItem('userName');
          this.$router.push({
            name: 'login'
          });
          // this.$router.go(0);
          location.reload()
        }

      },
      butMouseOver () {
        this.$refs.uls.style.display = 'inline';
      },
    },
    mounted () {
      // 初始 加载首页
      this.$router.push({
        name: 'homes'
      })
    },
    created(){
      let  docHei = document.documentElement.clientHeight -100 ; // div 高度
      this.heightContent = docHei + 'px';
    }


  }
</script>


