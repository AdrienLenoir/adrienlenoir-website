<template>
  <li>
    <NavigationMainDropdown @click.native="toggleSubNavigation()" class="navigation-dropdown-item" :link="link" :icon="icon" :name="name" :arrow="true" :arrow_active="subNavigationActive" />

    <ul class="navigation-dropdown" ref="navigationDropdown">
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavigationDropdown",
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
    }
  },
  data() {
    return {
      subNavigationActive: false
    }
  },
  methods: {
    toggleSubNavigation() {
      let navigationDropdown = this.$refs.navigationDropdown

      this.subNavigationActive = !this.subNavigationActive
      navigationDropdown.style.maxHeight = this.subNavigationActive ? navigationDropdown.childElementCount * 36 + 'px' : 0
    }
  }
}
</script>

<style scoped lang="scss">
.navigation-dropdown-item {
  position: relative;
  width: 100%;
}

.navigation-dropdown {
  overflow: hidden;
  max-height: 0;
  transition: max-height .4s ease-in-out;
}

.navigation-dropdown-active {
  max-height: 100vh;
}
</style>
