<template>
    <div class="main">
      <div class="main-left" :style="{width: shrink}">

      </div>

      <div class="main-right">

      </div>

    </div>
</template>

<script>
    export default {
      data () {
        return {
          shrink: '200px'
        }
      },
      methods: {

      },
      created(){

      }

    }
</script>

<style scoped>
  .main {
    width: 100%;
    height: 100%;

  }
  .main-left {
    position: relative;
    background: goldenrod;
    height:200px;
    width: 200px;
  }
  .main-right {
    position: relative;
    background: green;
    height: 200px;
    width: 100%;
    margin-left: 200px;
  }
</style>
