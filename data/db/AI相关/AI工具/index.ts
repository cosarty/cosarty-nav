import AIWriting from './AI写作.json'
import ThirdPartyAPI from './第三方接口.json'
import AIInnovationProduct from './AI创新产品.json'
import AIPlatform from './AI平台.json'
import AIAgent from './智能体.json'
import KnowledgeBase from './知识库.json'
import Workflow from './工作流.json'
import Material from './资料.json'
import ModelDownloader from './模型下载器.json'
import Framework from './框架.json'
import VectorDatabase from './向量数据库.json'

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
      title: '模型下载器',
      nav: ModelDownloader,
    },
    {
      title: '工作流',
      nav: Workflow,
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
      title: '向量数据库',
      nav: VectorDatabase,
    },
    {
      title: 'AI创新产品',
      nav: AIInnovationProduct,
    },
    {
      title: '框架',
      nav: Framework,
    },
    {
      title:'资料',
      nav:Material
    }
  ],
}
