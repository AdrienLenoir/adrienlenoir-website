<template>
  <div class='main-container'>
    <header class="hero-header" data-scroll data-scroll-speed="1">
      <div class="me-text">
        <h1>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed="6">Adrien</span>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed="-6">Lenoir</span>
        </h1>
        <h2>Développeur web</h2>
      </div>
      <div data-scroll data-scroll-speed="-2" class="socials">
        <SocialIconWrapper>
          <SocialIcon icon='fab fa-linkedin-in' target='https://www.linkedin.com/in/adrien-lenoir-webdev' />
          <SocialIcon icon='fab fa-github' target='https://github.com/AdrienLenoir' />
          <SocialIcon icon='fas fa-envelope' target='mailto:lenoiradrien1@gmail.com' />
        </SocialIconWrapper>
      </div>

      <div data-scroll-sticky class='goto-bottom'>
      <a href='#me' data-scroll-to>
        <Arrow direction='bottom' />
      </a>
    </div>
    </header>


  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style lang='scss' scoped>
.hero-header {
  min-height: 100vh;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  .me-text {
    text-transform: uppercase;

    h1, h2 {
      font-weight: 200;
    }

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      font-size: 100px;
      line-height: 110px;
      letter-spacing: 10px;

      span:nth-child(1) {
        margin-right: 30%;
      }

      span:nth-child(2) {
        margin-left: 30%;
      }
    }

    h2 {
      color: var(--c-grey);
      font-size: 18px;
      margin-top: 20px;
      letter-spacing: 1px;
    }
  }

  .socials {
    margin-top: 100px;
  }



  @keyframes moveArrow {
    from {
      transform: translateY(-10%);
    }
    to {
      transform: translateY(20%);
    }
  }
}

.goto-bottom {
   position: absolute;
   bottom: 40px;
   right: 0;

   a {
     display: block;
     animation: 1s linear 2s infinite alternate moveArrow;
   }
 }

@media screen and (max-width: 848px) {
  .hero-header {
    .me-text {
      h1 {
        font-size: 70px;
        line-height: 80px;
        letter-spacing: 10px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .hero-header {
    .me-text {
      h1 {
        font-size: 50px;
        line-height: 60px;
        letter-spacing: 10px;
      }
    }
  }
}

@media screen and (max-width: 400px) {
  .hero-header {
    .me-text {
      h1 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 10px;
      }

      h2 {
        font-size: 16px;
      }
    }
  }
}
</style>
