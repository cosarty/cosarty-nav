import other from './其他.json'
import books from './书籍.json'

export default {
  title: '参考资料',
  nav: [
    {
      title: '书籍',
      nav: books,
    },
    {
      title: '其他',
      nav: other,
    },
  ],
}
