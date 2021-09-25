<template>
  <section id='portfolio' class='portfolio-section' data-scroll data-scroll-direction='horizontal'>
    <div ref='trigger' class='sections'>
      <div class='p-section one portfolio-main-section'>
        <div class='p-section-wrapper'>
          <div v-on-screenview-0-3 class='portfolio-main-section-text'>
            <h2>Mes réalisations</h2>
            <p>Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. </p>
          </div>
          <div class='portfolio-main-section-images'>
            <div class='first-image-col'>
              <picture>
                <img v-on-screenview src='/dervoo.png' alt='Maquette dervoo.com' style='transition-delay: .3s'>
              </picture>
              <picture>
                <img v-on-screenview src='/dervoo.png' alt='Maquette dervoo.com'  style='transition-delay: .6s'>
              </picture>
            </div>
            <picture>
              <img v-on-screenview src='/dervoo.png' alt='Maquette dervoo.com' style='transition-delay: .8s'>
            </picture>
          </div>
        </div>
      </div>
      <div v-for="(p, i) in portfolio"
           :key='p.id'
           class='p-section portfolio-show-section'
           :class="i % 2 !== 0 ? 'portfolio-show-section-invers' : ''">
        <div class='p-section-wrapper'>
          <div class='portfolio-show-section-content'>
            <div v-on-screenview-0-3 class='portfolio-show-section-text'>
              <h2>{{ p.name }}</h2>
              <ArrowLink arrowdirection='right' arrowposition='right'>Visiter</ArrowLink>
              <p>{{ p.description }}</p>
            </div>
            <div class='portfolio-show-section-image'>
              <picture>
                <img v-on-screenview-0-3 :src='p.image' :alt='`${p.name} maquette image`'>
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const portfolio = [
  { id: 0, name: "Dervoo.com", link: "https://dervoo.com/", image: "/dervoo.png", description: "Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. Etiam id pede " },
  { id: 1, name: "Business.dervoo.com", link: "https://businessdervoo.com/", image: "/dervoo-business.png", description: "Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. Etiam id pede " },
  { id: 2, name: "Dervoo.com", link: "https://dervoo.com/", image: "/dervoo.png", description: "Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. Etiam id pede " },
  { id: 3, name: "Business.dervoo.com", link: "https://businessdervoo.com/", image: "/dervoo-business.png", description: "Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. Etiam id pede " },

]

export default {
  name: 'PortfolioSection',
  data() {
    return {
      portfolio
    }
  },
  mounted() {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".p-section");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: this.$refs.trigger,
          scroller: "#js-scroll",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${this.$refs.trigger.offsetWidth}`
        },
      });
      ScrollTrigger.refresh();
    });

  }
}
</script>

<style lang='scss' scoped>

.portfolio-section {
  position: relative;
}

.sections {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  width: 400vw;
}

.p-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  will-change: transform;

  &-wrapper {
    padding: 10vh 15vh;
    height: 100vh;
    width: 100vw;
  }
}

.portfolio-main-section {
  .p-section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-text {
    flex: .4;
    max-width: 500px;
    margin-right: 30px;
    transform: translateY(20%);
    transition: all 1.5s ease-in-out;
    opacity: 0;

    h2 {
      text-transform: uppercase;
      font-weight: 200;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
      margin-bottom: 20px;
    }

    &.is-inview {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &-images {
    flex: .6;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .first-image-col {
      flex: .5;
      display: flex;
      flex-flow: column;
      height: 70vh;

      picture {
        flex: .5;
        transform: translateY(20%);
      }
    }

    picture {
      flex: .5;
      height: 60vh;
      overflow: hidden;
      margin: 10px;
      transform: translateY(-15%);

      img {
        height: 100%;
        min-height: 100%;
        width: 100%;
        min-width: 100%;
        object-fit: cover;
        object-position: top;
        clip-path: inset(100% 0% 0% 0%);
        transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);

        &.is-inview {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
    }
  }
}

.portfolio-show-section {
  background-color: var(--c-primary);
  color: var(--c-white);

  .p-section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 10vh solid var(--c-white);
  }

  &-inverse {
    .portfolio-show-section-text {
      order: 2;
      margin-right: 0;
      margin-left: 30px;
    }
  }

  &-content {
    padding: 5vh 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-text {
    flex: .4;
    margin-right: 30px;
    transform: translateX(-10%);
    transition: all 1.5s ease-in-out;
    opacity: 0;

    h2 {
      text-transform: uppercase;
      font-weight: 200;
      margin-bottom: 5px;
    }

    p {
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 20px;
    }

    &.is-inview {
      transform: translateX(0);
      opacity: 1;
    }
  }

  &-image {
    position: absolute;
    height: 60vh;
    width: 55vw;
    right: 0;
    flex: .5;
    display: flex;
    justify-content: center;
    align-items: center;

    picture {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      margin: 10px;

      img {
        height: 100%;
        min-height: 100%;
        width: 100%;
        min-width: 100%;
        object-fit: cover;
        object-position: top;
        //clip-path: inset(100% 0% 0% 0%);
        transform: scale(.8);
        filter: grayscale(100%);
        transition: all 1.4s cubic-bezier(0.77, 0, 0.175, 1);

        &.is-inview {
          filter: none;
          transform: scale(1);
          //clip-path: inset(0% 0% 0% 0%);
        }
      }
    }
  }
}

</style>
