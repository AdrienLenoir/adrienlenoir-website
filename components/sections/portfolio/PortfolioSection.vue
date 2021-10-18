<template>
  <section id='portfolio' class='portfolio-section'>
    <div ref='trigger' class='sections'>
      <div class='p-section one portfolio-main-section'>
        <div class='p-section-wrapper'>
          <div v-on-screenview-0-3 class='portfolio-main-section-text'>
            <h2>Mes réalisations</h2>
            <p>Découvrez quelques projets sur lesquels j’ai travaillé récemment.</p>
            <p class='more'>Vous désirez en voir plus ? <a href='mailto:lenoiradrien1@gmail.com'>Envoyez-moi un e-mail</a></p>
          </div>
          <div class='portfolio-main-section-images'>
            <div class='first-image-col'>
              <picture v-if='projects.length >= 1'>
                <img v-on-screenview :src='`/api/upload/${projects[0].image}`' :alt='`Maquette ${projects[0].name}`' style='transition-delay: .3s'>
              </picture>
              <picture v-if='projects.length >= 2'>
                <img v-on-screenview :src='`/api/upload/${projects[1].image}`' :alt='`Maquette ${projects[1].name}`'  style='transition-delay: .6s'>
              </picture>
            </div>
            <picture v-if='projects.length >= 3'>
              <img v-on-screenview :src='`/api/upload/${projects[2].image}`' :alt='`Maquette ${projects[2].name}`' style='transition-delay: .8s'>
            </picture>
          </div>
        </div>
      </div>
      <div v-for="project in projects"
           :key='project.id'
           class='p-section portfolio-show-section'>
        <div class='p-section-wrapper'>
          <div class='portfolio-show-section-content'>
            <div v-on-screenview-0-3 class='portfolio-show-section-text'>
              <h2>{{ project.name }}</h2>
              <ArrowLink :target='project.link' arrowdirection='right' arrowposition='right'>Visiter</ArrowLink>
              <p v-html='project.description.replace("\n","<br/>")'></p>
            </div>
            <div class='portfolio-show-section-image'>
              <picture>
                <img v-on-screenview-0-3 loading="lazy" :src='`/api/upload/${project.image}`' :alt='`${project.name} preview image`'>
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

export default {
  name: 'PortfolioSection',
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const trigger = this.$refs.trigger
    setTimeout(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1244px)"() {
          const sections = gsap.utils.toArray(".p-section");
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              start: "top top",
              trigger,
              scroller: "#js-scroll",
              pin: true,
              scrub: 0.5,
              snap: 1 / (sections.length - 1),
              end: () => `+=${trigger.offsetWidth}`
            },
          });
        }
      })
      ScrollTrigger.refresh();
    });

  },
}
</script>

<style lang='scss' scoped>

.portfolio-section {
  position: relative;
}

.sections {
  display: flex;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 1244px) {
    flex-flow: column;
  }
}

.p-section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &-wrapper {
    padding: 10vh 15vh;
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 900px) {
      height: auto;
      padding: 10vh 5vh;
    }
  }
}

.portfolio-main-section {
  .p-section-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-flow: column;
    }
  }

  &-text {
    flex: .4;
    max-width: 450px;
    margin-right: 30px;
    transform: translateY(20%);
    transition: all 1.5s ease-in-out;
    opacity: 0;

    @media screen and (max-width: 900px) {
      flex: 1;
      width: 100%;
      max-width: 100%;
      margin-right: 0;
    }

    h2 {
      font-size: 4vh;
      text-transform: uppercase;
      font-weight: 200;
      margin-bottom: 15px;

      @media screen and (max-width: 1244px) {
        font-size: 2.5vh;
      }
    }

    p {
      font-size: 2.5vh;
      margin-bottom: 20px;

      @media screen and (max-width: 1244px) {
        font-size: 2vh;
      }
    }

    .more {
      font-size: 2vh;
      color: var(--c-white);

      @media screen and (max-width: 1244px) {
        font-size: 1.8vh;
      }

      a {
        display: block;
        font-size: 15px;
        color: var(--c-grey);
        text-decoration: underline;
      }
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

    @media screen and (max-width: 900px) {
      flex: 1;
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      display: none;
    }

    .first-image-col {
      flex: .5;
      display: flex;
      flex-flow: column;
      height: 60vh;

      picture {
        flex: .5;
        transform: translateY(15%);
      }
    }

    picture {
      flex: .5;
      height: 50vh;
      overflow: hidden;
      margin: 10px;
      transform: translateY(-10%);

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
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: 10vh solid var(--c-white);

    @media screen and (max-width: 900px) {
      border: 5vh solid var(--c-white);
    }

    @media screen and (max-width: 600px) {
      border: 20px solid var(--c-white);
    }
  }

  &-content {
    padding: 5vh 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-flow: column;
      justify-content: center;
      padding: 10vh 5vh;
    }

    @media screen and (max-width: 600px) {
      padding: 40px 25px;
    }
  }

  &-text {
    flex-basis: 40%;
    margin-right: 30px;
    transform: translateX(-10%);
    transition: all 1.5s ease-in-out;
    opacity: 0;

    @media screen and (max-width: 1244px) {
      flex: .6;
    }

    @media screen and (max-width: 900px) {
      flex: 1;
      width: 100%;
      margin-right: 0;
    }

    h2 {
      font-size: 4vh;
      text-transform: uppercase;
      font-weight: 200;
      margin-bottom: 5px;

      @media screen and (max-width: 1244px) {
        font-size: 2.5vh;
      }
    }

    p {
      font-size: 2.5vh;
      margin-top: 10px;
      margin-bottom: 20px;

      @media screen and (max-width: 1244px) {
        font-size: 2vh;
      }
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

    @media screen and (max-width: 1244px) {
      height: 50vh;
      width: 40vw;
      right: 3%;
    }

    @media screen and (max-width: 900px) {
      position: initial;
      width: 100%;
      flex: 1;
    }

    picture {
      width: 100%;
      height: 70vh;
      overflow: hidden;
      margin: 10px;

      @media screen and (max-width: 1244px) {
        height: 50vh;
        width: 100%;
      }

      @media screen and (max-width: 900px) {
        margin: 0;
        margin-top: 10px;
      }

      img {
        height: 100%;
        min-height: 100%;
        width: 100%;
        min-width: 100%;
        object-fit: cover;
        object-position: top;
        transform: scale(.8);
        filter: grayscale(100%);
        transition: all 1.4s cubic-bezier(0.77, 0, 0.175, 1);

        &.is-inview {
          filter: none;
          transform: scale(1);
        }
      }
    }
  }
}

</style>
