<template>
  <div class="r-help">
    <link rel="stylesheet" href="../../static/help/help.css">
    <div class="r-ehelp-rror-title" v-if="isError">{{response.status}} / {{response.statusText}}</div>
    <div v-html="response.data"/>
  </div>
</template>

<script>
import {ACTIONS} from '@/store/action-types'
export default {
  name: 'RHelp',
  data () {
    return {
      isError: false,
      response: {
        data: ''
      }
    }
  },
  props: {
    helpData: {
      required: true,
      validator: (value) => {
        if (typeof value !== 'object') {
          return false
        }
        if (value.file === undefined || value.file === null) {
          return false
        }

        return true
      }
    }
  },
  created () {
    this.$store.dispatch(ACTIONS.HELP_OPEN, {name: this.helpData.file})
  }
}
</script>
<style scoped>
.r-help-error-title {
  font-size: 1.8em;
}
</style>
