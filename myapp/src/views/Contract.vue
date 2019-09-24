<!--
  - 契約情報画面
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
              <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li class="active" v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
            </ul>
            <p class="navbar-text pull-right"><a href="/#/Top">ログアウト</a></p>
          </div>
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
                <a class="nowPage" style="text-decoration: none; color: black">契約情報管理</a>
            </li>
        </ul>
    </div>
    <div class="page-header">
      <h1>契約情報管理</h1>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th width="100">プランID</th>
          <th>プラン名</th>
          <th width="150">アップロード可能画像数</th>
          <th width="120">月次利用金額</th>
          <th width="80">月次PV数</th>
          <th width="80">有効 / 無効</th>
          <th width="233">
            <a class="btn btn-primary" href="/#/ContractAdd">契約情報作成</a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contract in this.$store.state.myapp.contracts" :key="contract" @click="getId(contract.id, contract.name, contract.uploadNum, contract.money, contract.pv)">
          <td>{{contract.id}}</td>
          <td>{{contract.name}}</td>
          <td>{{contract.uploadNum}}</td>
          <td>{{contract.money}}</td>
          <td>{{contract.pv}}</td>
          <td><span v-if="contract.status === 1">有効</span><span v-if="contract.status === 2">無効</span></td>
          <td>
            <div class="btn-group">
              <a class="btn" href="/#/ContractEdit">編&nbsp;&nbsp;&nbsp;集</a>
              <a class="btn" @click="remove(contract.id)">削&nbsp;&nbsp;&nbsp;除</a>
              <a class="btn" :disabled="contract.status === 1" @click="enabled(contract.id)">有&nbsp;&nbsp;&nbsp;効</a>
              <a class="btn" :disabled="contract.status === 2" @click="disabled(contract.id)">無&nbsp;&nbsp;&nbsp;効</a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import {contractViewModel} from '@/view-model/Contract'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [contractViewModel],
  methods: {
  }
}
</script>
