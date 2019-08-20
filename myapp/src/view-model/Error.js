/**
 * Error画面
 *
 *
 */
export const errorViewModel = {
  name: 'Error',
  data () {
    return {
      errorNo: null,
      errorMessage: null
    }
  },
  mounted () {
    this.errorNo = this.$route.params.code
    this.errorMessage = this.$route.params.message
  },
  computed: {
    test () {

    }
  },
  methods: {
  }

}

export default {
  errorViewModel
}
