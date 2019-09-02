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
          <a class="brand" href="https://mieru360.com/">Panolib</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li>
                <a href="/#/Album">物件一覧</a>
              </li>
              <li>
                <a href="/#/User">ユーザー管理</a>
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
          <th>カスタム名</th>
          <th width="120">物件名</th>
          <th width="120">登录者</th>
          <th width="120">作成日時</th>
          <th width="120">更新日時</th>
          <th width="70">画像数</th>
          <th width="180" style="text-align:center;">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in this.$store.state.myapp.riyos" :key="i">
          <td>
            <a href>{{i.customid }}</a>
            <div class="clear"></div>
          </td>
          <td>{{i.bukenme}}</td>
          <td>{{i.userid}}</td>
          <td>{{i.sakusehi}}</td>
          <td>{{i.koushinhi}}</td>
          <td>{{i.picnum}}</td>
          <td>
            <div class="btn-group">
              <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
                操作
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="https://mieru360.com/user/edit/38">
                    <i class="icon-pencil"></i>編集
                  </a>
                </li>
                <li>
                  <a href="https://mieru360.com/user/deactivate/38">
                    <i class="icon-ban-circle"></i>無効化
                  </a>
                </li>
                <li>
                  <a
                    class="user-delete-btn"
                    href="#user-modal"
                    data-toggle="modal"
                    rel="https://mieru360.com/user/remove/38"
                  >
                    <i class="icon-trash"></i>削除
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { riyoViewModel } from "@/view-model/Riyo";
import { ACTIONS } from "@/store/action-types";

export default {
  mixins: [riyoViewModel],
  methods: {
    // エラーがある場合、ポップアップ画面を表示する。
    toDisclosureStatement() {
      if (this.$root.isMobile.any === true) {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {
          name: "DisclosureStatementSp",
          showScrollBtn: true
        });
      } else {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {
          name: "DisclosureStatement",
          showScrollBtn: true
        });
      }
    }
  }
};
</script>
<style scoped>
</style>
