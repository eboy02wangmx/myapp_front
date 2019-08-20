<template>
  <input
    class="r-number-box"
    :class="[
      `r-number-box-${align}`,
      {
        'is-readonly': readonly,
        'is-disabled': disabled
      }
    ]"
    type="text"
    :pattern="sp ? '\\d*':''"
    :disabled="disabled || readonly"
    :placeholder="placeholder"
    v-model="model"
    @change="handleChange"
    @blur="handleBlur"
    autocomplete="off"
  />
</template>
<script>
export default {
  name: 'RNumberBox',
  data () {
    return {
      beforeValue: '',
      flag: false
    }
  },
  props: {
    disabled: Boolean,
    readonly: Boolean,
    blankFlag: Boolean,
    placeholder: String,
    align: {
      type: String,
      default: 'right',
      validator: (value) => {
        return ['right', 'center', 'left'].indexOf(value) >= 0
      }
    },
    sp: {
      type: Boolean,
      default: false
    },
    decimal: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  mounted () {
    this.beforeValue = this.value
    this.flag = this.blankFlag
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        let num = this.adjustNumber(val)
        if (num === undefined) {
          num = null
        }
        this.$emit('input', num)
      }
    }
  },
  methods: {
    adjustNumber (value) {
      if (value === undefined) {
        // history
        this.beforeValue = value
        return undefined
      }
      if (value === null || value === '') {
        // history
        this.beforeValue = value
        return null
      }

      let num = value

      // multibyte to singlebyte
      num = num.replace(new RegExp(/\uFF10/gm), '0')
      num = num.replace(new RegExp(/\uFF11/gm), '1')
      num = num.replace(new RegExp(/\uFF12/gm), '2')
      num = num.replace(new RegExp(/\uFF13/gm), '3')
      num = num.replace(new RegExp(/\uFF14/gm), '4')
      num = num.replace(new RegExp(/\uFF15/gm), '5')
      num = num.replace(new RegExp(/\uFF16/gm), '6')
      num = num.replace(new RegExp(/\uFF17/gm), '7')
      num = num.replace(new RegExp(/\uFF18/gm), '8')
      num = num.replace(new RegExp(/\uFF19/gm), '9')
      if (this.flag) {
        num = num.replace(new RegExp(/(^\s+)|(\s+$)/g), '')
      }
      num = num.replace(new RegExp(/[\u2010-\u2015\u2212\u30FC\uFF0D\uFF70]/gm), '-')
      num = num.replace(new RegExp(/\uFF0E/gm), '.')
      num = num.replace('-', '')
      if (isNaN(num) && num !== '.' && num !== '-') {
        // rollback
        num = this.beforeValue
      } else if (!this.decimal && num.indexOf('.') >= 0) {
        // rollback
        num = this.beforeValue
      } else {
        // history
        this.beforeValue = num
      }
      if (num === '' || num === undefined) {
        num = null
      }

      // display update
      if (num !== value) {
        this.$el.value = num
      }

      return num
    },
    handleChange (ev) {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    },
    handleBlur (ev) {
      this.$nextTick(() => {
        this.$emit('blur', ev)
      })
    }
  }
}
</script>
<style>

</style>
