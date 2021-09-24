<template>
  <section id='me' class='me-section'>

    <div id='myid' class='me-section-wrapper'>
      <div class='me-section-sidebar' data-scroll data-scroll-sticky data-scroll-target="#myid">
        <div class='me-section-sidebar-card'>
          <MeCard />
        </div>
        <div class='me-section-sidebar-navigation'>
          <MeNavigation :active-sub-section='activeSubSection' :sub-sections='subSections' />
        </div>
      </div>
      <div class='me-section-content'>
        <div id='me-subsection-0' class='me-section-content-item presentation'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3>Présentation</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
          </div>
        </div>
        <div id='me-subsection-1' class='me-section-content-item experience'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3>Expériences</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
          </div>
        </div>
        <div id='me-subsection-2' class='me-section-content-item school'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3>Études & Formations</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
          </div>
        </div>
        <div id='me-subsection-3' class='me-section-content-item competence'>
          <div class='me-section-content-item-wrapper'>
            <div class='me-section-content-item-title'>
              <h3>Compétences</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
          </div>
        </div>
      </div>
    </div>

    <!--<div class='main-container' data-scroll data-scroll-direction='vertical' data-scroll-offset='50,50' data-scroll-speed="2">
      <div class='me-header'>
        <div class='me-header-card'>
          <MeCard />
        </div>
        <div class='nav-title'>
          <h3>{{ subSections.filter(section => section.id === activeSubSection)[0].name }}</h3>
        </div>
      </div>
      <div class='me-content'>
        <div class='me-content-navigation'>
          <MeNavigation :active-sub-section='activeSubSection' :sub-sections='subSections' />
        </div>
        <div class='me-content-display'>
            <div class='me-content-display-item presentation'>
              <h4>Présentation</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
            <div class='me-content-display-item experience'>
              <h4>Expériences</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
            <div class='me-content-display-item school'>
              <h4>Études & Formations</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
            <div class='me-content-display-item competence'>
              <h4>Compétences</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
        </div>
      </div>
    </div>-->
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
      activeSubSection: 0,
      subSections
    }
  },
  methods: {
    setActiveSubSection(subSection) {
      this.activeSubSection = subSection
    }
  }
}
</script>

<style lang='scss' scoped>
.me-section {
  background-color: var(--c-white);
  color: var(--c-primary);
  min-height: calc(100vh);
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

    &-item {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;

      &-title {
        text-align: center;
        flex: .6;
        text-transform: uppercase;
        font-size: 28px;
        padding: 2vw 0;
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
