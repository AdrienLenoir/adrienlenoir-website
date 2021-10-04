<template>
  <footer class='footer'>
    <div class='ask-me'>
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
  height: 100vh;

  @media screen and (max-width: 900px) {
    height: auto;
    padding: 10vh 0;
  }

  .ask-me {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    p {
      text-transform: uppercase;
      font-size: 4vh;

      @media screen and (max-width: 900px) {
        font-size: 3vh;
      }
    }
  }

  .copyright {
    margin-top: 50px;
    font-size: 2vh;

    @media screen and (max-width: 900px) {
      font-size: 1.5vh;
    }
  }
}
</style>
