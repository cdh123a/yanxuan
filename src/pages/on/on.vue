<template>
  <div class="zy-bd">
    <div class="zy-row">
      <img src="./images/2.jpg" alt="严选">
      <img src="./images/5.jpg" alt="严选">
    </div>
    <div class="zy-row">
      <img src="./images/6.jpg" class="zy-img" alt="严选">
      <div class="button"></div>
      <div class="use" @click="$router.replace('/main')"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>
  .zy-bd
    position absolute
    top 0
    left 0
    bottom 0
    background #E3E3E2
    img
      width 100%
      outline none
      vertical-align top
    .button
      position: absolute
      width 9.216rem
      height 2.01rem
      bottom 32%
      left 58%
      margin-left -2.688rem
      font-size 0.512rem
    .use
      position absolute
      width 5.42rem
      height 0.64rem
      bottom 27%
      left 33%

</style>
