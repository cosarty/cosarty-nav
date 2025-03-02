import AIWriting from './AI写作.json'
import ThirdPartyAPI from './第三方接口.json'
import AIInnovationProduct from './AI创新产品.json'
import AIProgramming from './AI编程.json'
import AIPlatform from './AI平台.json'
import AIAgent from './智能体.json'
import KnowledgeBase from './知识库.json'
export default {
  title: 'AI工具',
  nav: [
    {
      title: 'AI平台',
      nav: AIPlatform,
    },
    {
      title: '智能体',
      nav: AIAgent,
    },
    {
      title: '知识库',
      nav: KnowledgeBase,
    },
    {
      title: 'AI写作',
      nav: AIWriting,
    },
    {
      title: '第三方接口',
      nav: ThirdPartyAPI,
    },
    {
      title: 'AI编程',
      nav: AIProgramming,
    },
    {
      title: 'AI创新产品',
      nav: AIInnovationProduct,
    },
  ],
}
