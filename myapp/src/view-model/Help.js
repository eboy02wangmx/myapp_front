export const helpViewModel = {
  name: 'Help',
  data () {
    return {
      data: null
    }
  },
  created () {
  },
  methods: {
    openPage (page) {
      window.open(page, '_blank')
    }
  }
}

export default {
  helpViewModel
}
