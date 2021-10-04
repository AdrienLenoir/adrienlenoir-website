<template>
  <div class='me-card'>
    <div class='me-avatar'>
      <img src='/me.png' alt='Adrien Lenoir' width='159' height='160'>
    </div>
    <div class='me-content'>
      <h2>Adrien Lenoir</h2>
      <p>Passionné par l'informatique depuis mon enfance, je me suis spécialisé dans le développement Web depuis maintenant plus de 5 ans.</p>
      <ul class='words'>
        <li>Passionné</li>
        <li>Autonome</li>
        <li>Patient</li>
        <li>Créatif</li>
        <li>Curieux</li>
        <li>Auto apprentissage</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeCard'
}
</script>

<style lang='scss' scoped>
.me-card {
  position: relative;
  padding: 30px 25px;
  background-color: var(--c-primary);
  border-radius: var(--v-border-radius);
  max-width: 600px;

  @media screen and (max-width: 1244px) {
    width: 100%;
    max-width: initial;
  }

  .me-avatar {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-35%, -20%);

    @media screen and (max-width: 1244px) {
      transform: translate(-15%, -35%);
    }

    img {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      border: 8px solid var(--c-primary);

      @media screen and (max-width: 670px) {
        width: 110px;
        height: 110px;
        border: 5px solid var(--c-primary);
      }
    }
  }

  .me-content {
    margin-left: 60px;
    color: var(--c-white);

    @media screen and (max-width: 670px) {
      margin-left: 40px;
    }

    h2 {
      font-size: 24px;
      text-align: center;
      margin-bottom: 15px;

      @media screen and (max-width: 670px) {
        margin-bottom: 25px;
      }
    }

    p {
      font-size: 16px;
      margin-bottom: 15px;

      @media screen and (max-width: 670px) {
        font-size: 18px;
      }
    }

    .words {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: -5px;
      flex-flow: row wrap;

      li {
        font-size: 16px;
        margin: 5px;
        font-weight: 400;
        line-height: 16px;
      }
    }
  }
}
</style>
