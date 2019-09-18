<!--
  - Riyo画面
  -
  - see: 画面定義書_G-NHA-002_user画面_v1.1.xlsx
  -->
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
              <li>
                <a href="/#/Album">アルバム一覧</a>
              </li>
              <li>
                <a href="/#/UserKanri">ユーザー管理</a>
              </li>
              <li class="active">
                <a href="/#/Riyo">利用状況一覧</a>
              </li>
            </ul>
            <p class="navbar-text pull-right">
              <a href="/#/Top">ログアウト</a>
            </p>
          </div>
          <!--/.nav-collapse -->
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
        </li>>
        <li style="display: inline">
          <a class="nowPage" style="text-decoration: none; color: black">利用状況一覧</a>
        </li>
      </ul>
    </div>
    <div class="page-header">
      <h1>利用状況一覧</h1>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th width="180">カスタム名</th>
          <th width="180">アルバム名</th>
          <th width="120">登录者</th>
          <th width="120">作成日時</th>
          <th width="120">更新日時</th>
          <th width="70">画像数</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in this.$store.state.myapp.riyos" :key="i">
          <td>{{i.customid}}</td>
          <td>{{i.bukenme}}</td>
          <td>{{i.userid}}</td>
          <td>{{i.sakusehi}}</td>
          <td>{{i.koushinhi}}</td>
          <td>{{i.picnum}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { riyoViewModel } from '@/view-model/Riyo'
import { ACTIONS } from '@/store/action-types'
export default {
  mixins: [riyoViewModel],
  methods: {
    // エラーがある場合、ポップアップ画面を表示する。
    toDisclosureStatement () {
      if (this.$root.isMobile.any === true) {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {
          name: 'DisclosureStatementSp',
          showScrollBtn: true
        })
      } else {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {
          name: 'DisclosureStatement',
          showScrollBtn: true
        })
      }
    }
  }
}
</script>
<style scoped>
</style>
