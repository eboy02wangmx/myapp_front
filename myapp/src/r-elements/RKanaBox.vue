<template>
  <input
    class="r-kana-box"
    :class="[
      {
        'is-readonly': readonly,
        'is-disabled': disabled
      }
    ]"
    type="text"
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
  name: 'RKanaBox',
  data () {
    return {
      spyElement: null,
      spyActive: false,
      spyTimer: null,
      spyFlagConvert: true,
      spyInput: null,
      spyValues: null,
      spyIgnoreString: null,
      spyBaseKana: null,
      kanaExtractionPattern: null,
      kanaCompactingPattern: null
    }
  },
  props: {
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    halfToFull: Boolean,
    value: {},
    spy: String
  },
  mounted () {
    if (this.spy) {
      // eslint-disable-next-line no-irregular-whitespace
      this.kanaExtractionPattern = /[^ 　ぁあ-んー－\-‐‑–—―−ｰ０-９0-9]/g
      this.kanaCompactingPattern = /[ぁぃぅぇぉっゃゅょ]/g
      this.$nextTick(() => {
        this.spyElement = document.querySelector(this.spy)
        this.active = true
        this._stateClear()
        this.start()
      })
    }
  },
  destroyed () {
    if (this.spyElement) {
      this._stateClear()
      this.stop()
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        let kana = this.adjust(val)
        if (kana === undefined) {
          kana = null
        }
        this.$emit('input', kana)
      }
    }
  },
  watch: {
    disabled (val) {
      if (val) {
        this.stop()
      } else {
        this.start()
      }
    },
    readonly (val) {
      if (val) {
        this.stop()
      } else {
        this.start()
      }
    }
  },
  methods: {
    adjust (value) {
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

      let text = ''

      // ひらがな to カタカナ
      const chars = value.split('')
      for (var i = 0; i < chars.length; i++) {
        const char = chars[i]
        const code = char.charCodeAt(char)
        if (code >= 0x3041 && code <= 0x3093) {
          text += String.fromCharCode(code + 0x60)
        } else {
          text += char
        }
      }
      if (this.halfToFull) {
        text = this.convertHalfKanaToFullKana(text)
      }

      // display update
      if (text !== value) {
        this.$el.value = text
      }

      return text
    },
    convertHalfKanaToFullKana (text) {
      const halfKana = [/\uff76\uff9e/g, /\uff77\uff9e/g, /\uff78\uff9e/g, /\uff79\uff9e/g, /\uff7a\uff9e/g, /\uff7b\uff9e/g, /\uff7c\uff9e/g, /\uff7d\uff9e/g, /\uff7e\uff9e/g, /\uff7f\uff9e/g, /\uff80\uff9e/g, /\uff81\uff9e/g, /\uff82\uff9e/g, /\uff83\uff9e/g, /\uff84\uff9e/g, /\uff8a\uff9e/g, /\uff8a\uff9f/g, /\uff8b\uff9e/g, /\uff8b\uff9f/g, /\uff8c\uff9e/g, /\uff8c\uff9f/g, /\uff8d\uff9e/g, /\uff8d\uff9f/g, /\uff8e\uff9e/g, /\uff8e\uff9f/g, /\uff73\uff9e/g, /\uff67/g, /\uff71/g, /\uff68/g, /\uff72/g, /\uff69/g, /\uff73/g, /\uff6a/g, /\uff74/g, /\uff6b/g, /\uff75/g, /\uff76/g, /\uff77/g, /\uff78/g, /\uff79/g, /\uff7a/g, /\uff7b/g, /\uff7c/g, /\uff7d/g, /\uff7e/g, /\uff7f/g, /\uff80/g, /\uff81/g, /\uff6f/g, /\uff82/g, /\uff83/g, /\uff84/g, /\uff85/g, /\uff86/g, /\uff87/g, /\uff88/g, /\uff89/g, /\uff8a/g, /\uff8b/g, /\uff8c/g, /\uff8d/g, /\uff8e/g, /\uff8f/g, /\uff90/g, /\uff91/g, /\uff92/g, /\uff93/g, /\uff6c/g, /\uff94/g, /\uff6d/g, /\uff95/g, /\uff6e/g, /\uff96/g, /\uff97/g, /\uff98/g, /\uff99/g, /\uff9a/g, /\uff9b/g, /\uff9c/g, /\uff66/g, /\uff9d/g, /\uff61/g, /\uff62/g, /\uff63/g, /\uff64/g, /\uff65/g, /\uff70/g, /\uff9e/g, /\uff9f/g]
      const fullKana = ['\u30ac', '\u30ae', '\u30b0', '\u30b2', '\u30b4', '\u30b6', '\u30b8', '\u30ba', '\u30bc', '\u30be', '\u30c0', '\u30c2', '\u30c5', '\u30c7', '\u30c9', '\u30d0', '\u30d1', '\u30d3', '\u30d4', '\u30d6', '\u30d7', '\u30d9', '\u30da', '\u30dc', '\u30dd', '\u30f4', '\u30a1', '\u30a2', '\u30a3', '\u30a4', '\u30a5', '\u30a6', '\u30a7', '\u30a8', '\u30a9', '\u30aa', '\u30ab', '\u30ad', '\u30af', '\u30b1', '\u30b3', '\u30b5', '\u30b7', '\u30b9', '\u30bb', '\u30bd', '\u30bf', '\u30c1', '\u30c3', '\u30c4', '\u30c6', '\u30c8', '\u30ca', '\u30cb', '\u30cc', '\u30cd', '\u30ce', '\u30cf', '\u30d2', '\u30d5', '\u30d8', '\u30db', '\u30de', '\u30df', '\u30e0', '\u30e1', '\u30e2', '\u30e3', '\u30e4', '\u30e5', '\u30e6', '\u30e7', '\u30e8', '\u30e9', '\u30ea', '\u30eb', '\u30ec', '\u30ed', '\u30ef', '\u30f2', '\u30f3', '\u3002', '\u300c', '\u300d', '\u3001', '\u30fb', '\u30fc', '\u309b', '\u309c']
      var convertFuncs = function (word) {
        var max = halfKana.length
        for (var i = 0; i < max; i++) {
          word = word.replace(halfKana[i], fullKana[i])
        }
        return word
      }
      return convertFuncs(text)
    },
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
    start () {
      if (this.spyElement) {
        this.spyElement.addEventListener('blur', this._eventBlur, false)
        this.spyElement.addEventListener('focus', this._eventFocus, false)
        this.spyElement.addEventListener('keydown', this._eventKeyDown, false)
      }
    },
    stop () {
      if (this.spyElement) {
        this.spyElement.removeEventListener('keydown', this._eventKeyDown, false)
        this.spyElement.removeEventListener('focus', this._eventFocus, false)
        this.spyElement.removeEventListener('blur', this._eventBlur, false)
      }
    },

    // see: https://github.com/harisenbon/autokana
    _checkConvert (newValues) {
      if (!this.spyFlagConvert) {
        if (Math.abs(this.spyValues.length - newValues.length) > 1) {
          var tmpValues = newValues.join('').replace(this.kanaCompactingPattern, '').split('')
          if (Math.abs(this.spyValues.length - tmpValues.length) > 1) {
            this._stateConvert()
          }
        } else {
          if (this.spyValues.length === this.spyInput.length && this.spyValues.join('') !== this.spyInput) {
            if (this.spyInput.match(this.kanaExtractionPattern)) {
              this._stateConvert()
            }
          }
        }
      }
    },
    // see: https://github.com/harisenbon/autokana
    _checkValue () {
      var newInput, newValues
      newInput = this.spyElement.value || ''
      if (newInput === '') {
        this._stateClear()
        this._setKana()
      } else {
        newInput = this._removeString(newInput)
        if (this.spyInput !== newInput) {
          this.spyInput = newInput
          if (!this.spyFlagConvert) {
            newValues = newInput.replace(this.kanaExtractionPattern, '').split('')
            this._checkConvert(newValues)
            this._setKana(newValues)
          }
        }
      }
    },
    // see: https://github.com/harisenbon/autokana
    _clearInterval () {
      clearInterval(this.spyTimer)
    },
    // see: https://github.com/harisenbon/autokana
    _eventBlur (event) {
      this._clearInterval()
    },
    // see: https://github.com/harisenbon/autokana
    _eventFocus (event) {
      this._stateInput()
      this._setInterval()
    },
    // see: https://github.com/harisenbon/autokana
    _eventKeyDown (event) {
      if (this.spyFlagConvert) {
        this._stateInput()
      }
    },
    // see: https://github.com/harisenbon/autokana
    _isHiragana (chara) {
      return ((chara >= 12353 && chara <= 12435) || chara === 12445 || chara === 12446)
    },
    // see: https://github.com/harisenbon/autokana
    _removeString (newInput) {
      if (newInput.indexOf(this.spyIgnoreString) !== -1) {
        return newInput.replace(this.spyIgnoreString, '')
      } else {
        var i, ignoreArray, inputArray
        ignoreArray = this.spyIgnoreString.split('')
        inputArray = newInput.split('')
        for (i = 0; i < ignoreArray.length; i++) {
          if (ignoreArray[i] === inputArray[i]) {
            inputArray[i] = ''
          }
        }
        return inputArray.join('')
      }
    },
    // see: https://github.com/harisenbon/autokana
    _setInterval () {
      this.spyTimer = setInterval(this._checkValue, 30)
    },
    // see: https://github.com/harisenbon/autokana
    _setKana (newValues) {
      if (!this.spyFlagConvert) {
        if (newValues) {
          this.spyValues = newValues
        }
        if (this.active) {
          var _val = this.spyBaseKana + this.spyValues.join('')
          this.model = _val
        }
      }
    },
    // see: https://github.com/harisenbon/autokana
    _stateClear () {
      this.spyBaseKana = ''
      this.spyFlagConvert = false
      this.spyIgnoreString = ''
      this.spyInput = ''
      this.spyValues = []
    },
    // see: https://github.com/harisenbon/autokana
    _stateInput () {
      this.spyBaseKana = this.value || ''
      this.spyFlagConvert = false
      this.spyIgnoreString = this.spyElement.value || ''
    },
    // see: https://github.com/harisenbon/autokana
    _stateConvert () {
      this.spyBaseKana = this.spyBaseKana + this.spyValues.join('')
      this.spyFlagConvert = true
      this.spyValues = []
    }
  }
}
</script>
<style>

</style>
