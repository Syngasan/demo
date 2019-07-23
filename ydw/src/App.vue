<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import './assets/js/fs';
export default {
  name: 'App'
}
</script>

<style lang="less">
@import url('./assets/less/reset.less');
#app{
  width: 100%;
  height: 100%;
}
</style>

