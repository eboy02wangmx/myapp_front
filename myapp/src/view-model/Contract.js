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
      this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_REMOVE, params);
      this.$router.push('ContractEditTip');
    },
    disabled (id) {
      let params = {id: id};
      this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_DISABLED, params);
      this.$router.push('ContractEditTip');
    },
    enabled (id) {
      let params = {id: id};
      this.$store.dispatch(ACTIONS.MYAPP_CONTRACT_ENABLED, params);
      this.$router.push('ContractEditTip');
    }
  }
}
export default {
  contractViewModel
}
