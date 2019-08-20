import {ACTIONS} from '@/store/action-types'

export const footerViewModel = {
  name: 'Footer',
  computed: {
    agentName () {
      return this.$store.state.configs.agentName
    },
    showMobileMode () {
      return this.$store.state.configs.isMobile.getFirstIsMobile().any
    },
    screen () {
      return this.$route.path === '/ExaminationComplete'
    }
  },
  methods: {
    changeMobileMode (isMobileAny) {
      this.$store.dispatch(ACTIONS.CONFIGS_SET_MOBILE, isMobileAny)
      this.routerPush('/')
    }
  }
}

export default {
  footerViewModel
}
