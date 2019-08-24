<template>
  <div :class="!isPaperless ? 'r-footer': 'r-footer2'">
    <div class="r-footer-bottom">
      <div class="r-device" v-if="showMobileMode">
        <dl>
        <dt>表示モード</dt>
        <dd><r-link-button @click="changeMobileMode(true)">モバイル</r-link-button></dd>
        <dd>PC</dd>
        </dl>
      </div>
      <!-- <p class="r-contact-code" >C30-341</p> -->
    </div>
  <!-- .r-footer --></div>
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
    isPaperless () {
      return this.$store.state.homeassist.entryType === '2'
    }
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
  min-width: 950px;
  width: 100%;
  height: 290px;
  background: #e6e5e5;
  box-sizing: border-box;
  padding: 20px 0 0;
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
  margin:auto;
  width:820px;
}
.r-footer-left {
  width: 400px;
  height:180px;
  float: left;
}
.r-footer-right {
  width: 400px;
  height:180px;
  float: right;
}
.r-footer-center {
  align-items: center;
}

.r-footer-right h2, .r-footer-left h2 {
  font-size:1em;
}

.r-footer-right img, .r-footer-left img {
  vertical-align: text-bottom;
  margin-right: 10px;
}

.r-footer-right h2, .r-footer-center h2 {
  font-size:1em;
}

.r-footer-right img, .r-footer-center img {
  vertical-align: text-bottom;
  margin-right: 10px;
}

.r-contact {
  width: 400px;
  height: 40px;
  background: #eb8b01;
  color: #ffffff;
  font-size: 1em;
  line-height: 40px;
  text-align: center;
  margin: 0 auto 15px;
}
.r-footer h2 {
  text-align: center;
  line-height: 0;
  margin: 0 0 9px;
}
.r-agency {
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  line-height: 1;
  margin: 5px 0 7px;
}
.r-agency-small {
  text-align: center;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1;
  margin: 5px 0 7px;
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
  font-size: 1.5em;
  line-height: 1;
  font-weight: bold;
  margin: 0 0 12px;
}
.r-tel:before {
  content: url(../assets/images/r-tel.png);
  position: relative;
  top: 3px;
  margin: 0 8px 0 0;
}
.r-businessHourLines {
  text-align: left;
  padding-left:100px;
}
.r-businessHourLines2 {
  text-align: left;
  padding-left:260px;
}
.r-businesshours {
  font-size: 0.9em;
  line-height: 1.5;
  font-weight: bold;
}
.r-footer-bottom {
  text-align: right;
  margin-right: 40px;
  margin-bottom: 10px;
}
.r-contact-code {
  display: inline-block;
  vertical-align: top;
}
.r-device {
  display: inline-block;
  margin: 0 24px;
  vertical-align: top;
}
.r-device dt,
.r-device dd {
  float: left;
  padding: 0 6px;
}
.r-device dt:after {
  content: "：";
}
.r-device dd + dd {
  border-left: 1px solid #333333;
}
.blind {
  visibility: hidden;
}
</style>
