import Button from './button'
import Icon from './icon'
import Loading from './loading'

const version = '0.0.1'
const components = [
  Button,
  Icon,
  Loading
]

const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Afo = {
  install,
  version,
  Button
}

export default Afo
