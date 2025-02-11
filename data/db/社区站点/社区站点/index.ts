import QACommunity from './问答社区.json'
import Other from './其他.json'
import CodeHosting from './代码托管.json'

export default {
  title: '社区站点',
  nav: [
    { title: '问答社区', nav: QACommunity },
    { title: '代码托管', nav: CodeHosting },
    { title: '其他', nav: Other },
  ],
}
