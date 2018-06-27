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
    color: #fff;
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
    <ul  style="list-style-type: none;width: 100px;">
      <li v-for="item in menuHideList" style="margin-top: 10px;">
        <menu-hope class="menu" :iconType="item.icon">
          <ul  style="list-style-type: none;" v-for="items in item.children" :key="items.name">
            <li v-if="items.children === undefined || items.children.length === 0" @click="menuClick(items)">{{items.title}}</li>

            <li v-if="items.children !== undefined && items.children.length > 0">
              <div class="menuSum">
                <span class="menuLeft">&nbsp;&nbsp;&nbsp;{{items.title}}&nbsp;<Icon size="12" type="chevron-right"></Icon></span>
                <div class="menuArrowLeft">
                  <arrow-left>
                    <ul  style="list-style-type: none;">
                      <li v-for="itemSub in items.children" @click="menuClick(itemSub)">{{itemSub.title}}</li>
                    </ul>
                  </arrow-left>
                </div>
              </div>
            </li>
          </ul>
        </menu-hope>
      </li>
    </ul>
  </div>
</template>
<script>
  import arrowLeft from './arrowLeft';
  import menuHope from './menuHope';
  export default {
    components: {
      arrowLeft,
      menuHope
    },
    props: {
      menuHideList: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        menuLeft: '60px',
        iconType: 'chatbox-working'
      }
    },
    methods: {
      menuClick (val) {
        let tag = {name: val.title, path: val.name}; // 封装 Tag 对象
        this.$store.commit('setTag', tag);
        this.$router.push({
          name: val.name
        });
        this.$store.commit('setMenuPath', val.name);

      }
    }

  }
</script>
