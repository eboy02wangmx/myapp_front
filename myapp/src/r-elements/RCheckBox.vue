<template>
  <label
    role="checkbox"
    class="r-check-box"
    :class="[
      {
        'is-checked': model,
        'is-readonly': readonly,
        'is-disabled': disabled,
        'is-focus': focus
      }
    ]"
    :aria-checked="model"
    :aria-disabled="disabled || readonly"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="doToggle"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <input
      class="r-hidden"
      type="checkbox"
      tabindex="-1"
      aria-hidden="true"
      :disabled="disabled || readonly"
      v-model="model"
      @change="handleChange"
      autocomplete="off"
    />
    <div class="r-check-box-box">
      <div
        class="r-check-box-inline"
        :class="[
          `r-check-box-inline-${align}`
        ]"
        v-if="$slots.default">
        <slot></slot>
      </div>
    </div>
  </label>
</template>
<script>
export default {
  name: 'RCheckBox',
  data () {
    return {
      focus: false
    }
  },
  props: {
    disabled: Boolean,
    readonly: Boolean,
    value: {},
    align: {
      type: String,
      default: 'center',
      validator: (value) => {
        return ['right', 'center', 'left'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    model: {
      get () {
        return this.value === 1
      },
      set (val) {
        this.$emit('input', val ? 1 : 2)
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
    doToggle () {
      this.model = (this.model !== true)
    }
  }
}
</script>
<style>

</style>
