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
          <li class="active"><a href="/#/Album">物件一覧</a></li>
          <li><a href="/#/UserKanri">ユーザー管理</a></li>
          <li><a href="/#/Riyo">利用状況一覧</a></li>
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
      <th>アルバム名&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn btn-primary" href="/#/AlbumCreate">新規作成</a></th>
            <th width="120">所有者</th>
            <th width="120">作成日時</th>
      <th width="120">更新日時</th>
      <th width="70">画像数</th>
      <th width="180" style="text-align:center;">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="">川口美紀の森区画</a>
            <ul class="mini-image-set">
                    <li>
            <a href=""><img src="" alt="" /></a></li>
                    <li>
            <a href=""><img src="" alt="" /></a></li>
                    <li>
            <a href=""><img src="" alt="" /></a></li>
            </ul>
        <div class="clear"></div>
      </td>
      <td>管理者</td>
      <td>2019/08/08 13:05:39</td>
      <td >2019/08/20 12:42:37</td>
      <td>3枚</td>
      <td style="min-width:135px;">
        <div class="btn-group" >
            <div>
            <a class="btn img-fancy" href="/#/Images"><i class="icon-list"></i> &nbsp;&nbsp;編集</a></div><div style="position: relative; left:5px;">
            <a class="btn album-delete-btn" href="#album-modal" data-toggle="modal" rel="/#/Images"><i class="icon-trash"></i> &nbsp;&nbsp;削除</a></div>
        </div>
      </td>
    </tr>
    <tr>
      <td><a href="">cccc</a>
                      </td>
                      <td><a href="">xjklongbbb@yahoo.co.jp</a></td>
                    <td>2019/08/13 12:59:29</td>
      <td >2019/08/13 12:59:29</td>
      <td>0枚</td>
      <td style="min-width:135px;">
        <div class="btn-group" >
          <div>
            <a class="btn img-fancy" href=""><i class="icon-list"></i> &nbsp;&nbsp;編集</a>
            </div>
            <div style="position: relative; left:5px;">
            <a class="btn album-delete-btn" href="#album-modal" data-toggle="modal" rel="https://mieru360.com/album/remove/158"><i class="icon-trash"></i> &nbsp;&nbsp;削除</a>
            </div>
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
