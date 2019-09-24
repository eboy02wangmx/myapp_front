import {ACTIONS} from '@/store/action-types'

export const setsumeiViewModel = {
  name: 'setsumei',
  props: {
    userid: null,
    setsumei: ""
  },
  created () {
    var param = localStorage.getItem('userid')
    this.param = param
    var location = localStorage.getItem('location')
    this.location = location
  },
  computed: {
    // var text = document.getElementById("caption").value
    text1: function () {
      return this.inputName
    }
  },
  methods: {
    deleteEvent () {
      let params = this.param
      this.$store.dispatch(ACTIONS.MYAPP_USER_DELETE, params)
    },
  sakusei () {
    this.setsumei = this.caption;
    console.log(this.setsumei)
    let setsumeiparams = {setsumei: this.setsumei, location: this.location}
    this.$store.dispatch(ACTIONS.MYAPP_IMAGES_SETSUMEI, setsumeiparams)
    this.$router.push({path: '/Setsumeiok'})
  }
  }
}
export default {
  setsumeiViewModel
}
