<template>
  <div id="app">
    <v-header></v-header>
    <div class ="tab">我是tab</div>
    <div class ="content">我是内容</div>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  
  export default {
    components:{
      'v-header':header
    }
  }
</script>
<style>

</style>
