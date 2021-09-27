<template>
  <div class='home'>
    <h2>Dashboard</h2>
  </div>
</template>

<script>
export default {
  components: {},
  layout: 'admin',
  head() {
    return {
      title: 'Admin dashboard',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  },
  mounted() {
    this.$store.commit('adminpage/SET_NAME', "Accueil")
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 35px;

  h2, h4 {
    color: var(--c-white);
  }
}
</style>
