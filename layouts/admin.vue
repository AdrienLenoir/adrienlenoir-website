<template>
  <div class='panel-wrapper'>
    <div class='top-header'>
      <ul class='top-header-left'>
        <li class='mobile-button'>
          <i class='fas fa-bars'></i>
        </li>
        <li>
          <p class='page-title'>
            <NuxtLink to='/'><i class='fi-rr-home'></i></NuxtLink>
            {{ pagename }}
          </p>
        </li>
      </ul>

      <ul class='top-header-user'>
        <li class='user-profil'>
          <a href='#' title='Déconnexion' @click.prevent='logout()'>
            <i class='fi-rr-sign-out'></i>
          </a>
        </li>
      </ul>
    </div>

    <div class='left-sidebar'>
      <div class='close-sidebar-button'>
        <i class='fas fa-times'></i>
      </div>
      <div class='top-content'>
        <div class='logo-text'>
          <p>Dashboard</p>
        </div>
      </div>

      <div class='panel-navigation'>
        <ul>
          <li>
            <Navigation link='/admin' icon='fi-rr-home' name='Home' />
          </li>
          <li>
            <Navigation link='/admin/projects' icon='fi-rr-gallery' name='Projets' />
          </li>
        </ul>
      </div>
    </div>

    <div class='panel-wrapper-content'>
      <transition name='panel-wrapper-content-transition'>
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
import cookie from 'js-cookie'

export default {
  components: {},
  middleware: 'auth',
  data() {
    return {}
  },
  computed: {
    pagename() {
      return this.$store.state.adminpage.page_name
    }
  },
  methods: {
    logout() {
      cookie.remove('token');
    }
  }
}
</script>

<style lang='scss'>
$admin-header-height: 90px;
$admin-nav-width: 270px;

:root {
  --c-primary: #19191A;
  --c-secondary: #7C6ADE;
  --c-secondary-hover: #5740d5;


  --c-tertiary: #202021;

  --c-green: #8EE485;

  --c-white: #FCFCFE;

  --v-border-radius: 10px;
}

@import "~/assets/style/buefy/buefy.scss";

body {
  overflow-x: hidden !important;
  background-color: var(--c-tertiary);
  color: var(--c-white);
  font-size: 18px;
  font-family: 'Hammersmith One', sans-serif;
  scroll-behavior: smooth;
}

body ::selection {
  background: var(--c-secondary);
  color: var(--c-white);
}

a {
  text-decoration: none;
  cursor: pointer;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--c-secondary);

  span {
    color: var(--c-secondary-t-60);
  }
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.75em;
}

h3 {
  font-size: 1.50em;
}

h4 {
  font-size: 1.25em;
}

h5 {
  font-size: 1em;
}

h6 {
  font-size: .75em;
}

table {
  border: none !important;
}

.panel-wrapper {
  --wrapper-spacing: 2rem;
  flex-wrap: wrap;
  display: grid;
  height: 100vh;
  grid-template-rows: $admin-header-height 1fr 0;
  grid-template-columns: $admin-nav-width 1fr;
  grid-template-areas: "nav    header"
                         "nav    main";

  .top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 100%;
    grid-area: header;
    height: 50px;
    padding: 0 20px;
    background-color: var(--c-primary);
    margin: 20px var(--wrapper-spacing);
    border-radius: var(--v-border-radius);

    ol, ul {
      list-style: none;
    }

    .top-header-left {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .mobile-button {
        display: none;
        margin-right: 20px;
        cursor: pointer;

        i {
          font-size: 20px;
        }
      }

      .page-title {
        font-size: 16px;
        color: var(--c-white);
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          color: var(--c-secondary);
          margin-top: -2px;
          margin-right: 8px;
        }
      }
    }

    &-user {
      display: flex;
      justify-content: flex-end;

      li:not(:first-child) {
        margin-left: 15px;
      }

      a {
        position: relative;
        color: var(--c-secondary);
        transition: color .3s ease-in-out;

        i {
          font-size: 22px;
          color: var(--c-secondary);
          transition: color, transform .3s ease-in-out;
        }

        &:hover {
          color: var(--c-secondary-hover);
        }
      }
    }
  }

  .left-sidebar {
    position: relative;
    grid-area: nav;
    flex: 0 0 $admin-nav-width;
    padding: 0 25px;
    background-color: var(--c-primary);
    max-height: 100vh;
    min-height: 100vh;
    overflow: auto;
    box-shadow: 0px 0px 20px 0px rgba(22, 22, 22, 0.1);

    display: flex;
    align-items: flex-start;
    flex-flow: column;
    justify-content: flex-start;

    ol, ul {
      list-style: none;
    }

    .close-sidebar-button {
      opacity: 0;
      position: fixed;
      z-index: -1;
      left: 230px;
      top: -25px;
      cursor: pointer;
      transition: all .3s ease-in-out;

      i {
        color: var(--c-secondary);
        font-size: 24px;
      }
    }

    .top-content {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      height: 70px;
      text-align: center;
      width: 100%;

      .logo-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        width: 100%;

        img {
          height: 18px;
          width: auto;
          margin: auto;
        }

        p {
          margin-left: 4px;
          flex-basis: 100%;
          font-size: 18px;
          text-transform: uppercase;
        }
      }

    }

    .panel-navigation {
      margin-top: 15px;
      flex: 1;
      width: 100%;

      &-title {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: var(--c-white);
        margin-top: 30px;
      }

      ul {
        height: 100%;
        display: flex;
        flex-flow: column;

        li {
          margin-top: 5px;

          a {
            font-size: 21px;
            color: var(--c-white);
            transition: color .3s ease-in-out;

            &:hover {
              color: var(--c-secondary-hover);
            }
          }
        }
      }
    }

  }

  &-content {
    flex: 1;
    grid-area: main;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px var(--wrapper-spacing);

    &-container {
      background-color: var(--c-white);
      margin: var(--wrapper-spacing);
      padding: 25px;
    }
  }
}

@media only screen and (max-width: 978px) {
  .panel-wrapper {
    grid-template-areas:  " header  "
                              " main    ";
    grid-template-columns: 1fr;

    .top-header {
      .top-header-left {
        .mobile-button {
          display: block;
        }
      }
    }

    .left-sidebar {
      position: absolute;
      z-index: 999;
      left: -250px;
      transition: all .3s ease-in-out;
    }

    .show-sidebar {
      left: 0;
      width: 250px;

      .close-sidebar-button {
        opacity: 1;
        z-index: 999;
        top: 25px;
      }
    }

    .left-sidebar-show-responsive {
      display: inline !important;
      z-index: 9999 !important;
      left: 0 !important;
      position: absolute;
      height: 100vh;
    }
  }
}

.panel-wrapper-content-transition-enter-active, .panel-wrapper-content-transition-leave-active {
  transition: all .8s;
}

.panel-wrapper-content-transition-enter, .panel-wrapper-content-transition-leave-active {
  opacity: 0;
  transform: translateX(-40px);
}

</style>
