import Button from './button'
import Icon from './icon'
import Loading from './loading'
import Badge from './badge'
import Navbar from './navbar'
import Tag from './tag'
import Card from './card'
import NoticeBar from './notice-bar'
import TabBar from './tabbar'
import TabBarItem from './tabbar-item'
import Rate from './rate'
import Step from './step'
import Steps from './steps'
import Tab from './tab'
import Tabs from './tabs'
import Pagination from './pagination'
import Progress from './progress'
import Slider from './slider'

const version = '0.0.1'
const components = [
  Button,
  Icon,
  Loading,
  Badge,
  Navbar,
  Tag,
  Card,
  NoticeBar,
  TabBar,
  TabBarItem,
  Rate,
  Tab,
  Tabs,
  Pagination,
  Progress,
  Steps,
  Step,
  Slider
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
  Icon,
  Loading,
  Button,
  Badge,
  Navbar,
  Tag,
  Card,
  NoticeBar,
  TabBar,
  TabBarItem,
  Rate,
  Tab,
  Tabs,
  Pagination,
  Progress,
  Steps,
  Step,
  Slider
}

export default Afo
