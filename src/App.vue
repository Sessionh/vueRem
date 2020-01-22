<template>
  <div id="app">
    <div class="header">
      头部

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 28px;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
