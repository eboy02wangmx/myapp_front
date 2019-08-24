<!--
  - Auth画面
  -
  - see: 画面定義書xxx
  -->
<template>
<div class="container-fluid">

<div class="well login">
  <div class="page-header" style="text-align:center;">
    <h1>MIERU360</h1>
  </div>
  <form action="https://mieru360.com/auth/authenticate" method="post" accept-charset="utf-8"><label for="email_address">メールアドレス</label><input type="text" name="email_address" value="" class="text-input" maxlength="45"><label for="password">パスワード</label><input type="password" name="password" value="" class="text-input" maxlength="30">  <p>
  <button name="submit" type="submit" id="submit" value="Login" class="btn btn-primary btn-large">ログイン</button>  </p>
  </form>  <p><a href="https://mieru360.com/auth/forgotpassword">パスワードを忘れた場合</a></p>
  <p><a href="https://mieru360.com/auth/trial">ユーザー登録</a></p>
</div>

</div><!--/.fluid-container-->
</template>
<script>
import {topViewModel} from '@/view-model/Top'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [authViewModel],
  methods: {
  }
}
</script>
<style scoped>
/*****************************************************

    TOP

*****************************************************/

</style>
