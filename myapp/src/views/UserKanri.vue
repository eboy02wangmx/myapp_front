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
          <a class="brand" href="/#/Album">Panolib</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="/#/Album">アルバム一覧</a></li>
              <li class="active"><a href="/#/UserKanri">ユーザー管理</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
            </ul>
            <p class="navbar-text pull-right"><a href="/#/Top">ログアウト</a></p>
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
                <a  class="nowPage" style="text-decoration: none; color: black">ユーザー管理</a>
            </li>
        </ul>
    </div>
    <div class="page-header">
      <h1>ユーザー管理</h1>
      <br />
      <span v-if="isAdmin">
        <a class="btn btn-primary" href="/#/UserInsert">ユーザー作成</a>
      </span>
      <span v-if="!isAdmin">
        <button class="btn btn-primary" disabled="disabled" href="/#/UserInsert">ユーザー作成</button>
        </span>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>組織ID<a id="userKanriCustomid" class="btn" @click="order('customid')" style="font-size:6px; width:20px; height:15px; float:right; padding:0px; display: none;">▼</a></th>
          <th>組織名</th>
          <th width="200">アカウントID</th>
          <th width="120">区分</th>
          <th width="40">状態</th>
          <th width="130">登録日</th>
          <th width="200" style="text-align: center;">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item" @click="getDataId(item.userid)">
          <td><span v-if="item.kengen === '1'">---</span><span v-if="item.kengen !== '1'">{{item.customid}}</span></td>
          <td><span v-if="item.kengen === '1'">---</span><span v-if="item.kengen !== '1'">{{item.soshikime}}</span></td>
          <td>{{item.userid}}</td>
          <td v-if="item.kengen === '1' ">システム管理者</td>
          <td v-if="item.kengen === '2' ">管理ユーザー</td>
          <td v-if="item.kengen === '3' ">一般ユーザー</td>
          <td v-if="item.yukokbn === '0' ">無効</td>
          <td v-if="item.yukokbn === '1' ">有効</td>
          <td>{{item.systemdate}}</td>
          <td>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-if="loginidkengen === '1' && item.kengen === '1'">
              <a class="btn" href="/#/UserCreate" @click="tocreate(item.kengen)">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" disabled="disabled">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" disabled="disabled">有&nbsp;/&nbsp;無効</a >
            </div>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '1' && item.kengen !== '1'">
              <a class="btn" href="/#/UserCreate" @click="tocreate(item.kengen)">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" href="/#/DeletePopup">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" @click="yukokbnhenko(item.userid, item.yukokbn)" href="/#/Userkanri">有&nbsp;/&nbsp;無効</a>
            </div>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '2' && item.kengen === '2'">
              <a class="btn" href="/#/UserCreate" @click="tocreate(item.kengen)">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" disabled="disabled">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" disabled="disabled">有&nbsp;/&nbsp;無効</a >
            </div>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '2' && item.kengen !== '2'">
              <a class="btn" href="/#/UserCreate" @click="tocreate(item.kengen)">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" href="/#/DeletePopup">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" @click="yukokbnhenko(item.userid, item.yukokbn)" href="/#/Userkanri">有&nbsp;/&nbsp;無効</a>
            </div>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '3' && item.kengen === '2'">
              <a class="btn" disabled="true">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" disabled="true">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" disabled="true">有&nbsp;/&nbsp;無効</a>
            </div>
            <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '3' && item.kengen === '3' && loginid === item.userid">
              <a class="btn" href="/#/UserCreate" @click="tocreate(item.kengen)">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" disabled="true">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" disabled="true">有&nbsp;/&nbsp;無効</a>
            </div>
             <div class="btn-group" style="width:188px; margin: 0 auto;" v-else-if="loginidkengen === '3' && item.kengen === '3' && loginid !== item.userid">
              <a class="btn" disabled="true">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" disabled="true">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" disabled="true">有&nbsp;/&nbsp;無効</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {userKanriViewModel} from '@/view-model/UserKanri'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [userKanriViewModel],
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
