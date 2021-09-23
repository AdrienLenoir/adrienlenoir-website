<template>
  <nav class="me-navigation">

    <a v-for='section in subSections'
       :key='section.id'
       href='#'
       class='me-navigation-item'
       :class="activeSubSection === section.id ? 'me-navigation-item-active' : ''"
       @click.prevent="$parent.setActiveSubSection(section.id)">
      {{ section.name }}
    </a>

    <ArrowLink target='real' arrowdirection='bottom' dark>
      Mes réalisations
    </ArrowLink>
  </nav>
</template>

<script>
export default {
  name: 'MeNavigation',
  props: {
    subSections: {
      type: Array,
      required: true
    },
    activeSubSection: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang='scss' scoped>
.me-navigation {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  margin-top: 30px;

  .me-navigation-item {
    position: relative;
    color: var(--c-primary);
    font-size: 26px;
    text-transform: uppercase;
    margin-bottom: 8px;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      max-width: 0;
      height: 3px;
      background-color: var(--c-primary);
      content: "";
      transition: max-width .25s ease-in-out;
    }

    &-active {
      font-weight: 300;

      &:after {
        max-width: 80px;
      }
    }

    &:hover {
      &:after {
        max-width: 80px;
      }
    }
  }

  .arrow-link {
    margin-top: 50px;
  }
}
</style>
