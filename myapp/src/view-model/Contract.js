import {ACTIONS} from '@/store/action-types'
export const contractViewModel = {
  name: 'Contract',
  created () {
    this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_LIST);
  },
  methods: {
    getId (id, name, uploadNum, money, pv) {
      localStorage.setItem('contractId', id);
      localStorage.setItem('contractName', name);
      localStorage.setItem('contractUploadNum', uploadNum);
      localStorage.setItem('contractMoney', money);
      localStorage.setItem('contractPv', pv);
    },
    remove (id) {
      let params = {id: id};
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/contract/remove',
        url: 'http://203.189.97.178:8080/myapp-backend/api/contract/remove',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (data) {
          this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_LIST);
        }
      });
    },
    disabled (id) {
      let params = {id: id};
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/contract/disabled',
        url: 'http://203.189.97.178:8080/myapp-backend/api/contract/disabled',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (data) {
          this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_LIST);
        }
      });
    },
    enabled (id) {
      let params = {id: id};
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/contract/enabled',
        url: 'http://203.189.97.178:8080/myapp-backend/api/contract/enabled',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (data) {
          this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_LIST);
        }
      });
    }
  }
}
export default {
  contractViewModel
}
