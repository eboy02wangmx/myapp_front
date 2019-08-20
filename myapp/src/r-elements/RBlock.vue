<template>
  <div ref="block">
    <transition name="r-block">
      <div
        class="r-block r-clearfix"
        :class="[
          {
            'r-block-border-top': isBorderTop,
            'r-block-border-right': isBorderRight,
            'r-block-border-bottom': isBorderBottom,
            'r-block-border-left': isBorderLeft
          }
        ]"
        v-if="show"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'RBlock',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    border: {
      type: String,
      default: 'top',
      validator: (value) => {
        const ary = value.split(' ')
        const ret = ary.filter(item => ['none', 'top', 'right', 'bottom', 'left'].indexOf(item) < 0)
        return ret.length === 0
      }
    },
    scroll: {
      type: String,
      default: 'none',
      validator: (value) => {
        return ['none', 'auto'].indexOf(value) >= 0
      }
    }
  },
  watch: {
    show () {
      if (this.show) {
        if (this.scroll === 'auto') {
          const self = this
          this.$nextTick(() => {
            const rect = self.$el.getBoundingClientRect()
            self.$root.$el.scrollTop += rect.top
          })
        }
      }
    }
  },
  computed: {
    isBorderTop () {
      const ary = this.border.split(' ')
      return ary.find(item => item === 'top') !== undefined
    },
    isBorderRight () {
      const ary = this.border.split(' ')
      return ary.find(item => item === 'right') !== undefined
    },
    isBorderBottom () {
      const ary = this.border.split(' ')
      return ary.find(item => item === 'bottom') !== undefined
    },
    isBorderLeft () {
      const ary = this.border.split(' ')
      return ary.find(item => item === 'left') !== undefined
    }
  }
}
</script>
<style>

</style>
