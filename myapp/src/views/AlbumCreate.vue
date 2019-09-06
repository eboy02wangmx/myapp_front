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
              <li class="active">
                <a href="/#/Album">物件一覧</a>
              </li>
              <li>
                <a href="/#/UserKanri">ユーザー管理</a>
              </li>
              <li>
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
          <a class="nowPage" style="text-decoration: none; color: black">アルバム一覧</a>
        </li>
      </ul>
    </div>
    <div class="page-header">
      <h1>アルバム新規作成</h1>
    </div>
    <div class="well">
      <form action="https://mieru360.com/album/add" method="post" accept-charset="utf-8">
        <fieldset>
          <legend>アルバム作成</legend>
          <label for="album_name">アルバム名</label>
          <input type="text" name="album_name" value maxlength="30" v-model="albumName"/>
          <br />
          <br />
          <br />
        </fieldset>
        <r-button name="submit"
          type="submit"
          id="submit"
          style="margin-bottom: 3px"
          value="Add"
          class="btn btn-primary" @click="newCreate"
        >&nbsp;&nbsp;&nbsp;作&nbsp;成&nbsp;&nbsp;&nbsp;</r-button>
        <span></span>
        <a href="/#/Album" class="btn">キャンセル</a>
      </form>
    </div>
  </div>
</template>
<script>
import { albumCreateViewModel } from '@/view-model/AlbumCreate'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [albumCreateViewModel],
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
