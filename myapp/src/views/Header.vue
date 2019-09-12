<template>
<header role="banner">
  <title>MYPIC360</title>
</header>

</template>
<script>
import Vue from 'vue'
import SubNavi from './SubNavi.vue'
import {headerViewModel} from '@/view-model/Header'
Vue.component('sub-navi', SubNavi)

export default {
  name: 'MainHeader',
  mixins: [headerViewModel],
  data () {
    return {
      logo: require('../../static/images/service_logo.png')
    }
  },
  computed: {
    isPaperless () {
      return this.$store.state.homeassist.entryType === '2'
    }
  }
}
</script>
<style scoped>
#grpheader {
    box-shadow: none !important;
}
#r-nav {
  width: 100%;
  height: 32px;
}
#r-nav ul.nav-inner {
  margin: 0 auto;
  max-width: 950px;
  height: 32px;
  text-align: left;
  background-color: #bf0000;
  padding:0 10px;
}
#r-nav .nav-outer {
  max-width: 1150px;
  margin: 0 auto;
  position: relative;
  z-index: 9;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(1) {
  width:12%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(2) {
  width:16%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(3) {
  width:8%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(4) {
  width:22%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(5) {
  width:12%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(6) {
  width:18%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(7) {
  width:12%;
}

#r-nav ul.nav-inner .nav-innerList {
  height: 32px;
  float: left;
}
#r-nav ul.nav-inner > li > a {
  display: block;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  transition: all 0.2s linear;
  text-decoration: none;
  color: #ffffff;
  font-size: 1em;
}

</style>
