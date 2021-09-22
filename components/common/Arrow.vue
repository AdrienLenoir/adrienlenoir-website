<template>
  <div :class="arrowClass.join(' ')">
    <i class="fas fa-arrow-down"></i>
  </div>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      arrowClass: []
    }
  },
  mounted() {
    this.arrowClass.push('arrow')

    if (this.dark) {
      this.arrowClass.push('arrow-dark')
    } else {
      this.arrowClass.push('arrow-light')
    }

    this.arrowClass.push(`arrow-${this.direction}`)
  }
}
</script>

<style lang='scss' scoped>
.arrow {
  display: block;
  margin: auto;

  i {
    font-size: 28px;
  }

  &-light i {
    color: var(--c-white);
  }

  &-dark {
    color: var(--c-primary);
  }

  &-top i {
    transform: rotate(180deg);
  }

  &-right i {
    transform: rotate(-90deg);
  }

  &-bottom i {
    transform: rotate(0deg);
  }

  &-left i {
    transform: rotate(90deg);
  }
}
</style>
