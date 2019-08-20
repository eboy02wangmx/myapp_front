<template>
  <button
    class="r-button"
    :class="[
      {
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="type"
    :doubleTime="doubleTime"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'RButton',
  data () {
    return {
      doubleclick: 0,
      dClickTime: 1000
    }
  },
  props: {
    disabled: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    doubleTime: {
      type: Number,
      default: 1000
    }
  },
  methods: {

    handleClick: function (evt) {
      this.doubleclick++
      var self = this
      setTimeout(function () {
        self.doubleclick = 0
      }, this.doubleClickTime)
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
