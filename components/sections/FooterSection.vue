<template>
  <footer class='footer' data-scroll data-scroll-speed="4">
    <div class='ask-me' >
      <p>Me contacter ?</p>
      <SocialIconWrapper>
        <SocialIcon icon='fab fa-linkedin-in' small target='https://www.linkedin.com/in/adrien-lenoir-webdev' />
        <SocialIcon icon='fas fa-envelope' small target='mailto:lenoiradrien1@gmail.com' />
      </SocialIconWrapper>
    </div>
    <p class='copyright'>© {{ getCurrentYear() }} ADRIEN LENOIR. TOUS DROITS RÉSERVÉS</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang='scss' scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  min-height: 100vh;

  .ask-me {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    p {
      text-transform: uppercase;
      font-size: 30px;
    }
  }

  .copyright {
    margin-top: 50px;
    font-size: 18px;
  }
}
</style>
