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
          <li class="active"><a href="/#/Album">物件一覧</a></li>
          <li><a href="/#/UserKanri">ユーザー管理</a></li>
          <li v-if="this.$store.state.myapp.userName === 'panolib_admin'"><a href="/#/Riyo">利用状況一覧</a></li>
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
            <a href="/#/Album" class="nowPage" style="text-decoration: none; color: black">物件一覧</a>
        </li>
         >
         <li style="display: inline">
            <a  class="nowPage" style="text-decoration: none; color: black">物件編集</a>
        </li>
    </ul>
</div>
<div class="w100" style="margin-bottom: 10px;">

  <ul class="pager">
    <li class="previous">
      <a href="/#/Album" style="margin-right: 130px;">&larr; 物件に戻る</a>
    </li>
    <li class="previous">
      <a target="_blank" onclick="return vrDisplay(this)" href="https://mieru360.com/play/index/bfe04bbb-bd7e-11e9-bdc9-9ca3ba01d8b9" style="margin-right: 10px;"><i class="icon-picture"></i>&nbsp;&nbsp;VR表示&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
    <li class="previous">
      <a target="_blank" onclick="return vrEditing(this)" href="https://mieru360.com/album/vredit/158" style="margin-right: 10px;"><i class="icon-cog"></i>&nbsp;&nbsp;VR編集&nbsp;&nbsp;&nbsp;&nbsp;</a>
    </li>
  </ul>
  </div>
  <div class="well" style="float:left;width: 210px;height: 80px;margin-bottom: 15px;">
    <p><b>アルバム名：cccc</b></p>
    <p>画像数：<span id="img_num"></span>枚</p>
    <p>合計サイズ：<span id="img_size"></span>MB</p>
  </div>
  <div class="well" style="margin: 0 0 0 265px;">
    <h4 style="margin-bottom: 10px;">画像ファイルをアップロードしてください。　<span id="o_file_length"></span></h4>
    <!-- The file upload form used as target for the file upload widget -->
    <form id="fileupload" action="//weshare.co.jp/" method="POST" enctype="multipart/form-data">
        <!-- Redirect browsers with JavaScript disabled to the origin page -->
        <noscript><input type="hidden" name="redirect" value="http://weshare.co.jp/"></noscript>
        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
        <div class="fileupload-buttonbar">
            <div class="fileupload-buttons">
                <!-- The fileinput-button span is used to style the file input field as button -->
                <span class="fileinput-button">
                    <span>画像追加</span>
                    <input type="file" name="Filedata" multiple>
                    <button class="start" disabled>アップロード</button>
                </span>
				<span id="buttondisplay" style="display:none; width: 350px;">
                <button type="submit" class="start">一括アップロード</button>
                <button type="button" onclick="buttreset()" class="cancel">一括キャンセル</button>
				</span>
                <!--<button type="button" class="delete">画像削除</button>
                <input type="checkbox" class="toggle">-->
                <!-- The global file processing state
                <span class="fileupload-process"></span>-->
            </div>
            <!-- The global progress state -->
            <div class="fileupload-progress fade" style="display:none">
                <!-- The global progress bar -->
                <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                <!-- The extended global progress state -->
                <div class="progress-extended">&nbsp;</div>
            </div>
        </div>
        <!-- The table listing the files available for upload/download -->
        <table role="presentation"><tbody class="files"></tbody></table>
    </form>
  </div>
  <div>
<span class="left w100">
      <ul id="sortable">
            <li id="image_1555" class="ui-state-default" style="height: 110px">
      <div class="drag-handle" style="height: 105px"></div>
      <div class="image-container">1111111111</div>
      <div class="info" style="left: 250px;line-height:21px;">あああ</div>
      <div class="btn-group" style="top: 65px;margin-right: 10px">
		<a href="#image-modal" class="btn image-delete-btn" title="削除" rel="tooltip" action="https://mieru360.com/image/remove/158/1555" data-toggle="modal" data-original-title="Delete"><i class="icon-remove"></i>&nbsp;&nbsp;削除&nbsp;&nbsp;&nbsp;</a>
    </div>
            </li>
      </ul>
  </span>
  </div>
<div style="width: 250px; background: yellow">
  <div class="left" style="margin-top: 15px;">
  <div class="well" style="width: 210px; height: 250px;">
    <ul class="nav nav-list" style=" padding-left: 5px; padding-right: 5px;">
      <li class="nav-header" style="font-size: 14px;padding: 0;margin-left: 0;margin-right: 0;margin-bottom: 3px">位置
          <span>
              <select id="sizeQr" onclick="sizeChange()" style="-moz-appearance: none;-webkit-appearance: none; -ms-progress-appearance: display:none;
               display:inline;width: 14%;padding: 0 3%;margin: 0;position:relative;left: 3px;bottom:1px;text-align: center">
                <option style="text-align: center" value="200" ></option>
                <option style="text-align: center" selected value="350"></option>
                <option style="text-align: center" value="500"></option>
              </select>
          </span>
          <span id="downloadButton">
              <a id="downloadQr" class="btn" role="button" href="" style="position:relative;left: 8px"></a>
		      </span>
	    </li>
      <img src="" id="imgid" width="200" height="200">
    </ul>
  </div>
  </div>
</div>
<div style="margin: 0 0 0 265px;">
	<div class="left w100" style="margin-top: 15px;">
		<div class="well sidebar-nav" style="margin-bottom: 15px;">
			<ul class="nav nav-list" style="height: 90px;">
				<li class="nav-header" style="font-size: 15px;">物件リンク</li>
				<li><textarea readonly="readonly" rows="auto" name="txtrea" style="cursor: text; min-width: 390px;width:100%;">link1</textarea></li>
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
