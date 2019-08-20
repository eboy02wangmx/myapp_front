<template>
  <div class="r-area-popup">
    <div v-if="prm == 1">
      <!-- 北海道 -->
    </div>
    <div class="r-step0105_map" v-if="prm == 2">
      <h2 class="r-area2-lbl">東北エリア</h2>
      <hr class="r-area2-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('02')">青森県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('03')">岩手県</button><br>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('04')">宮城県</button><br>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('10')">秋田県</button><br>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('11')">山形県</button><br>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn02" @click="setPrefecture('12')">福島県</button><br>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 3">
      <h2 class="r-area3-lbl">関東エリア</h2>
      <hr class="r-area3-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('25')">東京都</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('26')">神奈川県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('23')">埼玉県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('24')">千葉県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('20')">茨城県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('21')">栃木県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn03" @click="setPrefecture('22')">群馬県</button>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 4">
      <h2 class="r-area4-lbl">中部エリア</h2>
      <hr class="r-area4-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('30')">新潟県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('31')">富山県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('32')">石川県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('33')">福井県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('40')">長野県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('41')">岐阜県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('42')">静岡県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('43')">愛知県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn04" @click="setPrefecture('34')">山梨県</button>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 5">
      <h2 class="r-area5-lbl">近畿エリア</h2>
      <hr class="r-area5-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('50')">滋賀県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('57')">京都府</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('58')">大阪府</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('59')">兵庫県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('60')">奈良県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('44')">三重県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn05" @click="setPrefecture('61')">和歌山県</button>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 6">
      <h2 class="r-area6-lbl">中国エリア</h2>
      <hr class="r-area6-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn06" @click="setPrefecture('62')">鳥取県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn06" @click="setPrefecture('63')">島根県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn06" @click="setPrefecture('64')">岡山県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn06" @click="setPrefecture('70')">広島県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn06" @click="setPrefecture('71')">山口県</button>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 7">
      <h2 class="r-area7-lbl">四国エリア</h2>
      <hr class="r-area7-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn07" @click="setPrefecture('72')">徳島県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn07" @click="setPrefecture('73')">香川県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn07" @click="setPrefecture('74')">愛媛県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn07" @click="setPrefecture('80')">高知県</button>
      </td></tr></table>
    </div>
    <div class="r-step0105_map" v-if="prm == 8">
      <h2 class="r-area8-lbl">九州エリア</h2>
      <hr class="r-area8-lbl">
      <table border="0"><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('81')">福岡県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('82')">佐賀県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('83')">長崎県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('84')">熊本県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('90')">大分県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('91')">宮崎県</button>
      </td></tr><tr><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('92')">鹿児島県</button>
      </td><td>
      <button class="r-button r-step0105_mapBtn r-step0105_mapBtn08" @click="setPrefecture('93')">沖縄県</button>
      </td></tr></table>
    </div>
  </div>
</template>

<script>
import {ACTIONS} from '@/store/action-types'

export default {
  name: 'RAreaPrefecture',
  data () {
    return {
      message: 'Popup',
      prm: 0
    }
  },
  props: {
    popupData: {
      required: true
    }
  },
  methods: {
    setPrefecture (val) {
      this.$store.dispatch(ACTIONS.AREAMAP_POPUP, val)
      this.$store.dispatch(ACTIONS.POPUP_CLOSE)
    }
  },
  created () {
    this.prm = this.popupData.prm
  }
}
</script>
<style scoped>
.r-area2-lbl {
  color: #53b5e5;
}
.r-area3-lbl {
  color: #d34e1f;
}
.r-area4-lbl {
  color: #7cc031
}
.r-area5-lbl {
  color: #B404AE;
}
.r-area6-lbl {
  color: #eb9820;
}
.r-area7-lbl {
  color: #43459d;
}
.r-area8-lbl {
  color: #dd0057;
}
.r-step0105_mapBtn {
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 1.1em;
  line-height: 1;
  text-align: left;
  background: #ffffff;
}
.r-step0105_mapBtn:before {
  content: url(../assets/images/r-mapIcon.png);
  top: -1px;
  left: 0;
  margin: 0 5px 0 0;
}
.r-step0105_mapBtn01 {
  color: #2b75aa;
  width: 100px
}
.r-step0105_mapBtn01:hover {
  border: 2px #2b75aa solid;
}
.r-step0105_mapBtn02 {
  color: #53b5e5;
  width: 100px
}
.r-step0105_mapBtn02:hover {
  border: 2px #53b5e5 solid;
}
.r-step0105_mapBtn03 {
  color: #d34e1f;
  width: 120px
}
.r-step0105_mapBtn03:hover {
  border: 2px #d34e1f solid;
}
.r-step0105_mapBtn04 {
  color: #7cc031;
  width: 100px
}
.r-step0105_mapBtn04:hover {
  border: 2px #7cc031 solid;
}
.r-step0105_mapBtn05 {
  color: #B404AE;
  width: 120px
}
.r-step0105_mapBtn05:hover {
  border: 2px #B404AE solid;
}
.r-step0105_mapBtn06 {
  color: #eb9820;
  width: 100px
}
.r-step0105_mapBtn06:hover {
  border: 2px #eb9820 solid;
}
.r-step0105_mapBtn07 {
  color: #43459d;
  width: 100px
}
.r-step0105_mapBtn07:hover {
  border: 2px #43459d solid;
}
.r-step0105_mapBtn08 {
  color: #dd0057;
  width: 120px
}
.r-step0105_mapBtn08:hover {
  border: 2px #dd0057 solid;
}
</style>
