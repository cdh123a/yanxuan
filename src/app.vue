<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>

</template>

<script>
  import FooterGuide from './components/footer-guide/footer-guide.vue'
  export default {
    components : {
      FooterGuide
    }
  }
</script>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus" scoped>

</style>
