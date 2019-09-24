<!--
  - ALBUM画面
  -
  - see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
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
          <li class="active"><a href="/#/Album">アルバム一覧</a></li>
          <li><a href="/#/UserKanri">ユーザー管理</a></li>
          <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
          <li v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
        </ul>
        <p class="navbar-text pull-right"><a href="/#/Top">ログアウト</a></p>
      </div><!--/.nav-collapse -->
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
            <a  class="nowPage" style="text-decoration: none; color: black">アルバム一覧</a>
        </li>
    </ul>
</div>
<div class="page-header">
  <h1>アルバム一覧</h1>
</div>
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th width="140">アルバム名</th>
      <th width="100">作成者</th>
      <th width="130">作成日時</th>
      <th width="130">更新日時</th>
      <th width="50">画像数</th>
      <th>物件リンク</th>
      <th width="200"><a class="btn btn-primary" href="/#/AlbumCreate">新規作成</a></th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="i in this.$store.state.myapp.albums" :key="i" @click="getDataId(i.id, i.bukenme, i.picnum, i.userid)">
      <td>{{i.bukenme}}</td>
      <td>{{i.userid}}</td>
      <td>{{i.sakusehi}}</td>
      <td>{{i.koushinhi}}</td>
      <td>{{i.picnum}}</td>
      <td>{{i.panoPreviewUrl}}</td>
      <td style="min-width:200px;">
        <div class="btn-group" style="width: 203px;">
          <a class="btn" @click="edit(i.id)">編&nbsp;&nbsp;&nbsp;集</a>
          <a class="btn" @click="remove(i)">削&nbsp;&nbsp;&nbsp;除</a>
          <a class="btn" @click="panoPreview(i)" :disabled="!i.panoPreviewUrl">プレビュー</a>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<div class="modal hide fade" id="album-modal">
  <div class="modal-header">
    <a class="close" data-dismiss="modal">×</a>
    <h3>アルバム削除</h3>
  </div>
  <div class="modal-body" align="center">
    <p><strong>アルバムを削除しますか？</strong></p>
    <p>この操作によりアルバム内のすべての画像が削除されます。</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">キャンセル</a>
    <a id="album-modal-delete-btn" href="#" class="btn btn-danger">&nbsp;&nbsp;&nbsp;&nbsp;削除&nbsp;&nbsp;&nbsp;&nbsp;</a>
  </div>
</div>
</div>
</template>
<script>
import {albumViewModel} from '@/view-model/Album'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [albumViewModel],
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
