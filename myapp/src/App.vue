<template>

  <div id="app">
    <link rel="stylesheet" type="text/css" :href="'@/../static/css/main.css'">
    <link rel="stylesheet" type="text/css" :href="'@/../static/css/page.css'">
    <main-header v-if="$root.isMobile.any===false"></main-header>
    <sp-header v-if="$root.isMobile.any===true"></sp-header>

    <main role="main">
      <div class="r-contents">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </main>

    <!-- <main-footermain-footer v-if="$root.isMobile.any===false"></main-footer> -->
    <sp-footer v-if="$root.isMobile.any===true"></sp-footer>

    <div class="r-popup-back" v-show="showPopup" @click="closePopup(1)">
      <transition name="r-popup" @after-enter="showAfterPopup">
        <div :class="[
            {
              'r-popup-main': $root.isMobile.any===false,
              'r-popup-main-sp': $root.isMobile.any===true
            }
          ]" v-if="popupFade" @click.stop="">
          <div ref="popup-contents" :class="[
              {
                'r-popup-contents': $root.isMobile.any===false,
                'r-popup-contents-sp': $root.isMobile.any===true
              }
            ]"
            tabIndex="0"
          >
            <component v-if="$store.state.ui.popup !== null" :is="$store.state.ui.popup.name" :popupData="$store.state.ui.popup"/>
          </div>
          <r-button class="r-popup-close" @click="closePopup(2)">
            <img src="./assets/images/r-popup_close.png" alt="閉じる" width="30" height="30" />
          </r-button>
        </div>
      </transition>
    </div>

    <div class="r-help-back" v-show="showHelp" @click="closeHelp">
      <transition name="r-help" @after-enter="showAfterHelp">
        <div style="width: 1080px;" :class="[
            {
              'r-help-main': $root.isMobile.any===false,
              'r-help-main-sp': $root.isMobile.any===true
            }
          ]" v-if="helpFade" @click.stop="">
          <div ref="help-contents" :class="[
              {
                'r-help-contents': $root.isMobile.any===false,
                'r-help-contents-sp': $root.isMobile.any===true
              }
            ]"
            tabIndex="0"
            style="max-width: 1070px"
          >
            <component v-if="$store.state.ui.help !== null" :is="$store.state.ui.help.name" :helpData="$store.state.ui.help"/>
          </div>
          <r-button class="r-help-close" :doubleTime=200 @click="closeHelp">
            <img src="./assets/images/r-popup_close.png" alt="閉じる" width="30" height="30" />
          </r-button>
        </div>
      </transition>
    </div>

    <div class="r-popup-back" v-show="errorShowPopup" @click="closeError">
      <div class="r-error-main r-popup-border" v-if="errorPopupFade"  @click.stop="">
        <div :class="[
              {
                'r-error-contents': $root.isMobile.any===false,
                'r-error-contents-sp': $root.isMobile.any===true
              }
            ]" tabIndex="0">
          <p v-for="(value, index) in $store.state.errors.errors" :key="index">{{value}}</p>
          <div class="r-error-confirm" v-if="$store.state.errors.confirm">
            <ul>
              <li class="r-error-ok">
                <r-button class="r-error-button" @click="closeError(true)">OK</r-button>
              </li>
              <li v-if="$store.state.errors.confirm"></li>
              <li class="r-error-cancel" v-if="$store.state.errors.confirm">
              <r-button class="r-error-button" @click="closeError(false)">キャンセル</r-button>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul>
              <li class="r-error-ok">
                <r-button class="r-error-button" @click="closeError(true)">OK</r-button>
              </li>
            </ul>
          </div>
        </div>
        <r-button class="r-popup-close" @click="closeError(false)">
          <img src="./assets/images/r-popup_close.png" alt="閉じる" width="30" height="30" />
        </r-button>
      </div>
    </div>

    <div class="r-document-back" v-show="showDocument" @click="closeDocument">
      <transition name="r-document" @after-enter="showAfterDocument">
        <div :class="[
            {
              'r-document-main': $root.isMobile.any===false,
              'r-document-main-sp': $root.isMobile.any===true
            }
          ]" v-if="documentFade" @click.stop="">
          <div ref="document-contents" :class="[
              {
                'r-document-contents': $root.isMobile.any===false,
                'r-document-contents-sp': $root.isMobile.any===true
              }
            ]"
            tabIndex="0"
          >
            <component v-if="$store.state.ui.document !== null" :is="$store.state.ui.document.name" :documentData="$store.state.ui.document"/>
          </div>
          <r-button class="r-document-close" @click="closeDocument">
            <img src="./assets/images/r-popup_close.png" alt="閉じる" width="30" height="30" />
          </r-button>
        </div>
      </transition>
    </div>

  </div>
</template>
<script>
import Vue from 'vue'

import MainFooter from '@/views/Footer.vue'
import MainHeader from '@/views/Header.vue'
import Album from '@/views/Album.vue'

import SpHeader from '@/views-sp/Header.vue'
import SpFooter from '@/views-sp/Footer.vue'
import {ACTIONS} from '@/store/action-types'

Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('album', Album)
Vue.component('sp-header', SpHeader)
Vue.component('sp-footer', SpFooter)

export default {
  name: 'App',
  data () {
    return {
      transitionName: 'slide-left',
      showPopup: false,
      popupFade: false,
      showHelp: false,
      helpFade: false,
      errorShowPopup: false,
      errorPopupFade: false,
      showDocument: false,
      documentFade: false,
      isMobile: this.$root.isMobile.any
    }
  },
  watch: {
    '$route' (newValue, oldValue) {
      const self = this
      this.$nextTick(() => {
        self.$el.scrollTop = 0
        self.$el.scrollLeft = 0
      })
    }
  },
  computed: {
    loading () {
      return this.$store.state.ui.loading
    }
  },
  created () {
    const self = this
    this.$store.watch((state) => {
      return state.ui.popup
    }, popup => {
      const el = self.$refs['popup-contents']
      if (el) {
        el.scrollTop = 0
        el.scrollLeft = 0
      }

      self.showPopup = popup !== null
      this.$nextTick(() => {
        self.popupFade = self.showPopup
      })
    })
    this.$store.watch((state) => {
      return state.ui.help
    }, help => {
      const el = self.$refs['help-contents']
      if (el) {
        el.scrollTop = 0
        el.scrollLeft = 0
      }

      self.showHelp = help !== null
      this.$nextTick(() => {
        self.helpFade = self.showHelp
      })
    })
    this.$store.watch((state) => {
      return state.errors.errors
    }, error => {
      self.errorShowPopup = error !== null
      this.$nextTick(() => {
        self.errorPopupFade = self.errorShowPopup
      })
    })
    this.$store.watch((state) => {
      return state.ui.document
    }, document => {
      const el = self.$refs['document-contents']
      if (el) {
        el.scrollTop = 0
        el.scrollLeft = 0
      }

      self.showDocument = document !== null
      this.$nextTick(() => {
        self.documentFade = self.showDocument
      })
    })
  },
  mounted () {
    this.loadConfig()
    window.onpopstate = () => {
      history.go(1)
    }
  },
  methods: {
    async loadConfig () {
      await this.$store.dispatch(ACTIONS.CONFIGS_INIT)
      // await this.$store.dispatch(ACTIONS.CONFIGS_INIT)
      if (this.$store.state.configs.sync[ACTIONS.CONFIGS_INIT].status !== 200) {
        this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
      }
    },
    showAfterPopup () {
      const el = this.$refs['popup-contents']
      el.scrollTop = 0
      el.scrollLeft = 0
      el.focus()
    },
    closeConfirmPopup () {
      const unwatch = this.$store.watch(() => this.$store.state.errors.confirmReturn, (newValue, oldValue) => {
        if (oldValue === false && newValue === true) {
          if (this.$store.state.errors.confirmReturn === true) {
            this.$store.dispatch(ACTIONS.SET_CONFIRM_IN_POPUP_CLOSE, false)
            this.$store.dispatch(ACTIONS.POPUP_CLOSE)
          }
          unwatch()
        }
      })
    },
    closeError (result) {
      if (this.$store.state.errors.confirm) {
        this.$store.dispatch(ACTIONS.ERROR_CLOSE_CONFIRM, result)
      } else {
        this.$store.dispatch(ACTIONS.ERROR_CLOSE)
        if (this.$store.state.api.status === 403) {
          location.reload()
        }
      }
    },
    showAfterHelp () {
      const el = this.$refs['help-contents']
      el.scrollTop = 0
      el.scrollLeft = 0
      el.focus()
    },
    closeHelp () {
      this.$store.dispatch(ACTIONS.HELP_CLOSE)
    },
    showAfterDocument () {
      const el = this.$refs['document-contents']
      el.scrollTop = 0
      el.scrollLeft = 0
      el.focus()
    },
    closeDocument () {
      this.$store.dispatch(ACTIONS.DOCUMENT_CLOSE)
    }
  }
}
</script>
<style>
.loading-wrapper {
  position: absolute;
  top: 50%;  /*上端を中央に*/
  left: 50%;  /*左端を中央に*/
  width: 60px;  /*横幅*/
  height: 60px;  /*縦幅*/
}
</style>
<style scoped>

/* popup */
.r-popup-back {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: #0000003F;
}
.r-popup-border {
  border-style: solid;
  border-width: 3px;
  border-color: #c4c4c3;
}
.r-popup-main {
  position: relative;
  top: 0;
  left: 0;
  max-width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-popup-main-sp {
  position: relative;
  top: 0;
  left: 0;
  width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0 0 10vh 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-popup-contents {
  outline: 0;
  position: relative;
  top: 0;
  left: 0;
  max-width: 900px;
  max-height: calc(100vh - 16px - 48px - 48px - 16px);
  margin: 8px 0 8px 0;
  padding: 48px;
  overflow: auto;
}
.r-popup-contents-sp {
  outline: 0;
  position: relative;
  box-sizing: border-box;
  top: 0;
  left: 0;
  max-height: calc(80vh);
  margin: 8px 0 8px 0;
  padding: 8px 8px 16px 8px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.r-popup-close.r-button {
  position: absolute;
  top: 8px;
  right: 16px;
  width: 30px;
  height: 30px;
  margin: 8px 8px 0 8px;
  padding: 0;
  border: none;
  background-color: #ffffff88;
}
.r-popup-close .r-button img {
  width: 30px;
  height: 30px;
}
.r-popup-enter-active {
  transition: all .3s ease-out;
}
.r-popup-leave-active {
  transition: all .15s ease-in;
}
.r-popup-enter, .r-popup-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.r-popup-scroll-btn {
  position: absolute;
  top: 72px;
  right: 0;
}

/* HELP */
.r-help-enter-active {
  transition: all .3s ease-out;
}
.r-help-leave-active {
  transition: all .15s ease-in;
}
.r-help-enter, .r-help-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.r-help-back {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: #0000003F;
}
.r-help-main {
  position: relative;
  top: 0;
  left: 0;
  max-width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-help-main-sp {
  position: relative;
  top: 0;
  left: 0;
  width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0 0 10vh 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-help-contents {
  outline: 0;
  position: relative;
  top: 0;
  left: 0;
  max-width: 900px;
  max-height: calc(100vh - 16px - 48px - 48px - 16px);
  margin: 8px 0 8px 0;
  padding: 48px;
  overflow: auto;
}
.r-help-contents-sp {
  box-sizing: border-box;
  width: 100%;
  max-height: calc(80vh);
  margin: 8px 0 8px 0;
  padding: 30px 8px 16px 8px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.r-help-close.r-button {
  position: absolute;
  top: 8px;
  right: 16px;
  width: 30px;
  height: 30px;
  margin: 8px 8px 0 8px;
  padding: 0;
  border: none;
  background-color: #ffffff88;
}
.r-help-close .r-button img {
  width: 30px;
  height: 30px;
}

/* error */
.r-error-main {
  position: relative;
  top: 0;
  left: 0;
  max-width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
  min-width: 250px;
  text-align: center;
}
.r-error-table {
  margin: 16px auto;
}
.r-error-button {
  position: relative;
  width: 130px;
  height: 40px;
  font-size: 1em;
  color: #ffffff;
  background-color: #c4c4c3;
  text-align: center;
  border-radius: 30px 30px 30px 30px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-error-contents {
  outline: 0;
  position: relative;
  top: 0;
  left: 0;
  max-width: 900px;
  max-height: calc(100vh - 16px - 48px - 48px - 16px);
  margin: 8px 0 8px 0;
  padding: 42px 42px 8px;
  overflow: auto;
}
.r-error-contents-sp {
  line-height: 1.5em;
  outline: 0;
  position: relative;
  box-sizing: border-box;
  top: 0;
  left: 0;
  max-height: calc(80vh);
  margin: 8px 0 8px 0;
  padding: 42px 16px 8px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.r-error-ok {
  width: 100%;
  float: left;
  padding-top:10px;
}
.r-error-confirm .r-error-ok {
  width: 50%;
  float: left;
  text-align: right;
  padding-right: 5%;
  padding-top:10px;
}
.r-error-cancel {
  width: 50%;
  float: left;
  text-align: left;
  padding-left: 5%;
  padding-top:10px;
}

/* .r-error-button:active {
    position: relative;
} */

/* document */
.r-document-back {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: #0000003F;
}
.r-document-border {
  border-style: solid;
  border-width: 3px;
  border-color: #c4c4c3;
}
.r-document-main {
  position: relative;
  top: 0;
  left: 0;
  max-width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-document-main-sp {
  position: relative;
  top: 0;
  left: 0;
  width: calc(100vw - 16px);
  max-height: calc(100vh - 16px);
  margin: 0 0 10vh 0;
  padding: 0;
  background-color: #FFF;
  border-radius: 8px;
}
.r-document-contents {
  outline: 0;
  position: relative;
  top: 0;
  left: 0;
  max-width: 900px;
  max-height: calc(100vh - 16px - 48px - 48px - 16px);
  margin: 8px 0 8px 0;
  padding: 48px;
  overflow: auto;
}
.r-document-contents-sp {
  outline: 0;
  position: relative;
  box-sizing: border-box;
  top: 0;
  left: 0;
  max-height: calc(80vh);
  margin: 8px 0 8px 0;
  padding: 8px 8px 16px 8px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.r-document-close.r-button {
  position: absolute;
  top: 8px;
  right: 16px;
  width: 30px;
  height: 30px;
  margin: 8px 8px 0 8px;
  padding: 0;
  border: none;
  background-color: #ffffff88;
}
.r-document-close .r-button img {
  width: 30px;
  height: 30px;
}
.r-document-enter-active {
  transition: all .3s ease-out;
}
.r-document-leave-active {
  transition: all .15s ease-in;
}
.r-document-enter, .r-document-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.r-document-scroll-btn {
  position: absolute;
  top: 72px;
  right: 0;
}
</style>
