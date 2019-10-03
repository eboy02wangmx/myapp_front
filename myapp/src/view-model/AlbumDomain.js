import {ACTIONS} from '@/store/action-types'

export const albumDomainViewModel = {
  name: 'albumDomain',
  created () {
    var vrInfoDomain = localStorage.getItem('vrInfoDomain');
    if (!vrInfoDomain || vrInfoDomain === `制限なし`) {
      vrInfoDomain = null;
    }
    this.domain = vrInfoDomain;
  },
  methods: {
    save () {
      var id = localStorage.getItem('vrInfoId');
      var domain = $('#domain').val();
      let params = {id: id, domain: domain}
      this.$store.dispatch(ACTIONS.MYAPP_ALBUM_DOMAIN, params)
      this.$router.push('Album');
    }
  }
}
export default {
  albumDomainViewModel
}
