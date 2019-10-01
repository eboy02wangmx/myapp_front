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
              <li>
                <a href="/#/Album">アルバム一覧</a>
              </li>
              <li class="active">
                <a href="/#/UserKanri">ユーザー管理</a>
              </li>
              <li v-if="this.$store.state.myapp.userName === 'panolib_admin'">
                <a href="/#/Riyo">利用状況一覧</a>
              </li>
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
          <a class="nowPage" style="text-decoration: none; color: black">ユーザー情報編集</a>
        </li>
      </ul>
    </div>
    <div class="page-header">
      <h1>ユーザー情報編集</h1>
    </div>
    <div class="well">
      <form action method="post" accept-charset="utf-8">
        <fieldset>
          <legend>ユーザー情報</legend>
          <table class="table table-bordered">
            <tr>
              <td style="width:240px">
                <label for="userCreateUserId">アカウントID</label>
              </td>
              <td>
                <input type="text" id="userCreateUserId" name="email_address" v-model = "account" readonly="readonly" maxlength="30" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="userCreateFuriganase">説明</label>
              </td>
              <td>
                <input type="text" id="userCreateName" v-model="createItems.name" name="name" maxlength="32" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateSoshikime">組織名</label>
              </td>
              <td>
                <input type="text" id="userCreateSoshikime" v-model="createItems.soshikime" name="soshikime" minlength="1" maxlength="30" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateAddress">住所</label>
              </td>
              <td>
                <input type="text" id="userCreateAddress" v-model="createItems.address" name="address" minlength="4" maxlength="40" style="width: 372px;" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateTel">
                  電話番号
                  <P><font color='#d56a00'>※数字11桁の電話番号を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userCreateTel" v-model="createItems.tel" name="tel" minlength="8" maxlength="11" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateTantobusho">担当部署</label>
              </td>
              <td>
                <input type="text" id="userCreateTantobusho" v-model="createItems.tantobusho" name="tantobusho" minlength="1" maxlength="30" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateTantosha">担当者</label>
              </td>
              <td>
                <input type="text" id="userCreateTantosha" v-model="createItems.tantosha" name="tantosha" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateMail">連絡メールアドレス</label>
              </td>
              <td>
                <input type="text" id="userCreateMail" v-model="createItems.mail" name="mail" minlength="1" maxlength="20" />
                <span id="userInsertMailErr" style="color: red; font-weight: bold; margin-left: 10px;"></span>
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateRemail">連絡メールアドレス（確認）</label>
              </td>
              <td>
                <input type="text" id="userCreateRemail" v-model="createItems.remail" name="remail" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateKeiyakuhi">
                  契約日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userCreateKeiyakuhi" v-model="createItems.keiyakuhi" name="keiyakuhi" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2' && loginid !== 'panolib_admin'">
              <td>
                <label for="plan">契約プラン</label>
              </td>
              <td>
                <input type="text" v-model="createItems.planname" readonly="readonly" maxlength="30" />
              </td>
            </tr>
            <tr v-else-if="tocreatekengen === '2'">
              <td>
                <label for="plan">契約プラン</label>
              </td>
              <td>
                <Select id="userCreatePlanname" v-model="planname"  style="width:220px">
                  <option selected>{{createItems.planname}}</option>
                  <Option v-for="item in planList" :key="item" :value="item">{{item}}</Option>
                </Select>
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateKeiyakushiki">
                  契約開始日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userCreateKeiyakushiki" v-model="createItems.keiyakushiki" name="keiyakushiki" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2'">
              <td>
                <label for="userCreateKeiyakushuki">
                  契約終了日
                  <P><font color='#d56a00'>※数字8桁の日付を入力ください</font></P>
                </label>
              </td>
              <td>
                <input type="text" id="userCreateKeiyakushuki" v-model="createItems.keiyakushuki" name="keiyakushuki" minlength="1" maxlength="20" />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">パスワード</label>
                <P><font color='#d56a00'>※変更しない場合空白</font></P>
              </td>
              <td>
                <input type="password" id="userCreatePassword" v-model="password" name="password" minlength="4" maxlength="30" />
                <span id="userInsertPasswordErr" style="color: red; font-weight: bold; margin-left: 10px;"></span>
              </td>
            </tr>
            <tr>
              <td>
                <label for="userCreateRepassword">パスワード再入力</label>
                <P><font color='#d56a00'>※変更しない場合空白</font></P>
              </td>
              <td>
                <input type="password" id="userCreateRepassword" v-model="repsd" name="password_conf" minlength="4" maxlength="30" />
              </td>
            </tr>
          </table>
        </fieldset>
        <a name="submit" type="submit" id="submit" @click="koushin" style="margin-bottom: 3px" value="Update" class="btn btn-primary">&nbsp;&nbsp;&nbsp;更新&nbsp;&nbsp;&nbsp;</a>
        <a href="/#/UserKanri" class="btn">キャンセル</a>
      </form>
    </div>
  </div>
</template>
<script>
import { userCreateViewModel } from '@/view-model/UserCreate'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [userCreateViewModel],
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
