<template>
 <div class="main">
    <div class="fixed-content">
      <header class="header-title">
        <span>网易严选</span>
        <input type="text" placeholder="搜索商品，共16706款好物">
        <i class="iconfont icon-sousuo"></i>
      </header>
      <div class="category-nav">
        <ul class="better-container" ref="betterContainer">
          <li :class="{on: isOn === index }" v-for="(cate,index) in cateList" :key="index" @click="isOn=index">{{cate.name}}</li>
        </ul>
      </div>
    </div>


   <div class="better">
     <div class="swiper-container">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
           <img :src="item.picUrl" alt="1" style="width:100%;height:100%">
         </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
     </div>

     <ul class="good-serve">
       <li>
         <i class="iconfont icon-like_fill"></i>
         <span class="right">网易自营品牌</span>
       </li>
       <li>
         <i class="iconfont icon-like_fill"></i>
         <span class="right">30天无忧退货</span>
       </li>
       <li>
         <i class="iconfont icon-like_fill"></i>
         <span class="right">48小时快速退款</span>
       </li>
     </ul>

     <div class="tagList">
       <header class="list-header">
         <span>品牌制造商直供</span>
         <i class="iconfont icon-right"></i>
       </header>

       <ul class="list-content">
         <li v-for="(tag ,index) in tagList" :key="index">
           <div class="detail">
             <span>{{tag.name}}</span>
             <span>{{tag.floorPrice}}元起</span>
             <div v-if="tag.newOnShelf">上新</div>
           </div>
           <img :src="tag.picUrl" alt="1">
         </li>
       </ul>
     </div>

     <section class="newList">
       <header class="top">
         <span class="text">新品首发</span>
         <button class="btn-watch">
           查看全部
           <i class="iconfont icon-right"></i>
         </button>
       </header>
       <div class="scroll-container">
         <ul ref="scroll">
           <li v-for="(newItem ,index) in newItemNewUserList" :key="index">
             <div class="isSelect" v-if="newItem.newItemFlag">
               <div>2</div>
               <div>色</div>
               <div>可</div>
               <div>选</div>
             </div>
             <img :src="newItem.listPicUrl" alt="1">
             <span class="discount" v-if="newItem.isCouponConflict">满额减</span>
             <p class="item-desc">{{newItem.name}}</p>
             <p class="new-item">{{newItem.simpleDesc}}</p>
             <span class="price">￥{{newItem.retailPrice}}</span>
           </li>
           <li class="last">
             <div>
              查看全部
             </div>
           </li>
         </ul>
       </div>
     </section>

     <section class="popular-items">
       <header class="top">
         <span class="text">人气推荐.好物精选</span>
         <button class="btn-watch">
           查看全部
           <i class="iconfont icon-right"></i>
         </button>
       </header>
       <div class="scrolls-container">
         <ul ref="scrolls">
           <li v-for="(item ,index) in popularItemList" :key="index">
             <img :src="item.listPicUrl" alt="1">
             <div class="discount" >
               <span class="left" v-show="item.promTag.length">{{item.promTag}}</span>
               <span class="right">满额减</span>
             </div>
             <p class="item-desc">{{item.name}}</p>
             <p class="new-item">{{item.simpleDesc}}</p>
             <span class="price">￥{{item.sellVolume}}</span>
           </li>
         </ul>
       </div>
     </section>

     <!--严选限时购-->
     <div class="main_timeLimit">
       <div class="timeLimit_content">
         <div class="left">
           <div class="timeLimit">严选限时购</div>
           <div class="time">
             <span>03</span>  :
             <span>15</span>  :
             <span>45</span>
           </div>
           <div class="other">下一场22:00开始</div>
         </div>
         <div class="right">
           <img src="./image/xie.png"/>
           <div class="price">￥299<br/><span>￥499</span></div>
         </div>
       </div>
     </div>
     <!--福利社-->
     <div class="main_welfare">
     <img src="./image/fulishe.jpg"/>
   </div>
   <!--专题精选-->
     <div class="main_brand">
       <header class="list-header">
         <span>专题精选</span>
         <i class="iconfont icon-right"></i>
       </header>
       <!--专题精选列表-->
       <div class="main_proSelect">
         <ul ref="select" >
           <li v-for="(item,index) in topicList" :key="index" style="width:12rem ;height :100%">
             <img :src="item.itemPicUrl" style="width:12rem"/>
             <div class="text">
               <span class="describe">{{item.title}}</span>
               <span class="price">{{item.priceInfo}}元起</span>
             </div>
             <div class="content">{{item.subtitle}}</div>
           </li>
         </ul>
       </div>
     </div>

     <!--下部整体列表-->
     <div class="msite_cartList">
       <!--居家-->
       <div class="item" v-for="(cate,index) in cateList" :key="index">
         <div class="item_header">{{cate.name}}</div>
         <div class="item_list">
           <div class="lists" v-for="(item,index) in cate.itemList" :key="index"
                v-if="!(index === cate.itemList.length-1)">
             <div class="isSelect">
               <div>2</div>
               <div>色</div>
               <div>可</div>
               <div>选</div>
             </div>
             <div style="width:7.36rem;height:7.36rem">
               <img :src="item.listPicUrl"/>
             </div>
             <div class="Introduction">{{item.name}}</div>
             <div class="sale">
               <div class="sale_list red">爆品</div>
             </div>
             <div class="describe">{{item.simpleDesc}}</div>
             <div class="price">￥{{item.retailPrice}}</div>
           </div>

           <div class=" lists blank">
             <div class="text">更多居家好物</div>
             <i class="iconfont icon-arrowright"></i>
           </div>
         </div>
       </div>
     </div>






   </div>
 </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import swiper from 'swiper'
  import {mapState, mapGetters} from 'vuex'
  export default {
    data () {
      return{
        isOn : 0   //index与isOn相等 切换类名
      }
    },

    computed : {
      ...mapState(['dataMain']),
      ...mapGetters(['banner','cateList','tagList','newItemNewUserList','popularItemList','topicList'])
    },
    mounted () {

      //发送请求
      this.$store.dispatch('getMain')

      /*new BScroll('.better',{
        click : true,
        scrollX : true
      })*/




    },

    methods : {
      _createScrollContainer(fe,container){
        const childNodes = fe.children
        let width = 0;
        const childsArr = Array.prototype.slice.call(childNodes)
        childsArr.forEach( everyChild => width += everyChild.offsetWidth)
        fe.style.width = width + 'px';

        new BScroll( container,{
          click : true ,
          scrollX : true,
          scrollY : true
        })

      }
    },

    watch : {
      dataMain (value) {
        this.$nextTick( () => {
          //categery-nav滑屏
          const ul= this.$refs.betterContainer;
          this._createScrollContainer(ul,'.category-nav')

          //.scroll-container滑屏
          const scroll = this.$refs.scroll
          this._createScrollContainer(scroll,'.scroll-container')


          //.scrolls-container滑屏
          const scrolls = this.$refs.scrolls
          this._createScrollContainer(scrolls,'.scrolls-container')

          //精选列表滑屏
          const select = this.$refs.select
          this._createScrollContainer(select,'.main_proSelect')

          new swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })

        })
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
 .main
   width 100%
   margin-bottom 1.7rem
   overflow hidden
   .fixed-content
     position fixed
     top 0
     left 0
     z-index 100
     .header-title
      background #fff
      width 100%
      height 1.5rem
      padding 0.25rem 0.5rem 0

      >span
        width 3.6rem
        display inline-block
        font-size 0.72rem
        font-family '楷体'
        font-weight bold
      >input
        width 11rem
        height 1.2rem
        font-size 0.6rem
        background #ededed
        border-radius 0.2rem
        box-sizing border-box
        padding-left 3rem
      >i
        position absolute
        top 17%
        left 25%
        font-size 0.7rem


     .category-nav
      font-size 0.6rem
      background #fff
      margin-bottom 0.15rem
      .better-container
        padding 0 0.8rem
        display flex
        >li
          padding 0.46rem
          white-space nowrap
          &.on
            color #b4282d
            border-bottom 0.02rem solid #b4282d



   .good-serve
     width 100%
     height 1.5rem
     display flex
     background #fff
     align-items center
     justify-content center
     margin-bottom 0.4rem

     li
      flex 1
      text-align center
      >i
         font-size 0.6rem
         transform scale(0.1)
         color #b4282d
      >span
         font-size 0.6rem
         color #666



   .tagList
    width 100%
    background #fff
    margin-bottom 0.4rem
    .list-header
      width 100%
      height 2.1rem
      text-align center
      line-height 2.1rem
      font-size 0.7rem
      >i
        font-size 0.7rem
        color #666
        margin-left -8px
    .list-content
      width 100%
      height 10rem
      padding 0 0.5rem
      margin-bottom 0.2rem
      >li
        width 46%
        height 48%
        float left
        margin-right 0.3rem
        margin-bottom 0.2rem
        position relative
        background #F4F4F4
        >img
          width 100%
          height 100%
        .detail
          position absolute
          top 7%
          left 5%
          display flex
          flex-direction column
          font-size 0.55rem
          color #333
          >span
            margin-bottom 0.3rem
          >div
            width 1rem
            height 0.5rem
            color #BCAA87
            border 2px solid #BCAA87
            font-size 0.4rem
            text-align center
            line-height 0.5rem
            border-radius 4px





   .newList
     background-color #fff
     margin-bottom 0.5rem
     .top
       width 100%
       height 5.5rem
       display flex
       flex-direction column
       align-items center
       justify-content space-around
       background-image url("./image/new.png")
       .text
          font-size 0.8rem
          color #9EB0C3
          margin-bottom -1.8rem
       .btn-watch
          width 5.4rem
          height 1.2rem
          background-color #D8E5F1
          border 0
          outline none
          font-size 0.6rem
          color #9EB0C3
          >i
            font-size 0.5rem
            color #9EB0C3
            margin-left -4px



     .scroll-container
        width 100%
        height 10.25rem
        ul
          height 414px
          display flex
          >li
            width 6rem
            height 100%
            padding-left 0.6rem
            padding-top 0.6rem
            position relative
            .isSelect
              position absolute
              top 9%
              left 12%
              padding 0.12rem
              border 2px solid #b4a078
              >div
                font-size 0.4rem
                color #b4a078
                text-align center


            >img
              width 100%
              height 6rem
              margin-bottom 0.3rem
            .item-desc
              font-size 0.6rem
              color #333
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              margin-top 0.4rem
            .new-item
              font-size 0.55rem
              margin-top 0.2rem
              margin-bottom 0.2rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              color #7f7f7f
            >span
              color #b4282d
            .discount
              padding 0 0.25rem
              background #f48f18
              line-height 0.7rem
              text-align center
              margin-left 0.3rem
              color #fff
              font-size 0.45rem


   .popular-items
     background-color #fff
     margin-bottom 0.5rem
     .top
       width 100%
       height 5.5rem
       display flex
       flex-direction column
       align-items center
       justify-content space-around
       background-image url("./image/host.png")
       .text
         font-size 0.8rem
         color #9EB0C3
         margin-bottom -1.8rem
       .btn-watch
         width 5.4rem
         height 1.2rem
         background-color #F4E9CB
         border 0
         outline none
         font-size 0.6rem
         color #9EB0C3
         >i
           font-size 0.5rem
           color #9EB0C3
           margin-left -4px
     .scrolls-container
       width 100%
       height 10.25rem
       ul
         height 414px
         display flex
         >li
           width 6rem
           height 100%
           padding-left 0.6rem
           padding-top 0.6rem
           &.last
             width 6rem
             height 100%
             >div
                width 100%
                height 6rem
                line-height 6rem
                border 4px solid #F4F4F4
                text-align center


           >img
             width 100%
             height 6rem
           .item-desc
             font-size 0.6rem
             color #333
             white-space nowrap
             overflow hidden
             text-overflow ellipsis
             margin-top 0.4rem
           .new-item
             font-size 0.55rem
             margin-top 0.2rem
             margin-bottom 0.2rem
             white-space nowrap
             overflow hidden
             text-overflow ellipsis
             color #7f7f7f
           >span
             color #b4282d
           .discount
             height 0.7rem
             line-height 0.7rem
             text-align center
             margin-top 0.3rem
             color #fff
             font-size 0.45rem
             display flex

             .right
              background #f48f18
              margin-left 0.2rem
              padding 0 0.2rem
             .left
              background #e5686d
              padding 0 0.2rem
              margin-left 0.3rem



   .main_timeLimit
       width 100%
       height 6.83rem
       background #fff
       padding 0.64rem 0
       .timeLimit_content
         width 13.87rem
         height 100%
         margin 0 1.07rem
         .left
           float left
           width 7.04rem
           height 100%
           .timeLimit
             font-size 0.853rem
             padding-top 1.493rem
             letter-spacing 0.213rem
           .time
             margin 0.7rem 0
             span
               display inline-block
               width 1.323rem
               height 1.19rem
               line-height 1.19rem
               text-align center
               background #444
               border-radius 6px
               color #fff
           .other
             font-size 0.512rem
         .right
           float left
           width 6.83rem
           height 6.83rem
           position relative
           img
             width 100%
             height 100%
           .price
             width 1.71rem
             height 1.71rem
             line-height 0.768rem
             border-radius 100%
             font-size 0.512rem
             text-align center
             background #F59524
             color #fff
             position absolute
             right 0.64rem
             bottom 0.64rem
             span
               text-decoration-line line-through
   .main_welfare
     margin-top 0.43rem
     width 100%
     height 6.4rem
     margin-bottom 0.6rem
     img
       width 100%
       height 100%
   .main_brand
     width 100%
     background #fff
     margin-bottom 0.4rem
     .list-header
       width 100%
       height 2.1rem
       text-align center
       line-height 2.1rem
       font-size 0.7rem
       >i
         font-size 0.7rem
         color #666
         margin-left -8px


     .main_proSelect
       width 100%
       height 9.69rem
       background #fff
       margin-bottom 0.43rem
       ul
         display flex
         li
           width 12.02rem
           margin-left 0.64rem
           >img
             width 100%
             height 6.83rem
           .text
             margin 0.43rem 0
             display flex
             justify-content space-between
             .describe
               font-size 0.6rem
               color #333
               white-space nowrap
               overflow hidden
               text-overflow ellipsis
             .price
               font-size  0.6rem
               color #B4282D
           .content
             font-size 0.6rem
             color #666
             white-space nowrap
             text-overflow ellipsis
             overflow hidden

   .msite_cartList
     width 100%

     .item
       width 100%
       background #fff
       margin-bottom 0.4rem
       .item_header
         width 100%
         height 2.56rem
         line-height  2.56rem
         text-align center
         font-size 0.6rem
       .item_list
         width 100%
         overflow hidden
         .lists
           float left
           margin-left 0.38rem
           width 7.38rem
           position relative
           .isSelect
             position absolute
             top 3%
             left 4%
             padding 0.12rem
             border 2px solid #b4a078
             >div
               font-size 0.4rem
               color #b4a078
               text-align center
           img
             width 100%
             height 100%
             background #f4f4f4
           .Introduction
             width 6.95rem
             height 1.49rem
             line-height 1.49rem
             background #F1ECE2
             color #9F8A60
             font-size 0.55rem
             white-space nowrap
             overflow hidden
             text-overflow ellipsis
             padding 0 10px
           .sale
             width 100%
             margin 0.34rem 0
             .sale_list
               display inline-block
               height 0.85rem
               line-height 0.85rem
               text-align center
               font-size 0.42rem
               color #fff
               padding 0 10px
               border-radius 6px
               &.red
                 background #e5686d
               &.orange
                 background #f48f18
           .describe
             width 100%
             font-size 0.6rem
             white-space nowrap
             overflow hidden
             text-overflow ellipsis
             margin-bottom 0.341rem
           .price
             width 100%
             font-size 0.68rem
             color #b4282d
           &.blank
             width 7.25rem
             height 8.833rem
             background #f4f4f4
             font-size 0.68rem
             display flex
             flex-direction column
             justify-content space-around
             align-items center
             .text
               text-align center
               color #333
             >i
               font-size 1.5rem
               color #7e8c8d
               margin-top -4.5rem

</style>
