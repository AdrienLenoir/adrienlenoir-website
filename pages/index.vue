<template>
  <div id='js-scroll' data-scroll-container>
    <HeroSection />
    <MeSection />
    <PortfolioSection :projects='projects' />
    <FooterSection />
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FooterSection from '../components/sections/FooterSection'
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { FooterSection },
  async asyncData({ $axios }) {
    const resProjects = await $axios.$get('/projects/last')

    return {
      projects: resProjects.projects ? resProjects.projects : [],
    }
  },
  data() {
    return {
      projects: []
    }
  },
  mounted() {
    const scrollEl = document.querySelector("#js-scroll");

    const lmS = new this.LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: .8,
      tablet: {
        breakpoint: 1244
      }
    });

    lmS.on('scroll', () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        return arguments.length
          ? lmS.scrollTo(value, 0, 0)
          : lmS.scroll.instance.scroll.y;
      },
      scrollLeft(value) {
        return arguments.length
          ? lmS.scrollTo(value, 0, 0)
          : lmS.scroll.instance.scroll.x;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener('refresh', () => lmS.update())
    ScrollTrigger.refresh()
  },
  methods: {}
}
</script>
