import Docker from './Docker.json'
import Git from './Git.json'
import Database from './数据库.json'
import Books from './书籍.json'
import Other from './其他文档.json'

export default {
  title: '参考文档',
  nav: [
    { title: 'Docker', nav: Docker },
    { title: 'Git', nav: Git },
    { title: '数据库', nav: Database },
    { title: '书籍', nav: Books },
    { title: '其他文档', nav: Other },
  ],
}
