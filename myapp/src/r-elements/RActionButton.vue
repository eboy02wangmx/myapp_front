<template>
  <div
    role="button"
    class="r-action-button"
  >
    <button
      class="r-action-button--inner"
      :class="[
        {
          'is-disabled': disabled
        }
      ]"
      :disabled="disabled"
      :autofocus="autofocus"
      :type="type"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'RActionButton',
  data () {
    return {
      doubleclick: 0
    }
  },
  props: {
    disabled: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: 'button'
    }
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
