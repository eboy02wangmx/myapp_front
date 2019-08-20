<template>
  <a class="r-help-link" :href="src" target="_blank" v-if="this.src.indexOf('http') === 0">
    <template v-if="iconAlign === 'right'">
      <slot></slot><img class="r-help-link-img" src="../assets/images/r-popup.png" alt="question icon" width="22" height="22">
    </template>
    <template v-else-if="iconAlign === 'left'">
      <img class="r-help-link-img" src="../assets/images/r-popup.png" alt="question icon" width="22" height="22"><slot></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </a>
  <a class="r-help-link" href="#" @click.stop.prevent="onClick" v-else>
    <template v-if="iconAlign === 'right'">
      <slot></slot><img class="r-help-link-img" src="../assets/images/r-popup.png" alt="question icon" width="22" height="22">
    </template>
    <template v-else-if="iconAlign === 'left'">
      <img class="r-help-link-img" src="../assets/images/r-popup.png" alt="question icon" width="22" height="22"><slot></slot>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </a>
</template>

<script>
import {ACTIONS} from '@/store/action-types'

export default {
  name: 'RHelpLink',
  data () {
    return {
    }
  },
  props: {
    src: {
      required: true
    },
    iconAlign: {
      type: String,
      default: 'left',
      validator: (value) => {
        return ['right', 'left', 'none'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    href () {
      return (this.src.indexOf('http') === 0) ? this.src : '#'
    }
  },
  methods: {
    onClick () {
      let src = this.src
      if (this.$store.state.configs.isMobile.any && this.src.indexOf('Sp') !== this.src.length - 2) {
        src = `${src}Sp`
      }
      this.$store.dispatch(ACTIONS.HELP_OPEN, {name: 'RHelp', file: src})
    }
  }
}
</script>
<style>

</style>
