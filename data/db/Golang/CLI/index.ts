import TerminalColors from './终端颜色.json'
import CommandLineParsing from './命令行解析.json'
import ConsoleProgressBar from './控制台进度条.json'
import Other from './其他.json'

export default {
  title: 'CLI',
  icon: 'https://avatars1.githubusercontent.com/u/4314092?s=200&v=4',
  nav: [
    {
      title: '终端颜色',
      nav: TerminalColors,
    },
    {
      title: '命令行解析',
      nav: CommandLineParsing,
    },
    {
      title: '控制台进度条',
      nav: ConsoleProgressBar,
    },
    {
      title: '其他',
      nav: Other,
    },
  ],
}
