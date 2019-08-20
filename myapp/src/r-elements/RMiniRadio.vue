<template>
  <label
    role="radio"
    class="r-mini-radio"
    :class="[
      {
        'is-checked': model === option,
        'is-readonly': readonly,
        'is-disabled': disabled,
        'is-focus': focus
      }
    ]"
    :aria-checked="model === option"
    :aria-disabled="disabled || readonly"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="doCheck"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <input
      class="r-hidden"
      type="radio"
      tabindex="-1"
      aria-hidden="true"
      :value="option"
      :disabled="disabled || readonly"
      v-model="model"
      @change="handleChange"
       autocomplete="off"
    />
    <div class="r-mini-radio-box">
      <div class="r-mini-radio-label" v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </label>
</template>
<script>
export default {
  name: 'RMiniRadio',
  data () {
    return {
      focus: false
    }
  },
  props: {
    disabled: Boolean,
    readonly: Boolean,
    option: {},
    value: {}
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    tabIndex () {
      return !this.disabled || this.readonly ? 0 : -1
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    },
    handleFocus () {
      this.focus = true
    },
    handleBlur () {
      this.focus = false
    },
    doCheck () {
      this.model = this.option
    }
  }
}
</script>
<style>

</style>
