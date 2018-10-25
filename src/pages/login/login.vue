<template>
  <div class="login " :class="{on:isChange}">
    <div class="g-header">
      <span class="g-home" @click="$router.replace('/main')">
        <i class="iconfont icon-home"></i>
      </span>
      <span class="g-wy">网易严选</span>
      <span class="g-sousuo" @click="$router.replace('/search')">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="g-gouwu" @click="$router.replace('/cart')">
        <i class="iconfont icon-gouwuche1"></i>
      </span>
    </div>

    <div class="g-img " :class="{small:isChange}">
      <img src="./images/11.png" alt="11">
    </div>

    <div class="import" v-if="isShowInput === 1">
      <input type="text" placeholder="请输入手机号" v-model="phoneNumber">
      <input type="text" placeholder="请输入短信验证码" v-model="msgAuth">
      <p>
        <span>遇到问题</span>
        <span>使用密码验证码登录</span>
      </p>
      <div class="auth" @click="getAuth">获取验证码</div>
    </div>

    <div class="import" v-show="isShowInput === 2">
      <input type="text" placeholder="邮箱账号" v-model="address">
      <input type="text" placeholder="密码" v-model="pwd">
      <p>
        <span>注册账号</span>
        <span>忘记密码</span>
      </p>
    </div>

    <div class="import" v-if="isShowInput === 3">
      <input type="text" placeholder="请输入手机号" v-model="phone">
      <input type="text" placeholder="请输入短信验证码" v-model="auth">
      <input type="text" placeholder="请输入密码" v-model="pwd1">
      <div class="auth" @click="getAuth">获取验证码</div>
    </div>


    <div class="g-login"  @click="changeStyle(1)" v-show="isShowInput === 0" >
        <i class="iconfont icon-mail" ></i>
        <span>手机号码登录</span>
    </div>

    <div class="g-login"  v-show="!(isShowInput ===0 || isShowInput ===3) " @click="login">
        <span>登录</span>
    </div>
    <div class="g-login"  v-show="isShowInput === 3">
      <span @click="regiest">注册</span>
    </div>
    <div class="g-message" @click="changeStyle(2)" v-show="isShowInput === 0">
      <i class="iconfont icon-duanxin" ></i>
      <span>邮箱账号登录</span>
    </div>
    <div class="g-message" v-show="!(isShowInput ===0 || isShowInput ===3)" @click="switchInput">
      <span>其它方式登录</span>
    </div>
    <div class="g-btn" @click="changeStyle(3)" v-show="isShowInput === 0">
      <span>手机号快捷注册</span>
      <i class="iconfont icon-right"></i>
    </div>
    <div class="g-btn"   v-show="isShowInput === 2">
      <span>注册账号</span>
      <i class="iconfont icon-right"></i>
    </div>

    <div v-show="isShowInput === 3" class="serve">
      <input type="checkbox" checked>我同意
      <span>《服务条款》</span> 和
      <span>《网易隐私政策》</span>
    </div>
    <div class="g-btn"  v-show="isShowInput === 3" @click="switchInput">
      <span>邮箱账号注册</span>
      <i class="iconfont icon-right"></i>
    </div>



    <div class="concat" v-if="!isChange">
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
  import { Toast } from 'mint-ui'
  export default {
    data(){
      return {
        isChange : false ,  //标识背景是否变白 严选图片是否变小 qq微博图标是否消失
        isShowInput : 0 , // 0表示不显示  1显示手机号的注册  2显示邮箱的注册 3是手机快捷注册

        phoneNumber : '' ,   //手机号登录时的手机号
        msgAuth : '' ,    //手机号登录时的短信验证码

        address : '',   //邮箱登录账号
        pwd : '',    //邮箱登录密码

        phone : '',   //手机号快捷登录的手机号
        auth : '',   //手机号快捷登录时的短信验证码
        pwd1 : ''   //手机号快捷登录时的密码


      }
    },


    methods:{
      changeStyle(num){
        this.isChange = true;
        this.isShowInput = num
      },

      switchInput(){
        this.isShowInput = 0
        this.isChange = false
      },

      //登录验证
      login(){
        const {phoneNumber,msgAuth,address,pwd ,isShowInput} = this ;
        const phoneReg = new RegExp(/^1\d{10}$/);
        const msgAuthReg = new RegExp(/^\d{6}$/);
        const addressReg = new RegExp(/^[A-Za-z_0-9]{5,8}@[A-Za-z_0-9]{2,5}\.com$/);
        const pwdReg = new RegExp(/^[A-Za-z_0-9]{5,9}$/);
        if(isShowInput === 1){
          //手机号登录
          if(!phoneReg.test(phoneNumber)){
            return Toast({
              message : '手机号输入有误',
              className : 'toast',
            })

          }else if(!msgAuthReg.test(msgAuth)){
            return Toast({
              message : '验证码输入错误',
              className : 'toast',
            })
          }

        }else if(isShowInput === 2){
          //邮箱登录
          if(!addressReg.test(address)){
            return Toast({
              message : '邮箱输入错误',
              className : 'toast',
            })
          }else if(!pwdReg.test(pwd)){
            return Toast({
              message : '密码输入有误',
              className : 'toast',
            })
          }
        }

        setTimeout(() => {
          Toast({
            message : '登录成功',
            className : 'toast',
          })
          this.$router.replace('/personal')
        },1000)


      },

      //注册验证
      regiest(){
        const {phone,pwd1,auth } = this ;
        const phoneReg = new RegExp(/^1\d{10}$/);
        const msgAuthReg = new RegExp(/^\d{6}$/);
        const pwdReg = new RegExp(/^[A-Za-z_0-9]{5,9}$/);

        if(!phoneReg.test(phone)){
         return Toast({
            message : '手机号输入有误',
            className : 'toast',
          })
        }else if(!msgAuthReg.test(auth)){
          return Toast({
            message : '验证码输入有误',
            className : 'toast',
          })
        }else if(!pwdReg.test(pwd1)){
          return Toast({
            message : '密码输入有误',
            className : 'toast',
          })
        }

        setTimeout(() => {
          console.log('222222')
          Toast({
            message : '登录成功',
            className : 'toast',
          })
          this.$router.replace('/personal')
        },1000)

      },

      //发送验证码
     getAuth () {
        Toast({
          message : '发送成功',
          className : 'toast',
        })
     }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  .login
    position absolute
    top 0
    bottom 0
    width 100%
    background #eee
    &.on
      background #fff
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
      width 5.8rem
      height 2rem
      margin 3rem auto
      &.small
        width 4rem
        height 1.3rem
        margin 1.2rem auto
      img
        width 100%
        height 100%
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

    .import
      width 100%
      height 6rem
      text-align center
      margin-bottom 0.6rem
      position relative
      .auth
        position absolute
        top 43%
        right 8%
        border 1px solid #7F7F7F
        color #333
        width 3rem
        height 1.2rem
        font-size 0.53rem
        border-radius 0.256rem
        text-align center
        line-height 1.2rem
      >input
        width 90%
        height 2rem
        border-bottom 2px solid #F6F6F6
        font-size 0.6rem
        outline none
        &:nth-child(2)
          margin-top 0.3rem
      >p
        width 100%
        hieght 1rem
        box-sizing border-box
        padding 0 0.8rem
        margin-top 0.6rem

        >span
          font-size 0.6rem
          color #8C8C8C
          &:first-child
            float left
          &:last-child
            float right


    .serve
      width 100%
      box-sizing border-box
      padding 0.3rem 0.8rem
      font-size 0.6rem
      >input
        width 0.6rem
        height 0.6rem
        vertical-align middle
      >span
        color #007AFF
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
