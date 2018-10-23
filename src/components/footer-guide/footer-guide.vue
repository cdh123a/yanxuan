<template>
 <footer class="footer-guide" v-if="$route.path !='/login' && $route.path != '/on' ">
   <span :class="{active: $route.path === '/main' }" @click="redirectPath('/main',1)">
     <i class="iconfont icon-home " ></i>
     <span>首页</span>
   </span>
   <span :class="{active:$route.path === '/search'}"  @click="redirectPath('/search',2)">
     <i class="iconfont icon-shiwu"></i>
     <span>识物</span>
   </span>
   <span :class="{active:$route.path === '/category'}" @click="redirectPath('/category',3)">
     <i class="iconfont icon-navicon-kcfl"></i>
     <span>分类</span>
   </span>
   <span :class="{active:$route.path === '/cart'}" @click="redirectPath('/cart',4)">
     <i class="iconfont icon-shoppingcart"></i>
     <span>购物车</span>
   </span>
   <span :class="{active: $route.path === '/personal'}" @click="redirectPath('/personal',5)">
     <i class="iconfont icon-mine"></i>
     <span>个人</span>
   </span>
 </footer>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods:{
      redirectPath( url ){
        this.$router.replace(url)
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
 .footer-guide
   top-border-1px(#f4f4f4)
   width 100%
   height  1.7rem
   position fixed
   left 0
   bottom 0
   display flex
   background #FAFAFA
   >span
     display flex
     flex-direction column
     align-items center
     justify-content center
     flex 1
     color #666
     &.active
       color #D4878A

     >i
      font-size 0.8rem
      margin-bottom 0.1rem
     >span
      font-size 0.6rem






</style>
