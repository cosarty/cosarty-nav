import OpenSourceTools from './开源工具.json'
import UsefulTools from './实用工具.json'
import SEO from './SEO.json'

export default {
  title: '好用工具',
  icon: '',
  nav: [
    {
      title: '实用工具',
      nav: UsefulTools,
    },
    {
      title: '开源工具',
      nav: OpenSourceTools,
    },
    {
      title: 'SEO',
      nav: SEO,
    },
  ],
}
