<template>
 <div class="cart">
   <header class="header-top">
     <span class="left"> 购物车</span>
     <span class="right">领劵</span>
   </header>

   <section class="content">
     <ul class="good-serve">
       <li>
         <i class="iconfont icon-reload"></i>
         <span>30天无忧退货</span>
       </li>
       <li>
         <i class="iconfont icon-reload"></i>
         <span>48小时快速退款</span>
       </li>
       <li>
         <i class="iconfont icon-reload"></i>
         <span>满88元免包邮</span>
       </li>
     </ul>

     <section class="image">
       <i class="iconfont icon-gouwuche2"></i>
       <span>去添加点什么吧</span>
     </section>

     <button class="login" @click="$router.replace('/login')">登录</button>
   </section>
 </div>
</template>

<script>
  export default {}
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
 @import '../../common/stylus/mixins.styl'
    .header-top
      width 100%
      height 2rem
      background #fff
      text-align center
      line-height 2rem
      display flex
      justify-content space-between
      .left
        font-size 0.7rem
        margin-left 7rem
      .right
        font-size 0.6rem
        color #B4282D
        margin-right 1.5rem

   .content
     margin-top 0.4rem
     .good-serve
       display flex
       li
         flex 1
         text-align center
         >i
           font-size 0.5rem
           transform scale(0.1)
         >span
           font-size 0.5rem
           color #666
   .image
     width 100%
     position absolute
     top 50%
     transform translateY(-50%)
     display flex
     flex-direction column
     align-items center
     color #999
     >i
       font-size 5rem
     >span
       font-size 0.5rem
   .login
     width 60%
     height 2rem
     background #b4282d
     outline none
     border 0
     font-size 0.7rem
     color #fff
     position absolute
     bottom 30%
     left 50%
     transform translateX(-50%)


</style>
