<!--
  - カレンダー（ポップアップ用）
  -->
<template>
  <datepicker class="r-calendar" :class="[{'r-mobile':$root.isMobile.any}]" v-model="model" :language="ja" :disabledDates="disabledDates" :inline="true"/>
</template>
<script>
import {ACTIONS} from '@/store/action-types'
import Datepicker from 'vuejs-datepicker'
import {ja} from 'vuejs-datepicker/dist/locale'
import util from '@/util'

export default {
  name: 'RCalendar',
  components: {
    Datepicker
  },
  props: {
    popupData: {
      required: true,
      validator: (value) => {
        if (typeof value !== 'object') {
          return false
        }
        if (value.from === undefined || util.isEmpty(value.from)) {
          return false
        }
        if (value.to === undefined || util.isEmpty(value.to)) {
          return false
        }
        if (value.value === undefined || util.isEmpty(value.value)) {
          return false
        }

        return true
      }
    }
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
        if (this.popupData.value === null || util.parse.int(this.popupData.value) === 0) {
          return util.parse.date(this.$store.state.configs.systemDate)
        } else {
          const year = util.year(this.popupData.value)
          const month = util.month(this.popupData.value)
          const day = util.day(this.popupData.value)

          return util.parse.date(year, month, day)
        }
      },
      set (val) {
        if (!util.isEmpty(val)) {
          const dateVal = util.parse.date(val)
          const year = util.year(dateVal)
          const month = util.month(dateVal)
          const day = util.day(dateVal)
          this.popupData.saveData(util.date(year, month, day))
          this.$store.dispatch(ACTIONS.POPUP_CLOSE)
        }
      }
    },
    disabledDates () {
      return {
        from: util.parse.date(this.popupData.to),
        to: util.parse.date(this.popupData.from)
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
<style scoped>
.r-calendar.r-mobile {
  margin-top: 40px;
}
</style>
