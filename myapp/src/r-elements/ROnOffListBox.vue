<template>
  <select
    class="r-on-off-list-box"
    :class="[
      {
        'on': value === 1,
        'off': value === 2,
        'is-readonly': readonly,
        'is-disabled': disabled
      }
    ]"
    :disabled="disabled || readonly"
    v-model="model"
    @change="handleChange"
    autocomplete="off"
  >
    <option :value="1">○</option>
    <option :value="2">×</option>
  </select>
</template>
<script>
export default {
  name: 'ROnOffListBox',
  props: {
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    value: {}
  },
  created () {
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleChange () {
      this.$nextTick(() => {
        this.$emit('change', this.model)
      })
    }
  }
}
</script>
<style>
</style>
