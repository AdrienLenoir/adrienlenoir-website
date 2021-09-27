<template>
  <section id='me' class='me-section'>

    <div id='me-wrapper' class='me-section-wrapper'>
      <div class='me-section-sidebar' data-scroll data-scroll-sticky data-scroll-target="#me-wrapper">
        <div class='me-section-sidebar-card'>
          <MeCard />
        </div>
        <div class='me-section-sidebar-navigation'>
          <MeNavigation :sub-sections='subSections' />
        </div>
      </div>
      <div class='me-section-content'>
        <div id='me-subsection-0' class='me-section-content-item presentation'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3 data-scroll data-scroll-speed='-1.5' data-scroll-direction='horizontal'>Présentation</h3>
            </div>
            <div class='presentation-content'>
              <p>Hello! Je m'appel Adrien, j'ai actuellement {{ getAge() }} ans, je réside en Belgique et je suis passionné par l'informatique en général.</p>
              <br>
              <p>Fort de plus de 7 ans d'expérience dans le développement informatique,</p>
              <p>
                j'ai fait mes débuts sur les jeux vidéo en créant des serveurs sur le jeu "Minecraft", réalisant des plugins développés en Java pour mon propre épanouissement ou pour des amis.
              </p>
              <br>
              <p>
                Par la suite, je me suis intéressé au développement Web, qui est aujourd'hui et depuis 5 ans, une réelle passion pour moi.
              </p>
            </div>
          </div>
        </div>
        <div id='me-subsection-1' class='me-section-content-item experience'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3 data-scroll data-scroll-speed='-1.5' data-scroll-direction='horizontal'>Expériences</h3>
            </div>
            <div class='experience-content'>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="far fa-building"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>Stage en tant que technicien informatique</h4>
                  <p class='time-item-content-time'><i class="far fa-clock"></i> 16/12/2019 - 20/12/2019</p>
                  <p>Réalisation d'un stage en tant que technicien en informatique à l'hôpital d'Auvelais dans le cadre de mes études.</p>
                </div>
              </div>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="fas fa-book"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>Réalisation de sites web</h4>
                  <p>Réalisation de sites web pour mon propre usage ou pour des amis & connaissances.</p>
                  <ArrowLink target='#portfolio' arrowdirection='bottom' arrowposition='right' dark>Voir mes réalisations</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='me-subsection-2' class='me-section-content-item school'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3 data-scroll data-scroll-speed='-1.5' data-scroll-direction='horizontal'>Études & Formations</h3>
            </div>
            <div class='time-item-content'>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>Becode</h4>
                  <p class='time-item-content-time'><i class="far fa-clock"></i> 25/05/2021 - Maintenant</p>
                  <p>Formatation de type développement web à Becode.</p>
                </div>
              </div>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>Bootcamp en développement</h4>
                  <p class='time-item-content-time'><i class="far fa-clock"></i> 07/12/2020 - 19/01/2021</p>
                  <p>Formation de type Bootcamp en développement à Technofutur TIC.</p>
                </div>
              </div>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>Tremplin OLL</h4>
                  <p class='time-item-content-time'><i class="far fa-clock"></i> 24/08/2020 - 11/09/2021</p>
                  <p>Formation de type tremplin à Technofutur TIC.</p>
                </div>
              </div>
              <div class='time-item'>
                <div class='time-item-icon'>
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <div class='time-item-content'>
                  <h4 class='time-item-content-title'>CESS + Qualification en Technicien en informatique</h4>
                  <p class='time-item-content-time'><i class="far fa-clock"></i> 2018 - 2020</p>
                  <p>Institut technique de Namur (ITN).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='me-subsection-3' class='me-section-content-item competence'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3 data-scroll data-scroll-speed='-1.5' data-scroll-direction='horizontal'>Compétences</h3>
            </div>
            <div class='skill-content'>
              <p>En réalisant des sites web pour moi-même ou pour des connaissances, j'ai développé des connaissances dans de nombreux domaines du développement web.
                Ainsi que durant mes études en tant que technicien en informatique où j'ai aquis des connaissances dans la gestion de serveur Windows & Linux ainsi qu'en réseaux informatiques.</p>
              <div class='skills-cols'>
                <div class='skills-col'>
                  <div class='time-item'>
                    <div class='time-item-icon'>
                      <i class="fas fa-code"></i>
                    </div>
                    <div class='time-item-content'>
                      <h4 class='time-item-content-title'>Développement Web</h4>
                      <p>
                        <i>HTML, CSS, SASS, JavaScript, PHP, TypeScript, NuxtJS, NodeJS, NestJS, SQL & MySQL</i>
                      </p>
                    </div>
                  </div>
                </div>
                <div class='skills-col'>
                  <div class='time-item'>
                    <div class='time-item-icon'>
                      <i class="fas fa-terminal"></i>
                    </div>
                    <div class='time-item-content'>
                      <h4 class='time-item-content-title'>Technicien en informatique</h4>
                      <p>
                        <i>Windows, Windows serveur, linux, terminal, réseaux informatique, apache & nginx.</i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class='skills-cols'>
                <div class='skills-col'>
                  <div class='time-item'>
                    <div class='time-item-icon'>
                      <i class="fas fa-code-branch"></i>
                    </div>
                    <div class='time-item-content'>
                      <h4 class='time-item-content-title'>Utilisation de GIT</h4>
                      <p>
                        <i>Git & git flow, github & gitlab</i>
                      </p>
                    </div>
                  </div>
                </div>
                <div class='skills-col'>
                  <div class='time-item'>
                    <div class='time-item-icon'>
                      <i class="fas fa-paint-brush"></i>
                    </div>
                    <div class='time-item-content'>
                      <h4 class='time-item-content-title'>Conception de maquette web</h4>
                      <p>Affinity designer, photoshop.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
const subSections = [
  { id: 0, name: "Présentation" },
  { id: 1, name: "Expériences" },
  { id: 2, name: "Études & Formations" },
  { id: 3, name: "Compétences" },
]

export default {
  name: 'MeSection',
  data() {
    return {
      subSections
    }
  },
  methods: {
    getAge() {
      const dob = new Date("07/03/1998")
      const diffMs = Date.now() - dob.getTime();
      const ageDt = new Date(diffMs);

      return Math.abs(ageDt.getUTCFullYear() - 1970);
    }
  }
}
</script>

<style lang='scss' scoped>
.me-section {
  background-color: var(--c-white);
  color: var(--c-primary);
  min-height: 50vh;
  padding: 60px 0 120px 0;

  &-wrapper {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 60px 5vw 0px 5vw;
  }

  &-sidebar {
    flex: .4;
    height: calc(100vh - 120px);
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  &-content {
    flex: .6;
    margin-left: 40px;
    padding: 50px 0;

    p {
      color: var(--c-grey-dark);
    }

    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10vh 0;
      min-width: 100%;

      &-title {
        margin-left: 30px;
        flex: .6;
        text-transform: uppercase;
        font-size: 28px;
        padding: 2vw 0;
      }
    }
  }

  .time-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    &:not(:first-child) {
      margin-top: 20px;
    }

    &-icon {
      margin-right: 20px;
      width: 75px;

      i {
        color: var(--c-grey-dark);
        font-size: 60px;
      }
    }

    &-content {

      &-title {
        text-transform: uppercase;
        margin-bottom: 3px;
      }

      &-time {
        margin-bottom: 10px;
        color: var(--c-grey-dark);

        i {
          color: var(--c-primary);
        }
      }
    }
  }

  .skills-cols {
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
    margin: -20px;
    margin-top: 30px;

    .skills-col {
      flex: .5;
      margin: 20px;

      .time-item:not(:first-child) {
        margin-top: 30px;
      }
    }
  }

}




/*
.me-section {
  background-color: var(--c-white);
  color: var(--c-primary);
  padding: 120px 0;
  min-height: calc(100vh);



  .me-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-card {
      position: sticky;
      top: 0;
      flex: .4;
    }

    .nav-title {
      text-align: center;
      flex: .6;
      text-transform: uppercase;
      font-size: 28px;
    }
  }

  .me-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    //margin-top: 40px;

    &-navigation {
      flex: .4;
    }

    &-display {
      position: relative;
      flex: .6;

      &-item {
        background-color: var(--c-primary);
        border-radius: var(--v-border-radius);
        color: var(--c-white);
        padding: 30px;
      }
    }
  }
}

.me-content-display-transition-enter-active, .me-content-display-transition-leave-active {
  transition: all .8s;
}
.me-content-display-transition-enter, .me-content-display-transition-leave-active {
  position: absolute;
  top: 0;
  transform: translateY(100%);
  opacity: 0;
}*/
</style>
