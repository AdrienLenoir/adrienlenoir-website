<template>
  <a href="" class="social-icon">
    <i :class="icon" />
  </a>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.social-icon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: var(--c-white);
  margin: 20px;
  transition: transform .25s ease-in-out;

  &:after {
    position: absolute;
    z-index: -1;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    background-color: var(--c-white-t-30);
    content: "";
    transition: transform .25s ease-in-out;
  }

  i {
    font-size: 22px;
    color: var(--c-primary);
  }

  &:hover {
      transform: translateY(-5%);

    &:after {
      transform: scale(1.15);
    }
  }
}

@media screen and (max-width: 500px) {
  .social-icon {
    height: 35px;
    width: 35px;
    margin: 15px;

    &:after {
      height: 45px;
      width: 45px;
    }

    i {
      font-size: 18px;
    }
  }
}
</style>
