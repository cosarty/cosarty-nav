import Books from './书籍.json'
import Documentation from './文档资料.json'

export default {
  title: '参考资料',
  icon: 'https://www.python.org/static/favicon.ico',
  nav: [
    {
      title: '书籍',
      nav: Books,
    },
    {
      title: '文档资料',
      nav: Documentation,
    },
  ],
}
