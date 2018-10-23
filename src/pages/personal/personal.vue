<template>
 <div>
   personal
 </div>
</template>

<script>
  export default {
    beforeRouteEnter(to,from ,next){
      if( to.path === '/personal'){
        next('/login')
      }
      //登陆后再 放行
      next();
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>

</style>
