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
            <a href="/#/Album">アルバム一覧</a>
        </li>
         >
         <li style="display: inline">
            <a  class="nowPage" style="text-decoration: none; color: black">アルバム編集</a>
        </li>
    </ul>
</div>
<div class="w100" style="margin-bottom: 10px;">

  <ul class="pager">
    <li class="previous">
      <a href="/#/Album" style="margin-right: 130px;">&larr; アルバムに戻る</a>
    </li>
     <li class="previous">
      <a @click="panoPreview(id)" style="margin-right: 10px; cursor: pointer;"><i class="icon-picture"></i>&nbsp;&nbsp;VR表示&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
    <li class="previous">
      <a @click="panoEdit(id)" style="margin-right: 10px; cursor: pointer;"><i class="icon-cog"></i>&nbsp;&nbsp;VR編集&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
  </ul>
  </div>
  <div class="well" style="float:left;width: 210px;height: 100px;margin-bottom: 15px;">
    <p><b>アルバム名：{{parambukenme}}</b></p>
    <p>画像数：{{parampicnum}}<span id="img_num"></span>枚</p>
  </div>
  <iframe name="iframeName1" id="iframeID1" src="" width="0" height="0" frameborder="0" style="display: none;" />
  <div class="well" style="margin: 0 0 0 265px; height: 100px;">
    <h4 style="margin-bottom: 10px;">画像ファイルをアップロードしてください。　<span id="o_file_length"></span></h4>
    <form id="formPanoImageUpload" method="post" enctype="multipart/form-data" target="iframeName1">
      <span id="vrInfoId" style="display:none;">{{id}}</span>
      <input type="text" id="inVrInfoId" name="vrInfoId" style="display:none;" />
      <input type="file" id="inFile" name="file" multiple="multiple" />
      <input type="button" value="アップロード" style="width: 150px;" @click="upload" />
    </form>
  </div>
  <div>
<span class="left w100">
  <table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th width="80">No.&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <th width="200">画像</th>
      <th>ファイル名</th>
      <th width="200">説明</th>
      <th width="200">作成日</th>
      <th width="180" style="text-align:center;">操作</th>
    </tr>
  </thead>
  <tbody>
    <tr style="height: 100px; font-size: 18px" v-for="(item, index) in items" :key="item" @click="getDataId(item.location)">
      <td style="vertical-align:middle;">{{index+1}}</td>
      <td style="vertical-align:middle;"><img :src = item.location /></td>
      <td style="vertical-align:middle;">{{item.filename}}</td>
      <td style="vertical-align:middle;">{{item.setsumei}}</td>
      <td style="vertical-align:middle;">{{item.create_time}}</td>
      <td style="min-width:135px; vertical-align:middle;">
        <a href="#image-modal" class="btn image-delete-btn" title="削除" rel="tooltip" action="" data-toggle="modal" data-original-title="Delete"><i class="icon-remove"></i>&nbsp;&nbsp;削除&nbsp;&nbsp;&nbsp;</a>
        <a class="btn" href="/#/Setsumei">説明変更</a>
      </td>
    </tr>
  </tbody>
</table>
  </span>
  </div>
<div style="margin: 0 0 0 0;">
	<div class="left w100" style="margin-top: 15px;">
		<div class="well sidebar-nav" style="margin-bottom: 15px;">
			<ul class="nav nav-list" style="height: 90px;">
				<li class="nav-header" style="font-size: 15px;">アルバムリンク</li>
				<li><textarea readonly="readonly" rows="auto" name="txtrea" style="cursor: text; min-width: 390px;width:100%;">link1</textarea></li>
				<li class="nav-header" style="font-size: 15px;">物件リンク</li>
				<li>
          <textarea readonly="readonly" rows="auto" name="txtrea" style="cursor: text; min-width: 390px;width:100%;">asdasdas</textarea>
        </li>
			</ul>
		</div>
	</div>
	<div class="left w100" style="margin-top: 15px;">
		<div class="well sidebar-nav" style="margin-bottom: 15px;">
			<ul class="nav nav-list" style="height: 90px;">
				<li class="nav-header" style="font-size: 15px;">埋め込みコード</li>
				<li><textarea readonly="readonly" rows="auto" name="txtrea" style="cursor: text; min-width: 390px;width:100%;">link2</textarea></li>
			</ul>
		</div>
	</div>
</div>
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
