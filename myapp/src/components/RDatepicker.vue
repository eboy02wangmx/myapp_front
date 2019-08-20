<!--
  - Datepicker
  -->
<template>
  <datepicker ref="picker" v-model="model" :language="ja" :openDate="openDate" :disabledDates="disabledDates"></datepicker>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import {ja} from 'vuejs-datepicker/dist/locale'
import util from '@/util'

export default {
  name: 'RDatepicker',
  components: {
    Datepicker
  },
  props: {
    from: {
      required: true,
      type: String
    },
    to: {
      required: true,
      type: String
    },
    value: {}
  },
  data () {
    return {
      util: util,
      ja: ja
    }
  },
  computed: {
    model: {
      get () {
        const year = util.year(this.value)
        const month = util.month(this.value)
        const day = util.day(this.value)

        return util.parse.date(year, month, day)
      },
      set (val) {
        if (!util.isEmpty(val)) {
          const dateVal = util.parse.date(val)
          const year = util.year(dateVal)
          const month = util.month(dateVal)
          const day = util.day(dateVal)
          this.$emit('input', util.date(year, month, day))
        }
      }
    },
    openDate () {
      return this.value === null ? util.parse.date(this.$store.state.configs.systemDate) : null
    },
    disabledDates () {
      return {
        to: util.parse.date(this.from),
        from: util.parse.date(this.to)
      }
    }
  },
  methods: {
    showCalendar () {
      this.$refs.picker.showCalendar()
    }
  }
}
</script>
