<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>

<style lang="scss">
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

h1,h2,h3,h4,h5,h6 {
  color: var(--c-secondary);

  span {
    color: var(--c-secondary-t-60);
  }
}

h1 { font-size: 2em; }
h2 { font-size: 1.75em; }
h3 { font-size: 1.50em; }
h4 { font-size: 1.25em; }
h5 { font-size: 1em; }
h6 { font-size: .75em; }
</style>
