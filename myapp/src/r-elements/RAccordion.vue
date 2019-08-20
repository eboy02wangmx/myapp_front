<template>
  <div class="r-accordion">
    <div
      class="r-accordion-header"
      @click="doToggle"
    >
      <slot name="header" v-bind:isShow="isShow"></slot>
      <div
        class="r-accordion-icon"
        :class="{rotate: isShow}"
        v-if="$slots['icon'] !== undefined"
      >
        <slot name="icon"></slot>
      </div>
    </div>
    <transition
      name="r-accordion"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div
        class="r-accordion-body"
        :style="`transition: ${transitionTime}s ease-out`"
        v-show="isShow"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'RAccordion',
  data () {
    return {
      transitionTime: 0.5,
      innerToggle: false
    }
  },
  props: {
    disabled: Boolean,
    toggle: {
      default: false
    },
    show: {
      default: undefined
    },
    speed: {
      type: Number,
      default: 1000
    }
  },
  mounted () {
    this.innerToggle = this.toggle
  },
  computed: {
    isShow () {
      return (this.show === undefined) ? this.innerToggle : this.show
    }
  },
  methods: {
    doToggle () {
      this.$nextTick(() => {
        this.innerToggle = !this.innerToggle
      })
    },
    beforeEnter (el) {
      this.$nextTick(() => {
        el.style.height = '0'
      })
    },
    enter (el) {
      this.$nextTick(() => {
        this.transitionTime = el.scrollHeight / this.speed
        el.style.height = el.scrollHeight + 'px'
      })
    },
    afterEnter (el) {
      this.$nextTick(() => {
        el.style.height = ''
      })
    },
    beforeLeave (el) {
      this.$nextTick(() => {
        el.style.height = el.scrollHeight + 'px'
      })
    },
    leave (el) {
      this.$nextTick(() => {
        el.style.height = '0'
      })
    }
  }
}
</script>
<style>

</style>
