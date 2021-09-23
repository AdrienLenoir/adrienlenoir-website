<template>
  <section id='me' class='me-section'>
    <div class='main-container' data-scroll data-scroll-direction='vertical' data-scroll-offset='50,50' data-scroll-speed="2">
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
          <transition name="me-content-display-transition">
            <div v-show="activeSubSection === 0" class='me-content-display-item presentation'>
              <h4>Présentation</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
          </transition>
          <transition name="me-content-display-transition">
            <div v-show="activeSubSection === 1" class='me-content-display-item experience'>
              <h4>Expériences</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
          </transition>
          <transition name="me-content-display-transition">
            <div v-show="activeSubSection === 2" class='me-content-display-item school'>
              <h4>Études & Formations</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
          </transition>
          <transition name="me-content-display-transition">
            <div v-show="activeSubSection === 3" class='me-content-display-item competence'>
              <h4>Compétences</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla. Habitant morbi tristique senectus et. Nullam vehicula ipsum a arcu cursus vitae congue. Varius morbi enim nunc faucibus a. Vitae suscipit tellus mauris a diam. Euismod nisi porta lorem mollis aliquam ut porttitor. Libero volutpat sed cras ornare arcu dui. Lorem sed risus ultricies tristique nulla aliquet enim. Quisque sagittis purus sit amet volutpat consequat. Convallis aenean et tortor at risus. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</p>
            </div>
          </transition>
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
  padding: 120px 0;
  min-height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;

  .me-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-card {
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
}
</style>
