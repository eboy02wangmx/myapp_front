import Vue from 'vue'
import RAccordion from './RAccordion'
import RButton from './RButton'
import RActionButton from './RActionButton'
import RBlock from './RBlock'
import RCheckBox from './RCheckBox'
import RKanaBox from './RKanaBox'
import RLinkButton from './RLinkButton'
import RListBox from './RListBox'
import RMiniRadio from './RMiniRadio'
import RNumberBox from './RNumberBox'
import ROnOffListBox from './ROnOffListBox'
import RRadio from './RRadio'
import RYesNoRadio from './RYesNoRadio'
import RTextBox from './RTextBox'
import RHelp from './RHelp'
import RHelpLink from './RHelpLink'
import RAreaPrefecture from './RAreaPrefecture'
import RKanaTextArea from './RKanaTextArea'

import VuePopper from 'vue-popperjs'

Vue.component(RAccordion.name, RAccordion)
Vue.component(RButton.name, RButton)
Vue.component(RActionButton.name, RActionButton)
Vue.component(RBlock.name, RBlock)
Vue.component(RCheckBox.name, RCheckBox)
Vue.component(RKanaBox.name, RKanaBox)
Vue.component(RLinkButton.name, RLinkButton)
Vue.component(RListBox.name, RListBox)
Vue.component(RMiniRadio.name, RMiniRadio)
Vue.component(RNumberBox.name, RNumberBox)
Vue.component(ROnOffListBox.name, ROnOffListBox)
Vue.component(RRadio.name, RRadio)
Vue.component(RYesNoRadio.name, RYesNoRadio)
Vue.component(RTextBox.name, RTextBox)
Vue.component(RHelp.name, RHelp)
Vue.component(RHelpLink.name, RHelpLink)
Vue.component(RAreaPrefecture.name, RAreaPrefecture)

Vue.component(RKanaTextArea.name, RKanaTextArea)

Vue.component('popper', VuePopper)

export default {}
