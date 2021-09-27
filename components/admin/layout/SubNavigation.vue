<template>
  <li>
    <NuxtLink :to="link"><i :class="icon"></i> {{ name }}</NuxtLink>
  </li>
</template>

<script>
export default {
  name: "SubNavigation",
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
  }
}
</script>

<style scoped lang="scss">
li {
  margin-left: 10px;

  a {
    font-size: 21px;
    color: var(--c-white);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    i {
      margin-right: 10px;
      color: var(--c-secondary);
    }
  }
}

.nuxt-link-active {

  i {
    color: var(--c-secondary);
  }
}
</style>
