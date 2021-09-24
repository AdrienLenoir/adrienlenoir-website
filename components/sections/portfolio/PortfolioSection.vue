<template>
  <section id='portfolio' class='portfolio-section' data-scroll data-scroll-direction='horizontal'>
    <div ref='trigger' class='sections'>
      <div class='p-section one portfolio-main-section'>
        <div class='p-section-wrapper'>
          <div class='portfolio-main-section-text'>
            <h2>Mes réalisations</h2>
            <p>Ut faucibus justo quis nisl. Etiam vulputate, sapien eu egestas rutrum, leo neque luctus dolor, sed hendrerit tortor metus ut dui. </p>
          </div>
          <div class='portfolio-main-section-images'>
            <div class='first-image-col'>
              <picture>
                <img src='/dervoo.png' alt='Maquette dervoo.com'>
              </picture>
              <picture>
                <img src='/dervoo.png' alt='Maquette dervoo.com'>
              </picture>
            </div>
            <picture>
              <img src='/dervoo.png' alt='Maquette dervoo.com'>
            </picture>
          </div>
        </div>
      </div>
      <div id='first-portfolio' class='p-section two'>TWO</div>
      <div class='p-section three'>THREE</div>
      <div class='p-section four'>FOUR</div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default {
  name: 'PortfolioSection',
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
          end: () => `+=${this.$refs.trigger.offsetWidth}`,
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
    padding: 10vh;
    height: 100vh;
    width: 100vw;
  }
}

.portfolio-main-section {
  .p-section-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-text {
    flex: .4;
    margin-right: 30px;

    h2 {
      text-transform: uppercase;
      font-weight: 200;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
      margin-bottom: 20px;
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
      border-radius: 10px;
      transform: translateY(-15%);

      img {
        height: 100%;
        min-height: 100%;
        width: 100%;
        min-width: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
  }
}

.one {

}

.two {
  background-color: #595B83;
}

.three {
  background-color: #333456;
}

.four {
  background-color: #060930;
}
</style>
