import configs from './modules/configs'
import ui from './modules/ui'
import myapp from './modules/myapp'
import popupParams from './modules/popupParams'
import smbc from './modules/smbc'
import api from './modules/api'
import earthquake from './modules/earthquake'
import errors from './modules/errors'
import top from './modules/top'

export default {
  strict: true,
  modules: {
    configs,
    ui,
    myapp,
    smbc,
    popupParams,
    api,
    earthquake,
    errors,
    top
  }
}
