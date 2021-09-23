<template>
  <div id='js-scroll' data-scroll-container>
    <HeroSection />
    <MeSection />
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  head() {
    return {
      title: '',
      meta: [
        { hid: 'og:description', name: 'og:description', content: '' },
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  mounted() {
    this.lmS = new this.LocomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true,
      reloadOnContextChange: true,
    });
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
