<template>
  <div id='js-scroll' data-scroll-container>
    <HeroSection />
    <MeSection />
    <PortfolioSection />
    <h1 style='color: white;text-align: center;font-size: 50px;padding: 45vh 0;'>COUCOU</h1>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    const scrollEl = document.querySelector("#js-scroll");

    const lmS = new this.LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      reloadOnContextChange: true,
      mobile: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
    });

    lmS.on('scroll', () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (lmS) {
          return arguments.length
            ? lmS.scrollTo(value, 0, 0)
            : lmS.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (lmS) {
          return arguments.length
            ? lmS.scrollTo(value, 0, 0)
            : lmS.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    ScrollTrigger.addEventListener('refresh', () => lmS.update())
    ScrollTrigger.refresh()
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
