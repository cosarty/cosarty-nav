import WEBFramework from './WEB框架.json'
import CommonLibrary from './常用库.json'
import OpenSourceProject from './开源项目.json'
export default {
  title: '框架',
  icon: 'https://www.python.org/static/favicon.ico',
  nav: [
    {
      title: 'WEB框架',
      nav: WEBFramework,
    },
    {
      title: '常用库',
      nav: CommonLibrary,
    },
    {
      title: '开源项目',
      nav: OpenSourceProject,
    },
  ],
}
