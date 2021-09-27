<template>
  <NuxtLink event="" :to="link">
    <span><i :class="icon"></i> {{ name }}</span>
    <i v-if="arrow" class="arrow fi-rr-angle-left" :class="arrow_active ? 'arrow-active' : ''"></i>
  </NuxtLink>
</template>

<script>
export default {
  name: "NavigationMainDropdown",
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    arrow: {
      type: Boolean,
      required: false,
      default: false
    },
    arrow_active: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

a {
  font-size: 21px;
  color: var(--c-white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i {
      margin-right: 10px;
      color: var(--c-secondary);
    }
  }

  .arrow {
    font-size: 20px;
    color: var(--c-white);
    transition: transform .3s ease-in-out;
  }

  .arrow-active {
    transform: rotate(-90deg);
  }
}

.nuxt-link-active {
  color: var(--c-secondary);

  span i {
    color: var(--c-secondary);
  }
}

</style>
