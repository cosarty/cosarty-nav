import GUI from './GUI.json'
import LogModule from './日志模块.json'
import Database from './数据库.json'
import Parser from './解析器.json'
import ParameterValidation from './参数验证.json'
import Other from './其他.json'

export default {
  title: '依赖包',
  icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
  nav: [
    {
      title: 'GUI',
      nav: GUI,
    },
    {
      title: '日志模块',
      nav: LogModule,
    },
    {
      title: '数据库',
      nav: Database,
    },
    {
      title: '解析器',
      nav: Parser,
    },
    {
      title: '参数验证',
      nav: ParameterValidation,
    },
    {
      title: '其他',
      nav: Other,
    },
  ],
}
