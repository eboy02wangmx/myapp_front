<template>
  <select
    :name="name"
    class="r-list-box"
    :class="[
      {
        'is-readonly': readonly,
        'is-disabled': disabled,
        'placeholder-selected': selectedPlaceholder
      }
    ]"
    :disabled="disabled || readonly"
    v-model="model"
    @change="handleChange"
    autocomplete="off"
  >
    <option ref="placeholder" class="r-hidden" v-if="placeholder !== null && placeholder !== ''" :value="blankValue" disabled>{{placeholder}}</option>
    <slot></slot>
  </select>
</template>
<script>
export default {
  name: 'RListBox',
  data () {
    return {
      selectedPlaceholder: false
    }
  },
  props: {
    name: String,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    value: {},
    blankValue: {
      default: null
    }
  },
  mounted () {
    this.selectedPlaceholder = this.$refs.placeholder.selected
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
  watch: {
    value () {
      this.$nextTick(() => {
        this.selectedPlaceholder = this.$refs.placeholder.selected
      })
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
