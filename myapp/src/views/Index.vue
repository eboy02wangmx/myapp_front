<template>
<div>
</div>
</template>

<script>
import {ACTIONS} from '@/store/action-types'

export default {
  name: 'Index',
  mounted () {
    this.gotoTop(this.$store.state.configs.agentName)
  },
  watch: {
    '$store.state.configs.agentName' (newValue, oldValue) {
      this.gotoTop(newValue)
    }
  },
  methods: {
    gotoTop (value) {
      if (this.$store.state.configs.agentName) {
        if (this.$store.state.configs.direct) {
          this.$store.dispatch(ACTIONS.CONFIGS_DIRECT_RESET)
          this.load()
        } else {
          // this.routerPush('/Top')
          this.routerPush('/Top')
        }
      }
    },
    async load () {
      const request = {
        mytoken: this.$store.state.configs.mytoken
      }

      await this.$store.dispatch(ACTIONS.HOMEASSIST_SVR_ENTRY_LOAD, request)
      if (this.$store.state.homeassist.sync[ACTIONS.HOMEASSIST_SVR_ENTRY_LOAD].status !== 200) {
        this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
        this.routerPush('/Top')
      }

      if (this.$store.state.configs.mytoken !== null && this.$store.state.configs.action !== null) {
        await this.$store.dispatch(ACTIONS.MYPAGE_SVR_UPDATE_HOMEASSIST)
        if (this.$store.state.mypage.sync[ACTIONS.MYPAGE_SVR_UPDATE_HOMEASSIST].status !== 200) {
          this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          this.routerPush('/Top')
          return false
        }
        if (this.$store.state.configs.action === 'next' && this.$store.state.homeassist.data.contractorMail) {
          // 申込情報画面へ遷移
          this.routerPush('/EntryInfo')
          return
        }
      }
      this.routerPush(this.$store.state.homeassist.data.screenID)
    }
  }
}
</script>
<style>

</style>
