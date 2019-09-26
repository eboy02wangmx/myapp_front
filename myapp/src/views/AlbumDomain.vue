<template>
  <div class="r-popup-back" >
    <div class="r-popup-main">
      <div class="r-popup-contents" tabIndex="0">
        <h3></h3>
        <div>
          <label for="caption">ドメインを入力してください：</label>
          <textarea id="domain" name="domain" v-model="domain" cols="40" rows="10" maxlength="255" />
        </div>
        <a @click="save" style="margin-bottom: 3px" class="btn btn-primary">&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;</a>
        <a href="/#/Album" class="btn">キャンセル</a>
      </div>
    </div>
  </div>
</template>

<script>
import { albumDomainViewModel } from '@/view-model/AlbumDomain'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [albumDomainViewModel],
  methods: {
  // エラーがある場合、ポップアップ画面を表示する。
    toDisclosureStatement () {
      if (this.$root.isMobile.any === true) {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatementSp', showScrollBtn: true})
      } else {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatement', showScrollBtn: true})
      }
    }
  }
}
</script>
<style scoped>
*:focus {
  outline:none
}
.r-popup-back {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9000;
  width: 100vw;
  height: 100vh;
  background-color: #0000003F;
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
  text-align: center;
}
.r-popup-contents-inner {
  padding: 30px 0px;
  text-align: left;
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
  min-width: 400px;
}
.button-focus-style:focus{
  outline: none;
}
</style>
