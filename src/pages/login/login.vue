<template>
  <div class="login">
    <div class="g-header">
      <span class="g-home" @click="goto('/home')">
        <i class="iconfont icon-home"></i>
      </span>
      <span class="g-wy">网易严选</span>
      <span class="g-sousuo" @click="goto('/home')">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="g-gouwu" @click="goto('/shop')">
        <i class="iconfont icon-gouwuche1"></i>
      </span>
    </div>
    <div class="g-img">
      <img src="./images/11.png" alt="11">
    </div>

    <div>

    </div>
    <div class="g-login" @click="goto('/tologin')">
      <i class="iconfont icon-mail"></i>
      <span>手机号码登录</span>
    </div>
    <div class="g-message" @click="goto('/textlogin')">
      <i class="iconfont icon-duanxin"></i>
      <span>邮箱账号登录</span>
    </div>
    <div class="g-btn">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-right"></i>
    </div>


    <div class="concat">
      <span>
        <i class="iconfont icon-weixin"></i>
        微信
      </span>
      <span>|</span>
      <span>
        <i class="iconfont icon-qq"></i>
            QQ
      </span>
      <span>|</span>
      <span>
        <i class="iconfont icon-weibo1"></i>
        微博
      </span>
    </div>
  </div>


</template>

<script>
  export default {}
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    width 100%
    height 100%
    background #eee
    .g-header
      position relative
      width 100%
      height 1.88rem
      background #fff
      .g-home
        .iconfont
          position absolute
          top 0.32rem
          left 0.427rem
          font-size 1.19rem
      .g-wy
        font-size 0.9rem
        position absolute
        top 0.512rem
        left 6.61rem
        font-family '楷体'
        font-weight 600
      .g-sousuo
        .iconfont
          position absolute
          top 0.47rem
          right 2.34rem
          font-size 1.067rem
      .g-gouwu
        .iconfont
          position absolute
          top 0.47rem
          right 0.533rem
          font-size 1.152rem
    .g-img
      position relative
      width 100%
      height 8.917rem
      img
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        margin auto
        width 5.717
        height 1.92rem
    .g-login

      border-radius 2px
      width 90%
      height 2.048rem
      margin 0 auto 0.427rem
      line-height 2.048rem
      text-align center
      font-size 0.6rem
      color #fff
      border 2px solid #b4282d
      background-color: #b4282d
      .iconfont
        font-size 0.81rem
    .g-message
      border-radius 2px
      width 90%
      height 2.048rem
      margin 0.64rem auto 0.427rem
      line-height 2.048rem
      text-align center
      color #b4282d
      border 1px solid #b4282d
      font-size 0.65rem
      .iconfont
        font-size 0.811rem
    .g-btn
      color #333
      font-size 0.64rem
      text-align center
      line-height 1.5
      .iconfont
        width 0.598rem
        height 0.598rem
        color #ccc
        font-size 0.768rem
        text-align center

    .concat
      position absolute
      left 15%
      right 15%
      bottom 10%
      font-size 0.6rem
      display flex
      justify-content space-around
      color #979797
      i
        font-size 0.6rem
</style>
