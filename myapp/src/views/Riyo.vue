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
              <li><a href="/#/Album">アルバム一覧</a></li>
              <li><a href="/#/UserKanri">ユーザー管理</a></li>
              <li class="active" v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
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
      <h1 style="display: inline;">利用状況一覧</h1>
      <br /><br />
      <a @click="csvDownload" class="btn btn-primary" style="display: inline; margin: 10px 50px 0px 0px; ">CSV ダウンロード</a>
    </div>
    <div>
      <div v-for="(riyo, i) in this.$store.state.myapp.riyos" :key="riyo">
        <hr style="margin-top: 40px;" v-if="i!==0" />
        <div style="padding: 10px;">
          <font style="font-size: 14px; font-weight: bold;">組織ID：</font><span style="width: 180px; display: inline-block; border-bottom:1px solid #ddd; padding-left: 5px;">&nbsp;{{riyo.head.customid}}</span>
          <font style="font-size: 14px; font-weight: bold; margin-left: 10px;">組織名：</font><span style="width: 200px; display: inline-block; border-bottom:1px solid #ddd; padding-left: 5px;">&nbsp;{{riyo.head.soshikime}}</span>
          <font style="font-size: 14px; font-weight: bold; margin-left: 10px;">契約プラン：</font><span style="width: 200px; display: inline-block; border-bottom:1px solid #ddd; padding-left: 5px;">&nbsp;{{riyo.head.contractName}}</span>
          <font style="font-size: 14px; font-weight: bold; margin-left: 10px;">登録可能画像数：</font><span style="width: 60px; display: inline-block; border-bottom:1px solid #ddd; padding-left: 5px;">&nbsp;{{riyo.head.contractUploadNum}}</span>
          <font style="font-size: 14px; font-weight: bold; margin-left: 10px;">登録済み画像数：</font><span style="width: 60px; display: inline-block; border-bottom:1px solid #ddd; padding-left: 5px;">&nbsp;{{riyo.head.contractUploadedNum}}</span>
        </div>
        <div style="padding-left: 38px;">
          <table class="table table-bordered" style="width: 100%;">
            <thead>
              <tr style="background-color: #f9f9f9;">
                <th width="180">アルバム名</th>
                <th width="180">作成者</th>
                <th width="120">作成日時</th>
                <th width="120">更新日時</th>
                <th width="120">画像数</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="body in riyo.bodyList" :key="body">
                <td>{{body.vrInfoName}}</td>
                <td>{{body.userid}}</td>
                <td>{{body.sakusehiDisplay}}</td>
                <td>{{body.koushinhiDisplay}}</td>
                <td>{{body.picnum}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
