import UI from './UI框架.json'
import Framework from './框架.json'
import DevTools from './开发工具.json'
import Hooks from './hooks.json'
import Official from './官网.json'
import OpenSource from './开源后台模版.json'

export default {
  title: 'Vue',
  nav: [
    {
      title: '官网',
      nav: Official,
    },
    {
      title: 'UI框架',
      nav: UI,
    },
    {
      title: '框架',
      nav: Framework,
    },
    {
      title: '开发工具',
      nav: DevTools,
    },
    {
      title: 'Hooks',
      nav: Hooks,
    },
    {
      title: '开源后台模版',
      nav: OpenSource,
    },
  ],
}
