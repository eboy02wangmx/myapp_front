<!--
  - TOP画面
  -
  - see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
  -->
<template>
<div class="container-fluid">

<div class="well login">
  <div class="page-header" style="text-align:center;">
    <h1>パノラマ映像ライブラリ</h1>
  </div>
  <div class="page-header" style="text-align:center;">
    <h1>Panolib</h1>
  </div>
  <form action="#" method="post" accept-charset="utf-8">
  <div v-if="isError" class="alert alert-error"><strong>アカウントIDかパスワードが正しくありません。</strong></div>
  <div id="errMsg" class="alert alert-error" style="font-weight: bold; display: none;"></div>
  <label for="email_address">アカウントID</label><input type="text" name="email_address" v-model = "userName" class="text-input" maxlength="45"><label for="password">パスワード</label><input type="password" name="password" v-model = "password" class="text-input" maxlength="30">
  <p><r-button class="btn btn-primary btn-large" @click="userLogin">ログイン</r-button></p>
  </form>
  <p><a href="/#/Psdforget">パスワードを忘れた場合</a></p>
  <!-- <p><a href="https://mieru360.com/auth/trial">ユーザー登録</a></p>-->
</div>

</div><!--/.fluid-container-->
</template>
<script>
import {topViewModel} from '@/view-model/Top'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [topViewModel],
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

</style>
