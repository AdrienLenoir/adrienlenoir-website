<template>
  <div class="social-icons-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SocialIconWrapper'
}
</script>

<style lang="scss" scoped>
.social-icons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  margin: auto;
}
</style>
