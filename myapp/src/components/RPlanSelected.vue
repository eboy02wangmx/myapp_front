<template>
  <span>
  <img src="../assets/images/r-free_yes.png" alt="" width="30" height="30" v-if="freeOn">
  <img src="../assets/images/r-free_no.png" alt="" width="30" height="30" v-else-if="freeOff">
  <img src="../assets/images/r-osusume_yes.png" alt="" width="30" height="30" v-else-if="advanceOn">
  <img src="../assets/images/r-osusume_no.png" alt="" width="30" height="30" v-else-if="advanceOff">
  <img src="../assets/images/r-yes.png" alt="" width="30" height="30" v-else-if="on">
  <img src="../assets/images/r-no.png" alt="" width="30" height="30" v-else-if="off">
  </span>
</template>
<script>
export default {
  name: 'RPlanSelected',
  props: {
    // plan=1 おすすめ、plan=２ フリー、plan=0 プラン無関係
    plan: null,
    // with=1 有、plan=２ 無
    with: null
  },
  computed: {
    freeOn () {
      return ((this.plan === '2' || this.plan === 2) && (this.with === '1' || this.with === 1))
    },
    freeOff () {
      return ((this.plan === '2' || this.plan === 2) && (this.with === '2' || this.with === 2))
    },
    advanceOn () {
      return ((this.plan === '1' || this.plan === 1) && (this.with === '1' || this.with === 1))
    },
    advanceOff () {
      return ((this.plan === '1' || this.plan === 1) && (this.with === '2' || this.with === 2))
    },
    on () {
      return ((this.plan === '0' || this.plan === 0) && (this.with === '1' || this.with === 1))
    },
    off () {
      return ((this.plan === '0' || this.plan === 0) && (this.with === '2' || this.with === 2))
    }
  }
}
</script>
<style scoped>
</style>
