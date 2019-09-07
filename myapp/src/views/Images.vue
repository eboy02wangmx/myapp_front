<!--
  - IMAGES画面
  -
  - see: 画面定義書_G-NHA-003_IMAGES画面_v1.1.xlsx
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
      <a class="brand" href="https://mieru360.com/">Panolib</a>
      <div class="nav-collapse">
        <ul class="nav">
          <li class="active"><a href="https://mieru360.com/album">物件一覧</a></li>
          <li><a href="https://mieru360.com/user">ユーザー管理</a></li>
          <li v-if="this.$store.state.myapp.userName === 'admin'"><a href="">利用状況一覧</a></li>
        </ul>
        <p class="navbar-text pull-right"><a href="https://mieru360.com/auth/logout">ログアウト</a></p>
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
        <a class="returnPage" href="https://mieru360.com/album">H O M E</a>
    </li>
    >
    <li style="display: inline">
        <a  class="returnPage" href="https://mieru360.com/album">アルバム一覧</a>
    </li>
    >
    <li style="display: inline">
        <a class="nowPage" style="text-decoration: none; color: black">アルバム編集</a>
    </li>
</ul>
<div>
  <ul class="pager">
    <li class="previous">
      <a href="#/Album" style="margin-right: 130px;">&larr; アルバムに戻る</a>
    </li>
    <li class="previous">
      <a target="_blank" onclick="return vrDisplay(this)" href="https://mieru360.com/play/index/391aefa7-b9b1-11e9-bdc9-9ca3ba01d8b9" style="margin-right: 10px;"><i class="icon-picture"></i>&nbsp;&nbsp;VR表示&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
    <li class="previous">
      <a href="../static/Vtour.html">VR編集</a>
    </li>
  </ul>
</div>
</div>
    <input @change="selectedFile" type="file" name="file" multiple>
    <button @click="imageUpload" type="submit">アップロード</button>


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
     <tr v-for="i in albums" :key="i">
      <td><a href="">{{i.filename }}</a>
            <!-- <ul class="mini-image-set">
                    <li>
            <a href=""><img src="" alt="" /></a></li>
                    <li>
            <a href=""><img src="" alt="" /></a></li>
                    <li>
            <a href=""><img src="" alt="" /></a></li>
            </ul> -->
      <div class="clear"></div>
      </td>
      <td>{{i.userid}}</td>
      <td>{{i.sakusehi}}</td>
      <td>{{i.koushinhi}}</td>
      <td>{{i.picnum}}</td>
      <td style="min-width:135px;">
        <div class="btn-group" >
            <div>
            <a class="btn img-fancy" href="/#/Images"><i class="icon-list"></i> &nbsp;&nbsp;編集</a></div><div style="position: relative; left:5px;">
            <a class="btn album-delete-btn" href="#album-modal" data-toggle="modal" rel="/#/Images"><i class="icon-trash"></i> &nbsp;&nbsp;削除</a></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import {imagesViewModel} from '@/view-model/Images'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [imagesViewModel],
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
