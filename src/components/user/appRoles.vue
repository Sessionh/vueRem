<style lang="less" scoped>
  .mainMenu {
    position: relative;
    z-index: 30;
  }

</style>
<template>
  <div>
      <!--<Table stripe :columns="columns1" :data="data1" :height="height"></Table>-->
    <p>333</p>
  </div>
</template>
<script>
  export default {
    components: {
    },
    data () {
      return {
        button: 'button',
        transfer: false,
        height: '200',
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '去那是',
            key: 'address'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03',
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

    },
    created () {
      this.height = document.documentElement.clientHeight -160 ; // 内容高度
    }


  }
</script>
