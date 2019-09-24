import {ACTIONS} from '@/store/action-types'
export const contractEditViewModel = {
  name: 'ContractEdit',
  created () {
    var contractId = localStorage.getItem('contractId');
    var contractName = localStorage.getItem('contractName');
    var contractUploadNum = localStorage.getItem('contractUploadNum');
    var contractMoney = localStorage.getItem('contractMoney');
    var contractPv = localStorage.getItem('contractPv');

    this.id = contractId;
    this.name = contractName;
    this.uploadNum = contractUploadNum;
    this.money = contractMoney;
    this.pv = contractPv;
  },
  methods: {
    edit () {
      var name = $('#name').val();
      var uploadNum = $('#uploadNum').val();
      var money = $('#money').val();
      var pv = $('#pv').val();
      if (name.trim() === '') {
        $('#name').val(null);
        $('#msgName').text('プラン名は空ではいけません。');
      } else {
        $('#msgName').text('');
      }
      if (uploadNum.trim() === '') {
        $('#uploadNum').val(null);
        $('#msgUploadNum').text('アップロード可能画像数は空ではいけません。');
      } else {
        $('#msgUploadNum').text('');
      }
      if (money.trim() === '') {
        $('#money').val(null);
        $('#msgMoney').text('月次利用金額は空ではいけません。');
      } else {
        $('#msgMoney').text('');
      }
      if (pv.trim() === '') {
        $('#pv').val(null);
        $('#msgPv').text('月次PV数は空ではいけません。');
      } else {
        $('#msgPv').text('');
      }
      if ($('#msgName').text() === '' && $('#msgUploadNum').text() === '' && $('#msgMoney').text() === '' && $('#msgPv').text() === '') {
        let params = {id: this.id, name: this.name, uploadNum: this.uploadNum, money: this.money, pv: this.pv}
        this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_EDIT, params)
        this.$router.push('Contract');
      }
    }
  }
}
export default {
  contractEditViewModel
}
