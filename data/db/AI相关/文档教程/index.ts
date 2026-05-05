import ForumMaterial from './论坛资料.json'
import Prompt from './提示词.json'
import DocumentBook from './教学书籍.json'
import ProgrammingTool from './编程工具.json'

export default {
  title: '文档教程',
  nav: [
    { title: '提示词', nav: Prompt },
    { title: '论坛资料', nav: ForumMaterial },
    { title: '教学书籍', nav: DocumentBook },
    { title: '编程工具', nav: ProgrammingTool },
  ],
}
