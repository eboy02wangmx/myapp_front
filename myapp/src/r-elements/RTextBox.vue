<template>
  <input
    class="r-text-box"
    :class="[
      `r-text-box-${align}`,
      {
        'is-readonly': readonly,
        'is-disabled': disabled
      }
    ]"
    :type="type"
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
  name: 'RTextBox',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    fullToHalfAlphanumeric: Boolean,
    align: {
      type: String,
      default: 'left',
      validator: (value) => {
        return ['right', 'center', 'left'].indexOf(value) >= 0
      }
    },
    value: {}
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        if (val === '') {
          val = null
        }
        // 全角英数字 to 半角英数字
        if (this.fullToHalfAlphanumeric) {
          val = this.convertToHalfAlphanumeric(val)
        }
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    },
    handleBlur (ev) {
      this.$nextTick(() => {
        this.$emit('blur', ev)
      })
    },
    // 全角英数字 to 半角英数字
    convertToHalfAlphanumeric (value) {
      if (value === undefined) {
        return undefined
      }
      if (value === null || value === '') {
        return null
      }
      let text = ''
      const chars = value.split('')
      for (var i = 0; i < chars.length; i++) {
        var char = chars[i]
        const code = char.charCodeAt(0)
        if ((code >= 0x0030 && code <= 0x0039) || (code >= 0x0041 && code <= 0x005A) || (code >= 0x0061 && code <= 0x007A)) {
          text += char
        } else if ((code >= 0xFF10 && code <= 0xFF19) || (code >= 0xFF21 && code <= 0xFF3A) || (code >= 0xFF41 && code <= 0xFF5A)) {
          text += String.fromCharCode(code - 0xFEE0)
        }
      }
      if (text !== value) {
        this.$el.value = text
      }

      return text
    }
  }
}
</script>
<style>

</style>
