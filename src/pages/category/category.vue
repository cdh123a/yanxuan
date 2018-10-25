<template>
  <div class="category">
    <header class="top">
      <input type="text" placeholder="搜索商品，共16867款好物">
      <i class="iconfont icon-sousuo"></i>
    </header>

    <section class="content">
      <ul class="category-name">
        <li :class="{active: changeIndex === index }" v-for="(category,index) in categoryL1List" :key="index" @click="changeIndex=index">
          {{category.name}}
        </li>
    </ul>

      <ul class="category-content">
        <li v-for="(category,index) in categoryL1List" :key="index" v-show="changeIndex === index">
          <div class="nav-img">
            <img :src="category.bannerUrl" alt="1">
          </div>

          <ul class="cate-detail">
            <div>
              <div class="title">{{category.name}}</div>
              <li v-for="(subCate,index) in category.subCateList" :key="index">
                <div>
                  <img :src="subCate.bannerUrl" alt="1">
                </div>
                <p>{{subCate.name}}</p>
              </li>
            </div>


          </ul>
        </li>

      </ul>

    </section>
  </div>
</template>

<script>
  import {mapGetters}from 'vuex'
  export default {
    data () {
      return {
        changeIndex : 0
      }
    },
    mounted () {
      //判断有没有main的数据 没有就发请求
      if(!this.banner){
        this.$store.dispatch('getMain')
      }
      this.$store.dispatch('getCategory')
    },

    computed : {
      ...mapGetters(['categoryL1List'])
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
  .category
    width 100%
    height 27rem
    background #fff
    overflow hidden
    .top
      position relative
      width 100%
      height 1.877rem
      box-sizing border-box
      padding 0.3rem 0.6rem
      bottom-border-3px(#F9F9F9)
      >input
        width 100%
        height 100%
        font-size 0.6rem
        background #EDEDED
        border-radius 10px
        box-sizing border-box
        padding-left 4.5rem
      >i
        position absolute
        font-size 0.8rem
        top 30%
        left 27%

    .content
      width 100%
      display flex
      .category-name
        width 5rem
        border-right 4px solid #666
        overflow hidden
        >li
          width 100%
          height 1.07rem
          font-size 0.652rem
          color #333
          text-align center
          line-height 1.07rem
          margin-bottom 0.65rem
          &:first-child
            margin-top 0.65rem
          &.active
            color #ab2b2b
            border-left 6px solid  #ab2b2b


      .category-content
        width 100%
        >li
          width 100%
          box-sizing border-box
          padding 0.64rem 0.64rem 0.448rem
          .nav-img
            >img
              width 100%
              height 4.096rem
          .cate-detail
              width 100%
              .title
                width 100%
                padding-top 0.52rem
                padding-bottom 0.31rem
                font-size 0.6rem
                font-weight 700
                border-bottom 2px solid #ECECEC
              li
                width 3.072rem
                float left
                margin-right 0.5rem
                margin-bottom 0.4rem
                >div
                  width 100%
                  height 3.072rem
                  >img
                    width 100%
                >p
                  font-size 0.512rem
                  text-align center
                  color #333
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis


</style>
