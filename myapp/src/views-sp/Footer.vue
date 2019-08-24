<template>
  <div>
    <div class="r-footer">

      <!-- <div class="r-clearfix r-footer-content" v-if="isPaperless"> -->
      <div class="r-clearfix r-footer-content">
        <div>
          <p class="r-contact">お問い合わせ窓口</p>
          <h2><img src="../assets/images/r-rakutenlogo.png" width="260" alt="MYPIC360"></h2>
          <p class="r-agency">損保代理店サポートセンター</p>
          <p class="r-tel">0570-666-042（ナビダイヤル）</p>
          <p class="r-tel">0422-24-1021（固定電話番号）</p>
          <div class="r-businessHourLines2">
            <p class="r-businesshours">受付時間：平日&nbsp;&nbsp;&nbsp;&nbsp;9:00〜18:00</p>
            <p class="r-businesshours"><span class="blind">受付時間：</span>土日祝&nbsp;10:00〜18:00</p>
            <p class="r-businesshours"><span class="blind">受付時間：</span>（年末年始は除く）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {footerViewModel} from '@/view-model/Footer'

export default {
  mixins: [footerViewModel],
  data () {
    return {
      dismessage: ''
    }
  },
  created () {
  },
  methods: {
    disBungen2 () {
      let disBuggen = ''
      if ((this.$store.state.configs.maintenancedata != null) && (this.$store.state.configs.maintenancedata.disBungen != null)) {
        disBuggen = this.$store.state.configs.maintenancedata.disBungen
      }
      return disBuggen
    }
  },
  computed: {
  },
  watch: {
    $route (to, from) {
      if ((to.path === '/ExaminationConfirmation') || (to.path === '/EntryConfirmationAgent')) {
        this.dismessage = this.disBungen2()
      } else {
        this.dismessage = ''
      }
    }
  }
}
</script>
<style scoped>
/* フッター */
.r-footer {
  width: 100%;
  background: #e6e5e5;
  box-sizing: border-box;
  padding: 0 0 30px;
  text-align: center;
}
.r-footer2 {
  min-width: 950px;
  width: 100%;
  height: 340px;
  background: #e6e5e5;
  box-sizing: border-box;
  padding: 20px 0 0;
  text-align: center;
}
.r-footer-content {
  margin-bottom: 10px;
}
.r-contact {
  width: 100%;
  height: 35px;
  background: #eb8b01;
  color: #ffffff;
  font-size: 1em;
  line-height: 35px;
  text-align: center;
  margin: 0 auto 18px;
}
.r-footer h2 {
  line-height: 0;
  margin: 0 auto 9px;
}
.r-footer h2 img {
  vertical-align: text-bottom;
  height: auto;
  margin-right: 5px;
}
.r-footer h2 span {
  font-weight:bold;
  font-size:0.9em
}
.r-agency {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1;
  margin: 5px 0 12px;
}
.r-agency-small {
  text-align: center;
  font-weight: bold;
  font-size: 0.9em;
  line-height: 1;
  margin: 5px 0 12px;
}
.r-agency_disbungen {
  text-align: left;
  font-weight: bold;
  font-size: 0.9em;
  line-height: 1;
  margin: 5px 0 7px;
}
.r-tel {
  text-align: center;
  font-size: 1.0em;
  line-height: 1;
  font-weight: bold;
  margin: 0 0 6px;
}
.r-tel:before {
  content: '';
  display: inline-block;
  width: 29px;
  height: 24px;
  background: url(../assets/sp/images/r-tel.png) no-repeat center center;
  background-size: contain;
  position: relative;
  vertical-align: middle;
  top: -3px;
  margin: 0 7px 0 0;
}
.r-tel a {
  color: #333;
}
.r-businessHourLines {
  margin: 0 auto;
}
.r-businesshours {
  font-size: 0.9em;
  line-height: 1.5;
}
.blind {
  visibility: hidden;
}
</style>
