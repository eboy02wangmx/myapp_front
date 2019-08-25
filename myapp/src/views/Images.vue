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
          <li><a href="">利用状況一覧</a></li>
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
      <a target="_blank" onclick="return vrDisplay(this)" href="../static/tour.html" style="margin-right: 10px;"><i class="icon-picture"></i>&nbsp;&nbsp;VR表示&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
    <li class="previous">
      <a target="_blank" href="../static/tour_editor.html">VR編集</a>
    </li>
  </ul>
</div>
</div>
    <input @change="selectedFile" type="file" name="file" multiple>
    <button @click="upload" type="submit">アップロード</button>
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
