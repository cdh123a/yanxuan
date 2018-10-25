<template>
  <div class="search">

    <header class="top">
      <i class="iconfont icon-home" @click="$router.replace('/main')"></i>
      <span>网易严选</span>
      <i class="iconfont icon-gouwuche2" @click="$router.replace('/cart')"></i>
      <i class="iconfont icon-sousuo"></i>
    </header>

   <div class="father">
     <div class="swiper-container1">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item,index) in bannerSearch" :key="index" >
           <img :src="item.picUrl" alt="1" style="width:14.52rem;height:8.54rem">
         </div>
       </div>
     </div>
   </div>

    <div class="scroll">
      <ul class="tab">
        <li class="tab-item"  v-for="(item,index) in column" :key="index">
          <div>
            <img :src="item.picUrl" alt="1">
          </div>
          <p>{{item.title}}</p>
          <span>{{item.articleCount}}</span>
        </li>
      </ul>
    </div>

    <div class="recommend ">
      <header>
        {{recommendOne?recommendOne.nickname : null}}
      </header>
      <div class="recommend-1" v-if="recommendTwo">
        <div class="img_1">
          <img :src="recommendTwo.picUrl" alt="1" >
        </div>
        <div class="detail">
          <div>
            <span>{{recommendTwo.title}}</span>
            <span>{{recommendTwo.priceInfo}}元起</span>
          </div>
          <p>{{recommendTwo.subTitle}}</p>
        </div>
        <div class="recommend">严选推荐</div>
      </div>
      <div class="comment" v-if="recommendTwo">
        <div class="left">
          <h2 class="t_1">
            <div>
              <img :src="recommendTwo.avatar" alt="1">
            </div>
            <span>{{recommendTwo.nickname}}</span>
          </h2>
          <div class="t_2">{{recommendTwo.title}}</div>
          <div class="t_3">{{recommendTwo.subTitle}}</div>
        </div>
        <div class="right">
          <img :src="recommendTwo.picUrl" alt="1">
        </div>
      </div>

      <div class="recommend-1" v-if="recommendThree">
        <div class="img_1">
          <img :src="recommendThree.picUrl" alt="1">
        </div>
        <div class="detail">
          <div>
            <span>{{recommendThree.title}}</span>
            <span>{{recommendThree.priceInfo}}元起</span>
          </div>
          <p>{{recommendThree.subTitle}}</p>
        </div>
        <div class="recommend">严选推荐</div>
      </div>

      <div class="comment" v-if="recommendThree">
        <div class="left">
          <h2 class="t_1">
            <div>
              <img :src="recommendThree.avatar" alt="1">
            </div>
            <span>{{recommendThree.nickname}}</span>
          </h2>
          <div class="t_2">{{recommendThree.title}}</div>
          <div class="t_3">{{recommendThree.subTitle}}</div>
        </div>
        <div class="right">
          <img :src="recommendThree.picUrl" alt="1">
        </div>
      </div>

      <div>

      </div>
    </div>


    <div class="tenFif">
        <header>
          十点一刻
        </header>
        <div class="scroll_1">
          <ul class="list-ten">
          <li v-for="(item,index) in tenfifteen" :key="index" class="every">
            <span>-今日话题-</span>
            <span>{{item.title}}</span>
            <span>{{item.desc}}</span>
            <div class="avatar_user">
              <div v-for="(avatar,index) in item.participantAvatar" :key="index" >
                <img :src="avatar" alt="1" v-if="avatar">
                <img src="./images/small.png" alt="1" v-else>
              </div>
              <span>{{item.participantNum}}人评论</span>
            </div>
          </li>
          <li class="every">
            查看全部话题
            <i class="iconfont icon-arrowright"></i>
          </li>
        </ul>
        </div>
      </div>

    <div class="str-select">
      <header>
        {{zhenOne?zhenOne.nickname : null}}
      </header>
      <div class="recommend-1" v-if="recommendTwo">
        <div class="img_1">
          <img :src="recommendTwo.picUrl" alt="1" >
        </div>
        <div class="detail">
          <div>
            <span>{{zhenTwo.title}}</span>
            <span>{{zhenTwo.priceInfo}}元起</span>
          </div>
          <p>{{zhenTwo.subTitle}}</p>
        </div>
        <div class="recommend">严选推荐</div>
      </div>
      <div class="comment" v-if="zhenTwo">
        <div class="left">
          <h2 class="t_1">
            <div>
              <img :src="zhenTwo.avatar" alt="1">
            </div>
            <span>{{zhenTwo.nickname}}</span>
          </h2>
          <div class="t_2">{{zhenTwo.title}}</div>
          <div class="t_3">{{zhenTwo.subTitle}}</div>
        </div>
        <div class="right">
          <img :src="zhenTwo.picUrl" alt="1">
        </div>
      </div>

      <div class="recommend-1" v-if="zhenThree">
        <div class="img_1">
          <img :src="zhenThree.picUrl" alt="1">
        </div>
        <div class="detail">
          <div>
            <span>{{zhenThree.title}}</span>
            <span>{{zhenThree.priceInfo}}元起</span>
          </div>
          <p>{{zhenThree.subTitle}}</p>
        </div>
        <div class="recommend">严选推荐</div>
      </div>

      <div class="comment" v-if="zhenThree">
        <div class="left">
          <h2 class="t_1">
            <div>
              <img :src="zhenThree.avatar" alt="1">
            </div>
            <span>{{zhenThree.nickname}}</span>
          </h2>
          <div class="t_2">{{zhenThree.title}}</div>
          <div class="t_3">{{zhenThree.subTitle}}</div>
        </div>
        <div class="right">
          <img :src="zhenThree.picUrl" alt="1">
        </div>
      </div>

      <div>

      </div>
    </div>


    </div>
</template>

<script>
  import { mapGetters} from 'vuex'
  import Swiper  from 'swiper'
  import BScroll from 'better-scroll'
  export default {

    computed : {
      ...mapGetters(['bannerSearch','column','recommendOne','recommendTwo','recommendThree','tenfifteen','zhenOne','zhenTwo','zhenThree'])
    },
    mounted () {
      this.$store.dispatch('getSearch',() => {
         this.$nextTick(() => {
           new Swiper ('.swiper-container1', {
             loop: true, // 循环模式选项
             spaceBetween : '2%',
           })

           new BScroll('.scroll',{
             click : true ,
             scrollX :true
           })

           new BScroll('.scroll_1',{
             click : true ,
             scrollX :true
           })


         })
      })
    }


  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    width 100%
    overflow hidden
    margin-bottom 1.7rem

    .top
      position fixed
      top 0
      left 0
      z-index 20
      width 100%
      height 1.88rem
      background #FAFAFA
      border-bottom 2px solid #999
      text-align center
      line-height 1.88rem
      >span
        font-size 0.9rem
        font-family '楷体'
        font-weight 700
        margin-left 0.8rem
      >i
        float right
        font-size 1rem
        margin-right 0.4rem
        &:first-child
          float left
          margin-left 0.4rem
        &:last-child
          margin-right 0.7rem

    .father
      padding-top 0.3rem
      padding-bottom 0.3rem
      background #fff
    .scroll
      background #fff
      margin-bottom 0.4rem
      .tab
        width 200%
        padding 0.3rem 0
        background #fff
        overflow hidden
        .tab-item
          width 3.5rem
          float left
          margin-left 0.5rem
          position relative
          >div
            width 100%
            height 3.5rem
            >img
              width 100%
          >p
            font-size 0.55rem
            color #333
            text-align center
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            margin-top 0.3rem
            margin-bottom 0.3rem
          >span
            position absolute
            right 0
            top 0
            width 100%
            box-sizing border-box
            padding-left 0.5rem
            color #fff
            background linear-gradient(to left ,grey,white)
    .recommend
      header
        width 100%
        height 2.56rem
        text-align center
        line-height 2.56rem
        font-size 0.6rem
        background #fff
      .recommend-1
        width 100%
        background #ffffff
        box-sizing border-box
        padding 0 0.5rem
        border-radius 10px
        position relative
        .img_1
          width 100%
          height 8.23rem
          >img
            width 100%
            height 100%
        .detail
          border 2px solid #EDEDED
          >div
            width 100%
            box-sizing border-box
            margin-top 0.5rem
            margin-bottom 0.5rem
            padding 0 0.3rem
            font-size 0.7rem
            display flex
            justify-content space-between
          >p
            font-size 0.6rem
            color #666
            box-sizing border-box
            padding 0 0.3rem 2rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

        .recommend
          position absolute
          top 2%
          left 5%
          background #fff
          font-size 0.5rem
          box-sizing border-box
          padding 0.1rem 0.3rem
          border-radius 10px


      .comment
        width 94%
        margin 0.5rem auto
        display flex
        background #fff
        justify-content space-between
        .right
          width 5.98rem
          height 5.8rem
          >img
            width 100%
            height 100%
        .left
          margin-left 0.3rem
          .t_1
            height 0.981rem
            display flex
            align-items center
            >div
              height 0.981rem
              width  0.981rem
              >img
                width 100%
                height 100%
                border-radius 50%
            >span
              font-size 0.5rem
              color #666
              margin-left 6px
          .t_2
            margin-top 0.6rem
            margin-bottom 0.6rem
            font-size 0.7rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .t_3
            color #666
            width 8rem
            height 1.5rem
            overflow hidden
            text-overflow ellipsis
            line-height 0.8rem


    .tenFif
      background #fff
      margin-bottom 0.6rem
      >header
        width 100%
        height 2.56rem
        text-align center
        line-height 2.56rem
        font-size 0.6rem
        background #fff
      .list-ten
        width 360%
        overflow hidden
        .every
          width 12.37rem
          height 8.44rem
          background-image url("./images/tenfif.png")
          float left
          margin-left 1.12rem
          display flex
          flex-direction column
          align-items center
          &:last-child
            display flex
            align-items center
            justify-content center
            font-size 0.8rem
            color  #7f7f7f
            >i
              font-size 0.8rem
              color  #7f7f7f
          >span
            &:first-child
              font-size 0.6rem
              color #7f7f7f
              margin-top 0.8rem
              margin-bottom 1.1rem
            &:nth-child(2)
              font-size 0.7rem
            &:nth-child(3)
              font-size 0.6rem
              color  #333
              margin-top 1.7rem
          .avatar_user
            width 100%
            display flex
            flex-direction row
            align-items center
            justify-content center
            margin-top 0.3rem
            >div
              width 0.99rem
              height 0.99rem
              >img
                width 100%
                height 100%
                border-radius 50%
            >span
              color #7f7f7f
              font-size 0.5rem
              margin-left 0.3rem


    .str-select
      header
        width 100%
        height 2.56rem
        text-align center
        line-height 2.56rem
        font-size 0.6rem
        background #fff
      .recommend-1
        width 100%
        background #ffffff
        box-sizing border-box
        padding 0 0.5rem
        border-radius 10px
        position relative
        .img_1
          width 100%
          height 8.23rem
          >img
            width 100%
            height 100%
        .detail
          border 2px solid #EDEDED
          >div
            width 100%
            box-sizing border-box
            margin-top 0.5rem
            margin-bottom 0.5rem
            padding 0 0.3rem
            font-size 0.7rem
            display flex
            justify-content space-between
          >p
            font-size 0.6rem
            color #666
            box-sizing border-box
            padding 0 0.3rem 2rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis

        .recommend
          position absolute
          top 2%
          left 5%
          background #fff
          font-size 0.5rem
          box-sizing border-box
          padding 0.1rem 0.3rem
          border-radius 10px


      .comment
        width 94%
        margin 0.5rem auto
        display flex
        background #fff
        justify-content space-between
        .right
          width 5.98rem
          height 5.8rem
          >img
            width 100%
            height 100%
        .left
          margin-left 0.3rem
          .t_1
            height 0.981rem
            display flex
            align-items center
            >div
              height 0.981rem
              width  0.981rem
              >img
                width 100%
                height 100%
                border-radius 50%
            >span
              font-size 0.5rem
              color #666
              margin-left 6px
          .t_2
            margin-top 0.6rem
            margin-bottom 0.6rem
            font-size 0.7rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .t_3
            color #666
            width 8rem
            height 1.5rem
            overflow hidden
            text-overflow ellipsis
            line-height 0.8rem


</style>

