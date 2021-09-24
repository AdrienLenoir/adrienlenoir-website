<template>
  <a :href="target" class="arrow-link" :class="dark ? 'arrow-link-dark' : 'arrow-link-light'" data-scroll-to>
    <span class='arrow-link-wrapper'>
      <template v-if="arrowposition === 'left'">
        <Arrow :dark="dark" :direction="arrowdirection" size="small" />
      </template>
      <slot />
      <template v-if="arrowposition !== 'left'">
        <Arrow :dark="dark" :direction="arrowdirection" size="small" />
      </template>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ArrowLink',
  props: {
    arrowposition: {
      type: String,
      required: false,
      default: 'left'
    },
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
  text-transform: uppercase;

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
