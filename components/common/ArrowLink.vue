<template>
  <a :href="target" class="arrow-link" :class="dark ? 'arrow-link-dark' : 'arrow-link-light'">
    <span class='arrow-link-wrapper'>
      <Arrow :dark="dark" :direction="arrowdirection" size="small" />
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: 'ArrowLink',
  props: {
    target: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    },
    arrowdirection: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow-link {
  display: inline-block;

  &-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .arrow {
    margin: 12px;
  }

  &-dark {
    color: var(--c-primary);
  }

  &-light {
    color: var(--c-white);
  }
}
</style>
