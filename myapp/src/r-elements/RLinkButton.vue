<template>
  <button
    class="r-link-button"
    :autofocus="autofocus"
    type="button"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'RLinkButton',
  data () {
    return {
      doubleclick: 0
    }
  },
  props: {
    autofocus: Boolean
  },
  methods: {
    handleClick: function (evt) {
      this.doubleclick++
      var self = this
      setTimeout(function () {
        self.doubleclick = 0
      }, 1000)
      if (this.doubleclick > 1) {
        console.log('Doubleclick!!')
        return
      }

      this.$emit('click', evt)
    }
  }
}
</script>
<style>

</style>
