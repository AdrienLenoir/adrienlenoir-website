<template>
  <div>
    <br><br><br>
    <SocialIconWrapper>
      <SocialIcon icon='fab fa-behance' />
      <SocialIcon icon='fab fa-linkedin-in' />
      <SocialIcon icon='fab fa-github' />
      <SocialIcon icon='fas fa-envelope' />
    </SocialIconWrapper>
    <br><br><br>
    <Arrow direction="top" />
    <Arrow direction="right" />
    <Arrow direction="bottom" />
    <Arrow direction="left" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },

  head() {
    return {
      title: '',
      meta: [
        { hid: 'og:description', name: 'og:description', content: '' },
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
