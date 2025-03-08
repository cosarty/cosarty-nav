import UI from './UI.json'
import Scaffold from './scaffold.json'
import Framework from './框架.json'
import OtherTools from './其他工具.json'
import MicroFrontend from './微前端.json'
import Runtime from './运行时.json'
import CssExtension from './css扩展.json'
import UnitTest from './单元测试.json'
import LowCode from './低代码.json'
import Animation from './动画框架.json'
import Icon from './图标库.json'
export default {
  title: '通用框架',
  nav: [
    {
      title: '运行时',
      nav: Runtime,
    },
    {
      title: 'UI框架',
      nav: UI,
    },
    {
      title: '动画框架',
      nav: Animation,
    },
    {
      title: '图标库',
      nav: Icon,
    },
    {
      title: 'css扩展',
      nav: CssExtension,
    },
    {
      title: '脚手架',
      nav: Scaffold,
    },
    {
      title: '框架',
      nav: Framework,
    },
    {
      title: '低代码',
      nav: LowCode,
    },
    {
      title: '微前端',
      nav: MicroFrontend,
    },
    {
      title: '单元测试',
      nav: UnitTest,
    },
    {
      title: '其他工具',
      nav: OtherTools,
    },
  ],
}
