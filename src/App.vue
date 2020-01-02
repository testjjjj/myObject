<template>
  <div id="app"  style="height:100%;overflow:auto" v-infinite-scroll="load">
    <cz-head></cz-head>
    <router-view></router-view>
  </div>
</template>
<script>
import czHead from './views/cz-header/index'
export default {
    components: {
        czHead
    },
    methods: {
      load(){
        this.$root.$emit('getArticleList')
      },
    }
}
</script>
<style lang="less">
@import url('../src/assets/css/index.less');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
