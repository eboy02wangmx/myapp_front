<template>
  <div>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href>Panolib</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="/#/Album">アルバム一覧</a></li>
              <li class="active"><a href="/#/UserKanri">ユーザー管理</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
            </ul>
            <p class="navbar-text pull-right">
              <a href="/#/Top">ログアウト</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="nav" style="height: 9%">
      <ul style="margin: 0">
        <li style="display: inline">
          <span>現在位置：</span>
        </li>
        <li style="display: inline">
          <a href="/#/Album">H O M E</a>
        </li>
        >
        <li style="display: inline">
          <a href="/#/UserKanri">ユーザー管理</a>
        </li>
        >
        <li style="display: inline">
          <a class="nowPage" style="text-decoration: none; color: black">ユーザー情報作成</a>
        </li>
      </ul>
    </div>
    <div class="page-header">
      <h1>ユーザー情報作成</h1>
    </div>
    <div class="well">
      <form action method="post" accept-charset="utf-8">
        <fieldset>
          <legend>ユーザー情報</legend>
          <table class="table table-bordered">
            <tr>
              <td style="width:240px">
                <label for="userInsertUserId">アカウントID</label>
              </td>
              <td>
                <input type="text" id="userInsertUserId" v-model="userid" name="userid" maxlength="30" />
                <span id="userInsertUserIdErr" style="color: red; font-weight: bold; margin-left: 10px;"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label for="userInsertName">説明</label>
              </td>
              <td>
                <input type="text" id="userInsertName" v-model="name" name="name" maxlength="32" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertSoshikime">組織名</label>
              </td>
              <td>
                <input type="text" id="userInsertSoshikime" v-model="soshikime"  name="soshikime" minlength="1" maxlength="30" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertAddress">住所</label>
              </td>
              <td>
                <input type="text" id="userInsertAddress" v-model="address" name="address" minlength="4" maxlength="30" style="width: 372px;" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertTel">
                  電話番号
                  <P><font color='#d56a00'>※数字11桁の電話番号を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userInsertTel" v-model="tel" name="tel" minlength="8" maxlength="11" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertTantobusho">担当部署</label>
              </td>
              <td>
                <input type="text" id="userInsertTantobusho" v-model="tantobusho" name="tantobusho" minlength="1" maxlength="30" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertTantosha">担当者</label>
              </td>
              <td>
                <input type="text" id="userInsertTantosha" v-model="tantosha" name="tantosha" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertMail">連絡メールアドレス</label>
              </td>
              <td>
                <input type="text" id="userInsertMail" v-model="mail" name="mail" minlength="1" maxlength="20" />
                <span id="userInsertMailErr" style="color: red; font-weight: bold; margin-left: 10px;"></span>
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertRemail">連絡メールアドレス（確認）</label>
              </td>
              <td>
                <input type="text" id="userInsertRemail" v-model="remail" name="remail" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertKeiyakuhi">
                  契約日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userInsertKeiyakuhi" v-model="keiyakuhi" name="keiyakuhi" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="plan">契約プラン</label>
              </td>
              <td>
                  <select v-model="planname" id="plan" style="width:220px"></select>
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertKeiyakushiki">
                  契約開始日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userInsertKeiyakushiki" v-model="keiyakushiki" name="keiyakushiki" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="loginid == 'panolib_admin'">
              <td>
                <label for="userInsertKeiyakushuki">
                  契約終了日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userInsertKeiyakushuki" v-model="keiyakushuki" name="keiyakushuki" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="userInsertPassword">パスワード</label>
              </td>
              <td>
                <input type="password" id="userInsertPassword" v-model="password" name="password" minlength="4" maxlength="30" />
                <span id="userInsertPasswordErr" style="color: red; font-weight: bold; margin-left: 10px;"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label for="password_conf">パスワード再入力</label>
              </td>
              <td>
                <input type="password" id="userInsertPasswordConf" v-model="repsd" name="password_conf" minlength="4" maxlength="30" />
              </td>
            </tr>
          </table>
        </fieldset>
        <a name="submit" type="submit" id="submit"  @click="koushin" style="margin-bottom: 3px" value="Update" class="btn btn-primary">&nbsp;&nbsp;&nbsp;作成&nbsp;&nbsp;&nbsp;</a>
        <a href="/#/UserKanri" class="btn">キャンセル</a>
      </form>
    </div>
  </div>
</template>
<script>
import { userInsertViewModel } from '@/view-model/UserInsert'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [userInsertViewModel],
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
