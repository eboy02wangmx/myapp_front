<template>
  <label
    role="radio"
    class="r-yes-no-radio"
    :class="[
      pattern,
      `r-${pattern}`,
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
    <div class="r-yes-no-radio-box">
      <div v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </label>
</template>
<script>
export default {
  name: 'RYesNoRadio',
  data () {
    return {
      focus: false,
      mode: 'old'
    }
  },
  props: {
    pattern: {
      type: String,
      required: true,
      validator: (value) => {
        return ['yes', 'no'].indexOf(value) >= 0
      }
    },
    disabled: Boolean,
    readonly: Boolean,
    value: {}
  },
  created () {
    if (['yes', 'no'].indexOf(this.pattern) >= 0) {
      this.mode = 'new'
    }
  },
  computed: {
    option () {
      if (this.mode === 'new') {
        if (this.pattern === 'yes') {
          return 1
        } else {
          return 2
        }
      }
      return this.pattern === 'r-yes'
    },
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
      console.log(this.mode)
      console.log(this.pattern)
      console.log(this.option)
      this.model = this.option
    }
  }
}
</script>
<style>

</style>
